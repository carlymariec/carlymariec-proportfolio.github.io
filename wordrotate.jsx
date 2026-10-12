import React, { useEffect, useState } from 'react';

export function WordRotate({ words, duration = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return <span className="word-rotate-span">{words[index]}</span>;
}

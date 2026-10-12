module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legalOffwhite: "#fbfbfd",
        legalCharcoal: "#1e1e24",
        legalSlate: "#4a5568",
        legalGold: "#d4af37",          /* Rich Golden Yellow */
        legalGoldBtn: "#e5a93b",       /* Warm Radiant Gold */
        legalTurquoise: "#008b91",
        legalPurple: "#d6b4f8",        /* Iridescent Pastel Purple */
        iridescentPurple: "#e9d5ff",   /* Ultra-light shimmering purple */
      },
      fontFamily: {
        roman: ["Latin Modern Roman", "Computer Modern", "EB Garamond", "Lora", "serif"],
      },
    },
  },
  plugins: [],
}
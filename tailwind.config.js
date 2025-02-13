module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/layouts/**/*.html",
    "./static/**/*.html",
    "./assets/**/*.js",
    "./assets/**/*.vue",
    "./assets/**/*.jsx",
    "./config.toml",
    "!./node_modules/**/*",   // Exclude node_modules
    "!./themes/**/*",         // Exclude themes directory
    "!./public/**/*"          // Exclude public directory
  ],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

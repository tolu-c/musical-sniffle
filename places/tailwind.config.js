/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        side: "slideInOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

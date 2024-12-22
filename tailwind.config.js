/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "yellow-present": "var(--yellow-present)",
        "white-normal": "var(--white-normal)",
        "gray-less": "var(--gray-less-gray)",
        "gray-more": "var(--gray-more-gray)",
      },
      fontFamily:{
        "family-base": "var(--font-family-base)"
      },
      fontWeight:{
        "font-weight-base-less": "var(--font-weight-base-less)",
        "font-weight-base-more": "var(--font-weight-base-more)"
      },
      fontSize:{
        "size-paragraph": "var(--font-paragraph)"
      }
    },
  },
  plugins: [],
}


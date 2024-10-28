module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
    },
    extend: {
      colors: {
        sb: {
          50: "#f2fafc",
          100: "#e4f3f7",
          200: "#c0e3ed",
          300: "#9fd1e3",
          400: "#61aacf",
          500: "#2c83ba",
          600: "#2572a8",
          700: "#19578c",
          800: "#104070",
          900: "#092b54",
          950: "#041836",
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontSize: {
      sm: ["0.75rem", "1rem"],
      base: ["1.1rem", "1.75rem"],
      lg: ["1.2rem", "2rem"],
      xl: ["1.5rem", "2.4rem"],
      "2xl": ["1.75rem", "2.4rem"],
      "3xl": ["2.75rem", "4rem"],
    },
  },
  plugins: [],
};

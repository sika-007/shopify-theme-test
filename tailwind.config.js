/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme/**/*.liquid"],
  theme: {
    extend: {
      colors: {
        "gradient-top": "#F9F0E5",
        "gradient-bottom": "rgba(249, 240, 229, 0)",
        primary: "#01005B",
        secondary: "#676869",
        button: "#FFFFFF",
        comfort_card1: "#F0EEEF",
        comfort_card2: "#EDEDED",
        comfort_card3: "#EDEDED",
      },
      backgroundImage: {
        gradient: `linear-gradient(180deg, var(--tw-colors-gradient-top) 0%, var(--tw-colors-gradient-bottom) 100%)`,
      },
      fontFamily: {
        "sofia-pro": ["Sofia Pro", "sans-serif"],
        "suisse-intl": ["Suisse Int'l", "sans-serif"],
      },
      fontSize: {
        size_heading: "32px",
        size_body: "15px",
        size_point: "22px",
        size_button: "18px",
        "size_testimonial-body": "12px",
        "size_faq-point": "18px",
      },
      lineHeight: {
        heading: "40px",
        body: "23px",
        point: "24px",
        button: "23.35px",
        "testimonial-body": "23px",
        "faq-point": "24px",
      },
      letterSpacing: {
        heading: "0.04em",
        body: "0.03em",
        point: "0.04em",
        button: "0.03em",
        "testimonial-body": "0.04em",
        "faq-point": "0.04em",
      },
    },
  },
  plugins: [],
};

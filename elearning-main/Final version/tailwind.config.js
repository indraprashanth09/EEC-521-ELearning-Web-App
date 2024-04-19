/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darksalmon: {
          100: "#e48977",
          200: "#db7c64",
        },
        gainsboro: "#d9d9d9",
        slateblue: "#3541ab",
        darkgray: "#a79595",
        mediumslateblue: "#355ce9",
        firebrick: "#c70303",
        blue: "#0009e9",
        salmon: "#e57057",
      },
      fontFamily: {
        inter: "Inter",
        "lexend-mega": "'Lexend Mega'",
        "source-code-pro": "'Source Code Pro'",
        "island-moments": "'Island Moments'",
      },
      borderRadius: {
        "51xl": "70px",
        "56xl": "75px",
        "25xl-9": "44.9px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "mid-1": "17.1px",
      "6xl": "25px",
      "26xl": "45px",
      "12xl-1": "31.1px",
      "lgi-3": "19.3px",
      "base-7": "16.7px",
      "8xl-4": "27.4px",
      xl: "20px",
      "31xl": "50px",
      "5xl": "24px",
      sm: "14px",
      "36xl": "55px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

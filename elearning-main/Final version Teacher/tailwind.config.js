/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        red: "#d91010",
        cornflowerblue: "#7d74b4",
        darkslategray: "#443c3c",
        lightsteelblue: "#a7a3cb",
        royalblue: "#3e59b9",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "51xl": "70px",
      },
    },
    fontSize: {
      "mid-1": "17.1px",
      "lgi-7": "19.7px",
      "3xl-4": "22.4px",
      "26xl": "45px",
      "15xl-1": "34.1px",
      "base-9": "15.9px",
      "27xl-9": "46.9px",
      "smi-9": "12.9px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

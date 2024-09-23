/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "relatives-background": "url(./img/poster_black_girl.png)",
      },
      screens: {
        "3xl": "1800px",
      },
      colors: {
        payqinBlue: "#2B91FF",
        payqinBlueNew: "#4495F9",
        faq: "#F8F9FF",
        lightcyan:"#E8F2FF",
        lightPurple : "#FAF9FF",
        textNewApp: "#1E003D",
        payqinExtraLightBlue: "#F7FBFF",
        payqinLightBlue: "#EAF4FF",
        payqinViolet: "#9863FC",
        payqinGradiantLeft: "#D1E0F6",
        payqinGradiantRight: "#DCF3FA",
        payqinGrayText: "#646464",
        payqinGradiantGreenLeft: "#CEFCA680",
        payqinGradiantGreenRight: "#ADFBDA80",
        payqinUserGradiantLeft: "#E3DAFC",
        payqinUserGradiantRight: "#DCEDFC",
        payqinGradientBL: "#D9F9EF",
        payqinGradientTR: "#D6E0FC",
        payqinGradientGreenLeft: "#D2EEB6",
        payqinGradientGreenRight: "#BAECBC",
        payqinPink: "#FBF9FF",
        payqinPricingBg: "#F9F7FE",
        payqinDarkerPingBg: "#F5F1FE",
        payqinTestGray: "#D9DBDC",
        payqinGreen: "#DAFDE6",
        payqinYellow: "#E7FED5",
        payqinViolet: "#D2D1F2",
      },
    },
  },
  plugins: [],
};

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Orbitron"', "sans-serif"],
        customFont1: ['"Mulish"', "sans-serif"],
        customFont2: ['"Reem+Kufi+Ink"', "Teko"],
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        "spin-slow": "spin 13s linear infinite",
        "spin-slow1": "spin 13s linear infinite",
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "homeaccrediancom-nero": "#fff",
        "homeaccrediancom-mine-shaft": "#282828",
        "homeaccrediancom-mystic": "#e2e8f0",
        "homeaccrediancom-japanese-laurel": "#007bff",
        "homeaccrediancom-royal-blue": "#1a73e8",
        dodgerblue: "#3b82f6",
        whitesmoke: "#f5f5f5",
        gray: {
          "100": "rgba(0, 0, 0, 0.22)",
          "200": "rgba(0, 0, 0, 0.87)",
        },
        dimgray: "#737373",
        "homeaccrediancom-mirage": "#1a202c",
        silver: "#b7b7b7",
        darkslategray: {
          "100": "#4b4b4b",
          "200": "#3c4852",
          "300": "rgba(60, 72, 82, 0.52)",
        },
        royalblue: {
          "100": "rgba(26, 115, 232, 0.11)",
          "200": "rgba(26, 115, 232, 0.35)",
        },
        darkslateblue: "#1350a0",
        aliceblue: {
          "100": "#eef5ff",
          "200": "rgba(235, 243, 255, 0.35)",
        },
        black: "#000",
        "homeaccrediancom-gull-gray-20": "rgba(148, 163, 184, 0.2)",
        "homeaccrediancom-royal-blue-15": "rgba(26, 115, 232, 0.15)",
        "homeaccrediancom-mine-shaft1": "#262626",
      },
      spacing: {},
      fontFamily: {
        "homeaccrediancom-roboto-bold-17": "Roboto",
      
        inter: "Inter",
        "source-sans-pro": "'Source Sans Pro'",
      },
      borderRadius: {
        "6xs": "7px",
        sm: "14px",
        "26xl": "45px",
        "10xl": "29px",
        "19xl": "38px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      lg: "18px",
      mid: "17px",
      "lg-8": "18.8px",
      "base-7": "16.7px",
      "9xl": "28px",
      "3xl": "22px",
      "base-1": "15.1px",
      "base-9": "16.9px",
      "base-6": "16.6px",
      "8xl-7": "27.7px",
      "13xl": "32px",
      "5xl": "24px",
      "35xl": "54px",
      "21xl": "40px",
      "69xl": "88px",
      "25xl": "44px",
      "7xl": "26px",
      "6xl": "25px",
      "mini-8": "14.8px",
      "base-3": "15.3px",
      mini: "15px",
      "mini-9": "14.9px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        blue: "#050816",
        grey: "#aaa6c3",
        black: "#212121",
        Notification: "#8e2de2",
        description: "#6b6b6b",
        opacity: "rgba(0, 0, 0, 0.5)",
        purple: "#4a00e0",
        cartItemBg: "rgba(0,0,0,0.05)",
        lightgray: "#212121",
      },
      backgroundImage: {
        "custom-gradient" : "linear-gradient(to right, #8e2de2, #4a00e0)"
      },
      height: {
        "calc-h" : "calc(100vh - 80px)"
      },
      width:{
        "customSmall" : "calc(25% - 5px)",
        "customMedium" : "calc(25% - 10px)",
        "prodSmWidth" : "calc(50% - 5px)",
        "prodMdWidth" : "calc(25% - 10px)",
        "productWidth": "calc(50% - 10px)"
      },
      boxShadow: {

      },
      screens: {
        xs: "640px"
      },

      keyframes: {
        stickyNav: {
          "0%": {
            transform: "translateY(-50px)"
          },
          "100%" : {
            transform: "translateY(0px)"
          }
        },
        cartMenu: {
          "0%" : {
            transform: "translateX(100%)"
          },
          "100%" : {
            transform: "translateX(0%)"
          }
        },
        searchMenu: {
          "0%" : {
            transform : "translateY(100%)"
          },
          "100%" : {
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        stickyNav: "stickyNav 0.3s ease forwards",
        cartMenu: "cartMenu 0.3s ease forwards",
        searchMenu: "searchMenu 0.3s ease forwards",
      }
    },
  },
  plugins: [],
}

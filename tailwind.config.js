/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    "dark-green": "#2D7245",
                    "navy-blue": "#00709B",
                    "light-blue": "#16A4D1",
                    black: "##1D1D35",
                    white: "#F0F2E8",
                    blue: "#4373c6",
                    red: "#AD413D",
                    green: "#14C469",
                    grey: "#FAFAFA",
                    "dark-grey": "#EFEFEF",
                },
                primary: "#14C469",
                danger: "#AD413D",
                secondary: "#4373c6",
                warning: "#d89517",
            },
            padding: {
                "custom-sm": "10px",
                "custom-sm-2": "20px",
                "custom-md": "14px",
                "custom-md-2": "24px",
            },
        },
    },
    plugins: [],
};

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
                    blue: "#3961BC",
                    red: "#AD413D",
                    green: "#14C469",
                },
            },
        },
    },
    plugins: [],
};

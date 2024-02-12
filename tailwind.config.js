/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#323B4C",
                input: "#F1F3F9",
                mainHover: "rgba(50, 59, 76, 0.8)",
                error: "#ff0000",
            },
        },
    },
    plugins: [],
};

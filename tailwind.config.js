/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: {
                        DEFAULT: "#0d8943",
                        50: "#f0fdf4",
                        100: "#dcfce7",
                        200: "#bbf7d0",
                        300: "#86efac",
                        400: "#4ade80",
                        500: "#22c55e",
                        600: "#0d8943", // Base
                        700: "#15803d",
                        800: "#166534",
                        900: "#14532d",
                        950: "#052e16",
                    },
                    secondary: {
                        DEFAULT: "#59ba47",
                        50: "#f5fce8",
                        100: "#eafacb",
                        200: "#d7f59d",
                        300: "#bceb68",
                        400: "#a3db38",
                        500: "#59ba47", // Base
                        600: "#44962c",
                        700: "#377426",
                        800: "#2f5c22",
                        900: "#274c20",
                        950: "#122a0e",
                    },
                    accent: {
                        DEFAULT: "#151515",
                        50: "#f6f6f6",
                        100: "#e7e7e7",
                        200: "#d1d1d1",
                        300: "#b0b0b0",
                        400: "#888888",
                        500: "#6d6d6d",
                        600: "#5d5d5d",
                        700: "#4f4f4f",
                        800: "#454545",
                        900: "#3d3d3d",
                        950: "#151515", // Base
                    },
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "fade-in-up": "fadeInUp 0.5s ease-out",
                "fade-in-down": "fadeInDown 0.5s ease-out",
                "slide-in-left": "slideInLeft 0.5s ease-out",
                "slide-in-right": "slideInRight 0.5s ease-out",
                "bounce-slow": "bounce 3s infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeInDown: {
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page":
          "url('https://cdn.pixabay.com/photo/2013/02/26/01/10/auditorium-86197_1280.jpg')",
      },
    },
  },
  plugins: [],
};

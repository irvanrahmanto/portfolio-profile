/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin"; 

export default {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'customBlue': '#2C88D9', // Add your custom color
      },
    }
  },
  plugins: [
    flowbite
  ],
}


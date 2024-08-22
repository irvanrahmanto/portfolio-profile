/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin"; 

export default {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {}
  },
  plugins: [
    flowbite
  ],
}


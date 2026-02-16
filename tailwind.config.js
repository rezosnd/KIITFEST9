/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        press: ["'Press Start 2P'", 'cursive'],
        joystick: ['Joystick', 'monospace'],
        gumball: ['Gumball', 'monospace'],
        fipps: ['Fipps', 'monospace']
      }
    }
  },
  plugins: []
};

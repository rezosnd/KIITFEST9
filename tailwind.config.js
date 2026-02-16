/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  // Temporarily disable Preflight if you rely on browser defaults
  // to restore earlier visual behavior after upgrading to Tailwind v4.
  corePlugins: {
    preflight: false,
  },
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      Regular: ["Pretendard-Regular"],
      Bold: ["Pretendard-Bold"],
      SemiBold: ["Pretendard-SemiBold"],
      ExtraBold: ["Pretendard-ExtraBold"],
      Black: ["Pretendard-Black"],
      Thin: ["Pretendard-Thin"],
      ExtraLight: ["Pretendard-ExtraLight"],
      Light: ["Pretendard-Light"],
      Medium: ["Pretendard-Medium"],
    },
    extend: {},
  },
  plugins: [],
};

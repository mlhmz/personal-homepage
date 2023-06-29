/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  singleQuote: false,
  tabWidth: 2,
  printWidth: 110,
  trailingComma: "all",
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  // CUSTOM: Customize the options below to suit your preferences
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
};

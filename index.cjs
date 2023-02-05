module.exports = {
  plugins: [require.resolve("prettier-plugin-packagejson")],
  htmlWhitespaceSensitivity: "ignore",
  proseWrap: "always",
  quoteProps: "consistent",
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  vueIndentScriptAndStyle: true,
}

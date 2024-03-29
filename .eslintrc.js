module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};

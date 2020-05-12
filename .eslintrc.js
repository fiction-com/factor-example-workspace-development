module.exports = {
  root: true,

  globals: {
    __dirname: false,
    require: false,
    module: false,
    process: false,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],

  plugins: [
    "vue",
    "json",
    "prettier",
    "unicorn",
    "import",
    "@typescript-eslint",
  ],
};

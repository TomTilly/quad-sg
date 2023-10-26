const prettierSettings = require('./.prettierrc.cjs');

/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  root: true,
  ignorePatterns: ["dist", ".eslintrc.cjs", ".prettierrc.js"],
  rules: {
      'eqeqeq': 'error',
      'prettier/prettier': [
         'error',
         {
            ...prettierSettings,
         },
      ],
   },
};

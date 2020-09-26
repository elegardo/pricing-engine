module.exports = {
  root: true,
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  plugins: ['jest', 'prettier', 'promise'],
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': ['error'],
    'no-unused-vars': ['error', { args: 'all' }],
    'require-await': ['error'],
  },
}

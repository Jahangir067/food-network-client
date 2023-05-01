module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-unsused-vars': 0,
    'no-undef': 0,
    "react/prop-types": 0,
    "extends": "eslint:recommended",
    'react-refresh/only-export-components': 'warn',
  },
}

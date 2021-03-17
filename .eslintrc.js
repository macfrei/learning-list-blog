module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writable',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 12,
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}

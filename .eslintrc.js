module.exports = {
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@atoms': './src/atoms',
          '@molecules': './src/molecules',
          '@organisms': './src/organisms',
          '@templates': './src/templates',
          '@pages': './src/pages',
          '@services': './src/services',
          '@context': './src/context',
          '@assets': './src/assets',
        },
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    SwaggerEditor: false,
  },
  plugins: ['react', 'prettier'],
  quotes: [2, 'single'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 0,
  },
};

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'import',
  ],
  env: {
    jest:true,
    browser: true,
  },
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      webpack: {
        config: './webpack.config.dev.js'
      }
    },
  },
};
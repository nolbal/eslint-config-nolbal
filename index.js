module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
  ],
  env: {
    browser: true,
  },
  rules: {
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    curly: ['error', 'all'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/webpack.{common,dev,prod}.js',
      ],
    }],
  },
  settings: {
    'import/resolver': {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396
      [require.resolve('eslint-import-resolver-node')]: {},
      [require.resolve('eslint-import-resolver-webpack')]: {
        config: 'webpack.common.js',
      },
    },
  },
};

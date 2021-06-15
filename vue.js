module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
  ].map(require.resolve).concat(['plugin:vue/essential']),
  plugins: [
    'vue',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'vue/script-indent': ['error', 2, {'baseIndent': 1, 'switchCase': 1}],
    'vue/no-multiple-template-root': 'off',
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
      }
    },
    {
      'files': ['*.js'],
      'rules': {
        'vue/script-indent': 'off',
      }
    }
  ],

}

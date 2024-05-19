module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  // extends: ['airbnb', 'plugin:react-hooks/recommended'],
  plugins: ['import', 'react'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'no-warning-comments': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'react/destructuring-assignment': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,
    'react/prop-types': 'off',
    'max-len': [1, 120, 2, { ignoreUrls: true }],
    'no-console': 1,
    'no-alert': 1,
    'no-param-reassign': 'off',
    'import/prefer-default-export': 0,


    radix: 'off',

    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],

    'prefer-destructuring': 'off',
    'no-underscore-dangle': [0],
    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'prefer-arrow-callback': 'off',
    camelcase: 0,

  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react'],
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@next/next/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                importNames: ['FC'],
                message: 'Please use `React.FC` instead of `FC`.'
              }
            ]
          }
        ]
      }
    }
  ]
}

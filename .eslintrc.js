module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
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
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

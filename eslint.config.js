import eslintPluginAstro from 'eslint-plugin-astro'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  {
    files: ['*.astro'],
    parser: 'astro-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.astro']
    }
  }
]

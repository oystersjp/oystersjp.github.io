/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-html/html',
    'stylelint-config-html/xml',
    'stylelint-config-html/astro'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
}

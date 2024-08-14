import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [
    /**
     * Safe area utilities
     * | Utilities         | Styles                                            |
     * | ----------------- | ------------------------------------------------- |
     * | mx-safe, px-safe  | env(safe-area-inset-{right, left})                |
     * | my-safe, py-safe  | env(safe-area-inset-{top, bottom})                |
     * | mt-safe, pt-safe  | env(safe-area-inset-top)                          |
     * | mr-safe, pr-safe  | env(safe-area-inset-right)                        |
     * | mb-safe, pb-safe  | env(safe-area-inset-bottom)                       |
     * | ml-safe, pl-safe  | env(safe-area-inset-left)                         |
     */
    plugin(({ addUtilities }) => {
      /**
       * @param spacingProperty {'padding' | 'margin'}
       */
      const generate = (spacingProperty) =>
        Object.entries({
          x: ['left', 'right'],
          y: ['top', 'bottom'],
          t: ['top'],
          r: ['right'],
          b: ['bottom'],
          l: ['left']
        }).map(([key, directions]) => ({
          [`.${spacingProperty === 'padding' ? 'p' : 'm'}${key}-safe`]:
            directions.reduce(
              (prev, direction) => ({
                ...prev,
                [`${spacingProperty}-${direction}`]: `env(safe-area-inset-${direction})`
              }),
              {}
            )
        }))

      addUtilities(generate('padding'))
      addUtilities(generate('margin'))
    })
  ]
}

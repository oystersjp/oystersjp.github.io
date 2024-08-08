/** @type {import('lint-staged').Config} */
export default {
  '*.{css,scss,astro}': ['npm run fix:css', 'npm run fix:format'],
  '*.{js,cjs,ts,jsx,tsx,astro}': ['npm run fix:js', 'npm run fix:format'],
  '*.{md,html,json,yaml,yml}': ['npm run fix:format']
}

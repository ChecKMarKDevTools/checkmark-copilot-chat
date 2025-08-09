export default {
  '**/*.*': 'npm run spellcheck -- --show-suggestions',
  '*.js': ['npm run format', 'npm run lint'],
  '*.{json,css,yml,yaml}': ['npm run format'],
  '*.md': 'npm run format',
};

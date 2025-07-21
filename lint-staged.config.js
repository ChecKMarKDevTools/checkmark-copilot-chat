export default {
  '**/*.*': 'cspell --show-suggestions',
  '*.js': ['npm run lint:js -- --fix', 'npm run format'],
  '*.{json,css,yml,yaml}': 'npm run format',
  // '*.md': 'remark --output', // Disabled - causing issues with multiple files
};

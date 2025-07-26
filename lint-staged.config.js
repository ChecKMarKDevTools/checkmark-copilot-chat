export default {
  '**/*.*': 'cspell --show-suggestions',
  '*.js': ['npm run lint:js -- --fix', 'npm run format'],
  '*.{json,css,yml,yaml}': ['npm run format'],
  '*.md': (filenames) => [`remark ${filenames.join(' ')} --output`],
};

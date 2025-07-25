export default {
  '**/*.*': 'cspell --show-suggestions',
  '*.js': ['npm run lint:js -- --fix', 'npm run format', 'git add'],
  '*.{json,css,yml,yaml}': ['npm run format', 'git add'],
  '*.md': (filenames) => [
    `remark ${filenames.join(' ')} --output`,
    `git add ${filenames.join(' ')}`,
  ],
};

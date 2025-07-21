export default {
  version: '0.2',
  language: 'en',
  dictionaries: ['project-dict'],
  dictionaryDefinitions: [
    {
      name: 'project-dict',
      path: './.vscode/project-dict.txt',
      addWords: true,
    },
  ],
  ignorePaths: [
    'node_modules/**',
    'package.json',
    'package-lock.json',
    '.gitignore',
    '**/.gitignore',
  ],
};

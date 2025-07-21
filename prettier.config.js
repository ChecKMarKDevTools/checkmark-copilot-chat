export default {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  proseWrap: 'preserve',
  useTabs: false,
  overrides: [
    {
      files: '**/*.json',
      options: { parser: 'json' },
    },
    {
      files: '**/*.yaml,**/*.yml',
      options: { parser: 'yaml' },
    },
  ],
};

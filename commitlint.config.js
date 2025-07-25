export default {
  // The following line defines specific presets (also called shared configs) to use for commitlint.
  // This is the most common preset, which is based on the Conventional Commits specification.
  // Others are available, but this is the most widely used.
  // See: https://commitlint.js.org/reference/configuration.html#shareable-configuration
  extends: ['@commitlint/config-conventional'],

  // Rule format: 'rule-name': [level, applicable, value]
  //   - Level: 0 = off, 1 = warning, 2 = error
  //   - Applicable: 'always' or 'never'
  //   - Value: can be an array of values or a number, depending on the rule
  //     - An array defining a single value may instead be input as a string for clarity
  // See: https://commitlint.js.org/#/reference-rules for the full list
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'type-empty': [2, 'never'],
    'scope-enum': [0, 'always', []],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'header-trim': [1, 'always'],
    'type-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-leading-blank': [2, 'always'],
    'body-empty': [2, 'never'],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
    'signed-off-by': [2, 'always'],
    'trailer-exists': [2, 'always', 'Signed-off-by'],
  },
  'scope-empty': (ctx) =>
    new Promise((resolve) => {
      if (['feat', 'fix', 'refactor', 'perf', 'test'].includes(ctx.type)) {
        resolve([2, 'never']);
      } else {
        resolve([0, 'always']);
      }
    }),
};

import globals from 'globals';
import pluginJs from '@eslint/js';
import cspellPlugin from '@cspell/eslint-plugin';

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    extends: ['plugin:naming/recommended'],
    plugins: {
      '@cspell': cspellPlugin,
    },
    rules: {
      '@cspell/spellchecker': ['warn', { autoFix: true }],
      'no-warning-comments': ['error', { terms: ['eslint-disable'], location: 'anywhere' }],
      'func-style': ['error', 'expression'],
      'naming/case': ['error', 'kebab'],
    },
  },
  {
    files: ['test/**/*', '*test*'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CatchClause',
          message:
            'Do not use catch statements in test files. Use expect(...).rejects or .toThrow() for error assertions.',
        },
      ],
    },
  },
];

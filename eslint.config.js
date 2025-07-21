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
    plugins: {
      '@cspell': cspellPlugin,
    },
    rules: {
      '@cspell/spellchecker': ['warn', { autoFix: true }],
    },
  },
];

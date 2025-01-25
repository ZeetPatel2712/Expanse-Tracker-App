import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import html from '@html-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
     { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
     { languageOptions: { globals: globals.browser } },
     pluginJs.configs.recommended,
     ...tseslint.configs.recommended,
     {
          ...html.configs['flat/recommended'],
          files: ['**/*.html'],
          rules: {
               '@html-eslint/no-duplicate-attrs': 'error',
               '@html-eslint/no-duplicate-id': 'error',
               '@html-eslint/no-extra-spacing-text': 'error',
               '@html-eslint/no-inline-styles': 'error',
               '@html-eslint/no-nested-interactive': 'error',
               '@html-eslint/no-obsolete-tags': 'error',
               '@html-eslint/no-script-style-type': 'error',
               '@html-eslint/prefer-https': 'error',
               '@html-eslint/require-button-type': 'error',
               '@html-eslint/require-doctype': 'error',
               '@html-eslint/require-explicit-size': 'error',
               '@html-eslint/require-li-container': 'error',
               '@html-eslint/require-meta-charset': 'error',
               '@html-eslint/no-multiple-h1': 'error',
               '@html-eslint/require-lang': 'error',
               '@html-eslint/require-meta-description': 'error',
               '@html-eslint/require-title': 'error',
               '@html-eslint/no-heading-inside-button': 'error',
               '@html-eslint/no-skip-heading-levels': 'error',
               '@html-eslint/require-form-method': 'error',
               '@html-eslint/require-frame-title': 'error',
               '@html-eslint/require-img-alt': 'error',
               '@html-eslint/require-input-label': 'error',
               '@html-eslint/require-meta-viewport': 'error',
               '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
               '@html-eslint/lowercase': 'error',
               '@html-eslint/no-multiple-empty-lines': 'error',
               '@html-eslint/quotes': 'error',
               '@html-eslint/sort-attrs': 'error',
               // '@html-eslint/no-extra-spacing-attrs': 'error',
          },
     },
];

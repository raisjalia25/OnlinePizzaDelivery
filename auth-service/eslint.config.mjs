// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.url, // Use import.meta.url to get the correct directory
      },
    },
    rules: {
      // Uncomment the following line to enable the rule
      // "no-console": "error",
      // Add your custom rules here
    },
  }
);
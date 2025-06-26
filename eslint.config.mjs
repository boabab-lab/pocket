import js from '@eslint/js';

export default [
  {
    ignores: [
      '**/types.ts',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/node_modules/**',
    ],
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        process: true,
        __dirname: true,
        __filename: true,
        Buffer: true,
        module: true,
        exports: true,
        require: true,
      },
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin'))
        .default,
      react: (await import('eslint-plugin-react')).default,
      'react-hooks': (await import('eslint-plugin-react-hooks')).default,
      import: (await import('eslint-plugin-import')).default,
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

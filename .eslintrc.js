export default {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    es2021: true,
  },
  overrides: [
    {
      files: ['apps/demo/**/*.{ts,tsx}'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      plugins: ['react', 'react-hooks'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals',
        'next/typescript',
      ],
      settings: {
        react: { version: 'detect' },
      },
    },
    {
      files: ['apps/server/**/*.{ts,js}'],
      env: {
        node: true,
      },
    },
  ],
};

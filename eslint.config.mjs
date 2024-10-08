import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['node_modules/'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Ajusta esto según tu configuración de TypeScript
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // Aquí puedes agregar tus reglas personalizadas
    },
  },
];

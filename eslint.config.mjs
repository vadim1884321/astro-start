import { defineConfig, globalIgnores } from 'eslint/config';
import astroEslintParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default defineConfig([
	// Подключаем рекомендуемые настройки для JavaScript
	{
		files: ['**/*.js', '**/*.jsx'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			js,
		},
		extends: ['eslint:recommended'],
	},
	// Настройка для файлов Astro (.astro)
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroEslintParser,
			parserOptions: {
				extraFileExtensions: ['.astro'],
			},
		},
		plugins: {
			astro: eslintPluginAstro,
		},
		extends: ['plugin:astro/recommended'],
	},
	// Настройки для TypeScript и встроенных <script> в .astro
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.astro/*.js', '**/*.astro/*.ts'],
		languageOptions: {
			parser: typescriptParser,
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		extends: ['plugin:@typescript-eslint/recommended'],
		rules: {
			// Отключаем стандартное правило `no-unused-vars`, так как используется TypeScript-версия
			'no-unused-vars': 'off',
			// Настроенное правило для неиспользуемых переменных в TypeScript
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					// Игнорируем переменные, начинающиеся с `_`
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^__',
				},
			],
			// Разрешаем использование `!` для non-null утверждений в TypeScript
			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	// Общие правила для JavaScript, JSX и Astro-файлов
	{
		files: ['**/*.js', '**/*.jsx', '**/*.astro'],
		rules: {
			// Запрещаем смешивание пробелов и табов (но разрешаем smart-tabs)
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		},
	},
	// Глобальные игнорируемые пути
	globalIgnores(['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro/cache', 'public/pagefind']),
]);

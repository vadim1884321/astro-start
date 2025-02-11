/** @type {import("stylelint").Config} */
export default {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-html/astro',
		'stylelint-config-html/html',
		'stylelint-config-rational-order',
		'stylelint-config-prettier-scss',
	],
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'theme',
					'source',
					'utility',
					'variant',
					'custom-variant',
					'apply',
					'variants',
					'reference',
					'config',
					'plugin',
				],
			},
		],
	},
	ignoreFiles: ['**/node_modules/**'],
};

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
		'value-keyword-case': ['lower', { ignoreFunctions: ['theme'] }],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		],
	},
	ignoreFiles: ['**/node_modules/**'],
};

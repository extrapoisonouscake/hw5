module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'unused-imports',
	],
	rules: {
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/naming-convention': 0,
		'func-names': 0,
		'unused-imports/no-unused-imports': 'error',
		'@typescript-eslint/no-floating-promises': 0,
		'new-cap': 0,
		'@typescript-eslint/prefer-nullish-coalescing': 0,
		'no-mixed-spaces-and-tabs': 0,
	},
};

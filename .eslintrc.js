/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

'use strict';

module.exports = {
	extends: 'ckeditor5',
	rules: {
		'ckeditor5-rules/ckeditor-imports': 'error'
	},
	overrides: [
		{
			files: [ '**/src/**/*.js', '.eslintrc.js', '**/webpack.dev.config.js' ],
			rules: {
				'linebreak-style': 'off',
				'comma-dangle': 'off',
				'array-bracket-spacing': 'off',
				'arrow-parens': 'off',
				'space-in-parens': 'off',
				'no-undef': 'off'
			}
		},
		{
			files: [ '**/tests/**/*.js' ],
			rules: {
				'no-unused-expressions': 'off',
				'ckeditor5-rules/ckeditor-imports': 'off',
				'ckeditor5-rules/no-cross-package-imports': 'off'
			}
		},
		{
			files: [ '**/docs/**/*.js' ],
			rules: {
				'ckeditor5-rules/ckeditor-imports': 'off'
			}
		}
	]
};

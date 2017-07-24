var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "extends": "eslint:recommended",
	"parser": "babel-eslint",
	"env":	{
        'es6': true,
		"browser": true,
		"node": true,
        'commonjs': true
	},
	"plugins": [
		"react"
	],
    "parserOptions": {
        "sourceType": "module"
    },
	"rules": {
		"no-debugger": 0,
		"no-console": 0,
		"new-cap": 0,
		"strict": 0,
		"no-underscore-dangle":	0,
		"no-use-before-define":	0,
		"eol-last":	0,
		"quotes": [2, "single"],
		"jsx-quotes": [1, "prefer-single"],
		"react/jsx-no-undef": 1,
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1
	}
}

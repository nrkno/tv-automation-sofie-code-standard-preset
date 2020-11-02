# Sofie: The Modern TV News Studio Automation System (code standard preset)

This library is used in the [**Sofie** TV News Studio Automation System](https://github.com/nrkno/Sofie-TV-automation/) for defining a code standard preset through eslint and prettier. Besides that a script for checking compatible licenses is included.

## Installation

`yarn add @sofie-automation/code-standard-preset`

Add the following information to your `package.json`:

```json
{
    ...,
    "scripts": {
        ...,
        "lint": "eslint . --ext .ts --ignore-pattern dist",
        "license-validate": "yarn sofie-licensecheck -r --filter MIT --filter 0BSD --filter BSD --filter ISC --filter Apache --filter Unlicense --plain --border ascii"
    },
    "prettier": "@sofie-automation/code-standard-preset/.prettierrc.json",
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js,css,json,md,scss}": [
            "prettier --write"
        ],
        "*.{ts,tsx}": [
            "npm run lint --fix"
        ]
    },
    ...
}
```

Add the following files:

_.eslintrc.json_

```json
{
	"extends": "./node_modules/@sofie-automation/code-standard-preset/eslint/main"
}
```

_tsconfig.json_

```
{
	"extends": "@sofie-automation/code-standard-preset/ts/tsconfig.lib",
	"exclude": ["node_modules/**"]
}
```

_tsconfig.build.json_

```json
{
	"extends": "@sofie-automation/code-standard-preset/ts/tsconfig.lib",
	"exclude": ["node_modules/**", "src/**/*spec.ts", "src/**/__tests__/*", "src/**/__mocks__/*"],
	"compilerOptions": {
		"outDir": "./dist",
		"baseUrl": "./",
		"paths": {
			"*": ["./node_modules/*"],
			"{{PACKAGE-NAME}}": ["./src/index.ts"],
			"types": ["node", "jest"]
		}
	}
}
```

_Note: replace the {{PACKAGE-NAME}} with the correct package name, i.e. `hyperdeck-connection`_

Additionally you may want to include a _.gitattributes_ file:

```
* text=auto eol=lf
```

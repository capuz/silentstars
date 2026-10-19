---
repo: "luizalabs/gandalf-lint"
name: "gandalf-lint"
description: "Bad Code Shall Not Pass"
readmeQualityOk: true
url: "https://github.com/luizalabs/gandalf-lint"
homepage: "https://www.npmjs.com/package/@softboxlab/eslint-config-gandalf-lint"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["lint", "linter", "linter-config", "eslint", "javascript"]
stars: 27
forks: 6
openIssues: 3
closedIssues: 10
watchers: 13
contributors: 8
recentReleases: 0
createdAt: "2018-07-30T20:53:44Z"
lastCommitAt: "2026-10-19T09:15:03Z"
lastReleaseAt: "2022-02-10T17:42:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 33
maintainers: ["stanleygomes"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9c1f4a745f33a6794a7fb105e1ccc88e92fb514e334c799705309c577f6af73/luizalabs/gandalf-lint"
---

# gandalf-lint

  Bad Code Shall Not Pass

## Install
NPM:
```bash
npm install --save-dev eslint @softboxlab/eslint-config-gandalf-lint
```

Yarn:
```bash
yarn add --dev eslint @softboxlab/eslint-config-gandalf-lint
```

## Requirements

- [npm](https://www.npmjs.com/) `^5.0.0`
- [ESLint](http://eslint.org/) `^5.12.0`

## Configure
Call the white wizard by creating a `.eslintrc` file on your root project and writing in it:
```javascript
{
  "extends": "@softboxlab/eslint-config-gandalf-lint"
}
```

Remember to add the `eslint` plugin on your favorite IDE, like this one: [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Usage
You can create a script on your `package.json` file like so:
```json
"scripts": {
  "glint": "eslint --ext .js PROJECT_FOLDER"
}
```

And use your magic script for shall not pass any bad code:
```bash
npm run glint
```

And with fireworks you can automagically fix some errors:
```bash
npm run glint --fix
```

or using yarn:

```bash
yarn glint
yarn glint --fix
```

## Autorun it?

**If you don't fell like creating any scripts, feel free to have your files linted on the fly by your IDE (did you remember to…

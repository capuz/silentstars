---
repo: "TryGhost/eslint-plugin-ghost"
name: "eslint-plugin-ghost"
description: "Shared eslint configurations"
url: "https://github.com/TryGhost/eslint-plugin-ghost"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 5
openIssues: 1
closedIssues: 8
watchers: 9
contributors: 49
recentReleases: 0
createdAt: "2017-12-19T17:07:07Z"
lastCommitAt: "2026-06-27T00:35:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 69
maintainers: ["renovate[bot]", "EvanHahn", "ErisDS"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ae98a75e67728b92d4b6161887dcd5898718ae7ab6a95546bd14fb0776f7610/TryGhost/eslint-plugin-ghost"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# eslint-plugin-ghost

Shared eslint configurations, useful plugins & custom rules.

Inside of lib/config you'll find a set of configs for different
environments + base.js.

Base.js effectively documents our code style. Please make sure any
rules you add come with an explanation!

## Basic setup
1. Make sure that `gstenv` is green. See our [Dev Environment](https://github.com/TryGhost/Team/blob/master/Engineering/Dev%20Environment.md) docs.
2. `git clone` this repo & `cd` into it as usual
3. Run `yarn install` to install dependencies.

## Testing

Run `yarn link` inside of me, and then run `yarn link eslint-plugin-ghost`
inside of the project you want to lint.

## Usage

- Inside of package.json, add this rule: `"lint": "eslint . --ext .js --cache"`
- Then, in your project root, create an `.eslintrc.js` file, and add the
following code:
```
module.exports = {
    plugins: ['ghost'],
    extends: [
        'plugin:ghost/[config]',
    ]
};
```
- Change `[config]` to be E.g. node, browser, test etc depending on what environment you are linting
- If you want style rules disabled, use the `-no-style` presets instead:
  - `browser-no-style`
  - `ember-no-style`
  - `node-no-style`
  -…

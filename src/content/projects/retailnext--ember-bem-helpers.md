---
repo: "retailnext/ember-bem-helpers"
name: "ember-bem-helpers"
description: "BEM helpers for Ember.js applications"
readmeQualityOk: true
url: "https://github.com/retailnext/ember-bem-helpers"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [52, 42]
stars: 11
forks: 2
openIssues: 1
closedIssues: 1
watchers: 13
contributors: 13
recentReleases: 0
createdAt: "2021-05-04T12:10:01Z"
lastCommitAt: "2026-11-05T14:05:27Z"
lastReleaseAt: "2026-02-17T16:59:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 90
undervaluedScore: 58
maintainers: ["renovate[bot]", "dependabot[bot]", "kmansou"]
openGraphImageUrl: "https://opengraph.githubassets.com/469c1c7a6b9b7d4c0828f8e72d2d5774faf836ebc0f8806c4bdcb18a8102cffa/retailnext/ember-bem-helpers"
---

# ember-bem-helpers

This addon provides [BEM](https://en.bem.info/) helpers for Ember.js applications.

This addon produces BEM classes based on [Two Dashes style](https://en.bem.info/methodology/naming-convention/#two-dashes-style).

No mixins, no code in the component js/ts file needed. Works with template-only components.

## Compatibility

- Ember.js v6.4 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-bem-helpers
```

## Configuration for V2 Addons

If you're using this addon **within a V2 addon** (not a classic Ember app), you need to manually configure the AST transform in your addon's `babel.publish.config.cjs` and/or `babel.config.cjs`:

```js
module.exports = {
  plugins: [
    [
      'babel-plugin-ember-template-compilation',
      {
        targetFormat: 'hbs',
        transforms: [
          'ember-bem-helpers/ast-transform',
          // ... other transforms
        ],
      },
    ],
    // ... other plugins
  ]
}
```

This is necessary because v2 addons are pre-built, so the AST transformation needs to happen during the addon's own build process, not in the consuming app.

**Note:** Classic Ember apps and Embroider apps…

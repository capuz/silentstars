---
repo: "octfx/mediawiki-extensions-TemplateStylesExtender"
name: "mediawiki-extensions-TemplateStylesExtender"
description: "Extends TemplateStyles with new selectors and matchers."
readmeQualityOk: true
url: "https://github.com/octfx/mediawiki-extensions-TemplateStylesExtender"
homepage: "https://mediawiki.org/wiki/Extension:TemplateStylesExtender"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["mediawiki-extension"]
stars: 12
forks: 12
openIssues: 8
closedIssues: 33
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2021-03-19T19:59:50Z"
lastCommitAt: "2026-08-22T04:05:50Z"
lastReleaseAt: "2025-08-19T21:16:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 85
maintainers: ["alistair3149", "dependabot[bot]", "eugenedt"]
openGraphImageUrl: "https://opengraph.githubassets.com/90e1c79283b8eab8b48df9d1b2c65ccdfaf46b736da603ad81d216aca7dac327/octfx/mediawiki-extensions-TemplateStylesExtender"
---

# TemplateStylesExtender

Extends [Extension:TemplateStyles](https://www.mediawiki.org/wiki/Extension:TemplateStyles) with new selectors and matchers.

## Features

* Declare CSS custom properties/variables
* Use CSS custom properties/variables in most properties
* Implement additional selectors, properties and values as listed below

| Module | Changes | Upstream task
| - | - | - |
| [Basic User Interface Module Level 4](https://www.w3.org/TR/css-ui-4/) | Added property: [`pointer-events`](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) | [T342271](https://phabricator.wikimedia.org/T342271)
| [Cascading and Inheritance Level 5](https://www.w3.org/TR/css-cascade-5/) | Added value: [`revert-layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer) | - |
| [Color Module Level 4](https://www.w3.org/TR/css-color-4/) | Added colorspaces to [`color()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color): `rec2100-pq`, `rec2100-hlg`, `rec2100-linear` | [T265675](https://phabricator.wikimedia.org/T265675), [T351500](https://phabricator.wikimedia.org/T351500)
| [Color Module Level 5](https://www.w3.org/TR/css-color-5/) | Added: [Relative…

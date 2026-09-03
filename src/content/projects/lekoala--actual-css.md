---
repo: "lekoala/actual-css"
name: "actual-css"
description: "Plain CSS component framework with semantic classes, universal variants, small tokens, theme hooks, and progressive enhancements."
readmeQualityOk: true
url: "https://github.com/lekoala/actual-css"
homepage: "https://lekoala.github.io/actual-css/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [68, 27]
topics: ["css", "framework", "accessibility", "css-framework", "darkmode", "design-system", "lightweight", "progressive-enhancement", "ui-library"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-07-12T15:30:41Z"
lastCommitAt: "2026-09-03T08:13:41Z"
lastReleaseAt: "2026-09-01T20:19:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["lekoala"]
openGraphImageUrl: "https://opengraph.githubassets.com/eed170e4c4f0bc66aa36501e5e928201a709408bf6a64a8f9e8fb041d7204be7/lekoala/actual-css"
---

# Actual CSS

Plain CSS component framework for new projects. Semantic classes, shared variants, small tokens, theme hooks, and progressive enhancement.

Actual CSS claims a documented set of global class names; the package publishes
it as [`actual-css/reserved-classes.json`](https://github.com/lekoala/actual-css/blob/HEAD/scripts/reserved-classes.json).

For existing projects: use cascade layers, import order, or your own build-time
prefix transform.

## Install

```sh
npm install actual-css
```

Import the full framework in your CSS:

```css
@import "actual-css/full";
```

`actual-css/full` ships every functional family. The bare `actual-css` entrypoint is the minimal core (reset, tokens, theme, base, intents, variants, focus, print).

Or import only the pieces you use:

```css
@import "actual-css/css";
@import "actual-css/css/layout";
@import "actual-css/css/components/button";
@import "actual-css/css/components/card";
@import "actual-css/css/forms";
@import "actual-css/css/components/flyout";
@import "actual-css/css/utilities";
```

`actual-css/css` is the minimal core. Family manifests (`css/layout`,
`css/components`, `css/typography`, `css/effects`, `css/utilities`) and…

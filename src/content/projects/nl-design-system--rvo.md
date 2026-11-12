---
repo: "nl-design-system/rvo"
name: "rvo"
description: "Work in Progress: RVO Design System based on the NL Design System architecture. Rijksdienst voor Ondernemend Nederland / rvo.nl"
readmeQualityOk: true
url: "https://github.com/nl-design-system/rvo"
homepage: "https://rvo.nl/roos/"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [35, 32]
topics: ["nl-design-system"]
stars: 9
forks: 7
openIssues: 14
closedIssues: 17
watchers: 6
contributors: 34
recentReleases: 0
createdAt: "2021-11-01T13:50:42Z"
lastCommitAt: "2026-11-12T11:24:45Z"
lastReleaseAt: "2024-11-05T23:23:16Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 76
maintainers: ["rroose-rvo", "richadr", "PLassche-dictu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d939e62813e9a12cb21f165a9fedbb69a15d75d28ac874529fc91fdf00a81b47/nl-design-system/rvo"
---

# RVO Design System

The RVO design system is based on the NL Design System architecture.

For more info about the NL Design System and learn about things happening in our open source community, join the `#nl-design-system` Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

## Getting started

Include the Design Token CSS variables:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@nl-rvo/design-tokens/dist/index.css" />
```

Combine it with the latest CSS Component classes from the NL Design System community, for example:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@nl-rvo/component-library-css/dist/index.css" />
```

Then you can go ahead and use the HTML snippets of the components in this Storybook.

### Avoid automatic upgrades to a new version with breaking changes

For all dependencies, see what the version is you use while developing and update the URL without version to include a version number, and ensure your page keeps working even when new versions are released:

For _alpha_, _beta_ and _rc_ versions:

```text
https://unpkg.com/@nl-rvo/design-tokens/dist/index.css
```

Above should become:

```text…

---
repo: "whitphx/slidev-addon-fancy-arrow"
name: "slidev-addon-fancy-arrow"
description: "Arrows with fancy styles and intuitive positioning for Slidev."
readmeQualityOk: true
url: "https://github.com/whitphx/slidev-addon-fancy-arrow"
homepage: "https://slidev-addon-fancy-arrow.pages.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["slidev", "slidev-addon"]
stars: 94
forks: 2
openIssues: 0
closedIssues: 28
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-02-17T18:45:02Z"
lastCommitAt: "2026-10-18T08:16:17Z"
lastReleaseAt: "2025-02-23T00:19:55Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 49
maintainers: ["dependabot[bot]", "whitphx", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/934389687/0b28f220-a8de-4f1c-a77a-7ad9b259e185"
fundingLinks: ["GITHUB:https://github.com/whitphx", "PATREON:https://patreon.com/whitphx", "KO_FI:https://ko-fi.com/whitphx", "CUSTOM:https://www.buymeacoffee.com/whitphx"]
---

# slidev-addon-fancy-arrow

Slidev addon for adding fancy arrows to your slides, powered by [Rough.js](https://roughjs.com/).

[👉 Check out the demo and docs](https://slidev-addon-fancy-arrow.pages.dev/).

## Installation

```bash
npm install slidev-addon-fancy-arrow
```

## Slidev configuration

Add the `addons` option in your [headmatter](https://sli.dev/custom/#headmatter) with `fancy-arrow`:

```yml
---
addons:
  - fancy-arrow
---
```

See also: https://sli.dev/guide/theme-addon#use-addon

## Usage

[👉 Check out the demo and docs](https://slidev-addon-fancy-arrow.pages.dev/).

### Absolute positions

```html
<FancyArrow from="(10, 20)" to="(30, 40)" />
```

### Snapped to elements

#### Bind to elements via selectors

```html
<div data-id="anchor1" m-8>anchor1</div>
<div data-id="anchor2" m-8>anchor2</div>
<FancyArrow from="[data-id=anchor1]" to="[data-id=anchor2]" />
<FancyArrow from="[data-id=anchor1]@bottom" to="[data-id=anchor2]@top" />
```

#### Snap to a line of a code block

A line specifier `{n}` after the selector snaps to a line of the code block the selector matches, instead of to the code block as a whole. Lines are counted from `1`, the same way Slidev's own…

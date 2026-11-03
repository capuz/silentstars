---
repo: "cmudig/data-navigator"
name: "data-navigator"
description: "A JavaScript library that allows for accessible navigation of data structures."
readmeQualityOk: true
url: "https://github.com/cmudig/data-navigator"
homepage: "http://dig.cmu.edu/data-navigator/"
language: "HTML"
languages: ["HTML", "Svelte"]
languagePcts: [49, 26]
topics: ["accessibility", "data-structures", "data-visualization", "input-method", "visualization"]
stars: 68
forks: 3
openIssues: 0
closedIssues: 7
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2022-04-10T10:02:54Z"
lastCommitAt: "2026-11-03T19:04:42Z"
lastReleaseAt: "2024-12-09T23:50:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 39
maintainers: ["frankelavsky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/479978023/fa696c16-4c68-418b-9f28-fa256fff7a47"
---

# Data Navigator

Data Navigator is a JavaScript library that enables keyboard, screen reader, and multi-modal navigation of data structures and visualizations. It works with any rendering technology — SVG, Canvas, images, or WebGL — by creating a semantic, accessible HTML layer on top of your graphics.

**[Documentation](https://dig.cmu.edu/data-navigator/)** · **[Getting Started](https://dig.cmu.edu/data-navigator/getting-started/)** · **[Demo](https://dig.cmu.edu/data-navigator/demo)** · **[npm](https://www.npmjs.com/package/data-navigator)**

## Install

```
npm install data-navigator
```

```js
import dataNavigator from 'data-navigator';
```

## How it works

Data Navigator is organized into 3 composable modules:

1. **Structure** — a graph of nodes and edges that defines navigation paths through your data
2. **Input** — handles keyboard, touch, voice, gesture, and custom input modalities
3. **Rendering** — creates semantic HTML elements overlaid on your visualization

These modules can be used together or independently. Visit [the docs](https://dig.cmu.edu/data-navigator/getting-started/) for a step-by-step guide to building your first navigable chart.

## Inspector

The…

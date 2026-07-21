---
repo: "Pivotick/Pivotick"
name: "Pivotick"
description: "Pivotick is network graph library to facilitate pivoting."
readmeQualityOk: true
url: "https://github.com/Pivotick/Pivotick"
homepage: "https://pivotick.github.io/Pivotick/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["infovis", "network-visualization", "network-vis"]
stars: 22
forks: 5
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 6
recentReleases: 4
createdAt: "2025-11-04T08:50:51Z"
lastCommitAt: "2026-07-21T06:11:26Z"
lastReleaseAt: "2026-07-21T06:13:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 59
maintainers: ["mokaddem", "John-Popovici"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d1728ef110d2fe69641164c11b1987cdbbfb29da953158ca40280d24415c598/Pivotick/Pivotick"
---

# Pivotick

Pivotick is a hackable TypeScript graph visualization library built on top of [D3 force simulations](https://d3js.org/d3-force/simulation). It renders directed or undirected graphs with interactive controls, force simulation, tree layout support, and optional UI elements such as sidebars, toolbars, context menus, and tooltips.

## Core Features

- Directed and undirected graph rendering
- Force-based simulation with optional worker support
- Tree/hierarchy layout support
- Different UI modes (`full`, `light`, `viewer`, `static`)
- Configurable node/edge styles, labels, and callbacks
- Interactive editing — node editing and edge creation (drag or click) with validation and enrichment hooks
- Extensible plugin API for adding custom UI

## Getting Started

### Basic Usage

Pivotick can be used either as a modern JavaScript module or directly in the browser via a script tag.

```js
import { Pivotick } from 'pivotick'
import 'pivotick/dist/pivotick.css'

new Pivotick({
  container: document.getElementById('app'),
  data: {
    nodes: [
      { id: 1, data: { label: 'A' } },
      { id: 2, data: { label: 'B' } }
    ],
    edges: [
      { from: 1, to: 2 }
    ]
  }
})
```…

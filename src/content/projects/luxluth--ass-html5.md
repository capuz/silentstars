---
repo: "luxluth/ass-html5"
name: "ass-html5"
description: "Display ASS/SSA subtitles for html video"
readmeQualityOk: true
url: "https://github.com/luxluth/ass-html5"
homepage: "https://asshtml5.luxluth.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["aegisub", "ass-subtitles", "libass", "subtitles", "html5", "javascript", "ssa-subtitles", "typescript", "html-canvas"]
stars: 19
forks: 3
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-07-10T08:39:57Z"
lastCommitAt: "2026-10-24T08:19:59Z"
lastReleaseAt: "2023-07-25T09:40:51Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 66
maintainers: ["evairx", "luxluth", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec8510dd2ea5e74c04720f929e95cdae0db1600e97d87683eb6e5812b783e4b6/luxluth/ass-html5"
---

# ass-html5

Display ASS/SSA subtitles on html5 videos

## Table of Contents

- [ass-html5](#ass-html5)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
    - [Options](#options)
    - [Simple HTML](#simple-html)
    - [Svelte and Plry](#svelte-and-plry)
    - [videojs](#videojs)
- [Credits](#credits)

## Installation

```bash
pnpm add ass-html5
```

## Features

- **Karaoke Support**: Full support for `\k`, `\kf`, `\ko`, and `\K` tags.
- **Vector Drawings**: High-performance rendering of ASS vector paths (`\p`) using `Path2D`.
- **Clipping**: Support for rectangular and vector clipping/masking (`\clip`, `\iclip`).
- **Advanced Transformations**:
  - Rotation around all axes (`\frz`, `\frx`, `\fry`).
  - Scaling (`\fscx`, `\fscy`) and Shearing (`\fax`, `\fay`).
  - Custom rotation origin (`\org`).
- **Smart Wrapping**: Implementation of `\q` styles for optimal line breaking.
- **Collision Handling**: Automatic vertical shifting to prevent overlapping subtitles.
- **Blur Effects**: Edge blur (`\be`) and Gaussian blur (`\blur`) using Canvas filters.
- **Performance Optimized**: Built-in layer caching to…

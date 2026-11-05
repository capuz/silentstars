---
repo: "Automattic/blocks-engine"
name: "blocks-engine"
description: "A collection of tools for generating, transforming, and materializing WordPress blocks."
readmeQualityOk: true
url: "https://github.com/Automattic/blocks-engine"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [61, 21]
stars: 25
forks: 3
openIssues: 119
closedIssues: 1370
watchers: 0
contributors: 143
recentReleases: 0
createdAt: "2026-06-11T15:23:11Z"
lastCommitAt: "2026-11-05T00:22:33Z"
lastReleaseAt: "2026-06-24T03:33:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 43
maintainers: ["chubes4", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aedf524704c5175c37054bc574edf69a3c904b1737ab8713814d573ff61e5ae/Automattic/blocks-engine"
---

# Blocks Engine

Blocks Engine is a collection of tools for generating, transforming, and materializing WordPress blocks.

## Packages

- [`@automattic/blocks-engine`](https://github.com/Automattic/blocks-engine/blob/HEAD/packages/blocks-engine/) - JavaScript primitives for transforming content into WordPress-native block outputs.
- [`php-transformer`](https://github.com/Automattic/blocks-engine/blob/HEAD/php-transformer/) - PHP primitives for converting HTML, Markdown, and generated website artifacts into WordPress-native block outputs.
- [`figma-transformer`](https://github.com/Automattic/blocks-engine/blob/HEAD/figma-transformer/) - PHP primitives for converting Figma `.fig` archives and Figma-derived scenegraphs into static HTML website artifacts with parity diagnostics.

Artifact compilation also emits the self-contained [`wordpress-site-plan/v2`](https://github.com/Automattic/blocks-engine/blob/HEAD/docs/contracts/wordpress-site-plan-v2.md) block-theme materialization contract.

The [Figma-to-WordPress acceptance matrix](https://github.com/Automattic/blocks-engine/blob/HEAD/docs/contracts/figma-wordpress-acceptance-matrix-v2.md) consumes that handoff through generic,…

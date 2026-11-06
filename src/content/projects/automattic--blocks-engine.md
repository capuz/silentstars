---
repo: "Automattic/blocks-engine"
name: "blocks-engine"
description: "A collection of tools for generating, transforming, and materializing WordPress blocks."
readmeQualityOk: true
url: "https://github.com/Automattic/blocks-engine"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [62, 21]
stars: 26
forks: 3
openIssues: 133
closedIssues: 1483
watchers: 0
contributors: 144
recentReleases: 0
createdAt: "2026-06-11T15:23:11Z"
lastCommitAt: "2026-11-06T02:43:59Z"
lastReleaseAt: "2026-06-24T03:33:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["chubes4", "homeboy-ci[bot]", "serabi"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d1408255fe782defa3c2a6c55acccefbff06d068516ab047b85ea47201a0ad/Automattic/blocks-engine"
---

# Blocks Engine

Blocks Engine is a collection of tools for generating, transforming, and materializing WordPress blocks.

## Packages

- [`@automattic/blocks-engine`](https://github.com/Automattic/blocks-engine/blob/HEAD/packages/blocks-engine/) - JavaScript primitives for transforming content into WordPress-native block outputs.
- [`php-transformer`](https://github.com/Automattic/blocks-engine/blob/HEAD/php-transformer/) - PHP primitives for converting HTML, Markdown, and generated website artifacts into WordPress-native block outputs.
- [`figma-transformer`](https://github.com/Automattic/blocks-engine/blob/HEAD/figma-transformer/) - PHP primitives for converting Figma `.fig` archives and Figma-derived scenegraphs into static HTML website artifacts with parity diagnostics.

Artifact compilation also emits the self-contained [`wordpress-site-plan/v2`](https://github.com/Automattic/blocks-engine/blob/HEAD/docs/contracts/wordpress-site-plan-v2.md) block-theme materialization contract.

The [Figma-to-WordPress acceptance matrix](https://github.com/Automattic/blocks-engine/blob/HEAD/docs/contracts/figma-wordpress-acceptance-matrix-v2.md) consumes that handoff through generic,…

---
repo: "Automattic/blocks-engine"
name: "blocks-engine"
description: "A collection of tools for generating, transforming, and materializing WordPress blocks."
readmeQualityOk: true
url: "https://github.com/Automattic/blocks-engine"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [41, 35]
stars: 12
forks: 2
openIssues: 56
closedIssues: 235
watchers: 0
contributors: 142
recentReleases: 10
createdAt: "2026-06-11T15:23:11Z"
lastCommitAt: "2026-08-27T14:15:57Z"
lastReleaseAt: "2026-06-24T03:33:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 55
maintainers: ["chubes4", "ellenbauer"]
openGraphImageUrl: "https://opengraph.githubassets.com/35d31c61449ad79e8d8d6ad4bbd30441d125c5e90ffc39757184eee888edc79b/Automattic/blocks-engine"
---

# Blocks Engine

Blocks Engine is a collection of tools for generating, transforming, and materializing WordPress blocks.

## Packages

- [`@automattic/blocks-engine`](https://github.com/Automattic/blocks-engine/blob/HEAD/packages/blocks-engine/) - JavaScript primitives for transforming content into WordPress-native block outputs.
- [`php-transformer`](https://github.com/Automattic/blocks-engine/blob/HEAD/php-transformer/) - PHP primitives for converting HTML, Markdown, and generated website artifacts into WordPress-native block outputs.
- [`figma-transformer`](https://github.com/Automattic/blocks-engine/blob/HEAD/figma-transformer/) - PHP primitives for converting Figma `.fig` archives and Figma-derived scenegraphs into static HTML website artifacts with parity diagnostics.

Artifact compilation also emits the self-contained [`wordpress-site-plan/v2`](https://github.com/Automattic/blocks-engine/blob/HEAD/docs/contracts/wordpress-site-plan-v2.md) block-theme materialization contract.

The [Figma-to-WordPress acceptance matrix](https://github.com/Automattic/blocks-engine/blob/HEAD/docs/contracts/figma-wordpress-acceptance-matrix-v2.md) consumes that handoff through generic,…

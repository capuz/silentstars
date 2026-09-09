---
repo: "portabletext/editor"
name: "editor"
description: "The Standalone Portable Text Editor"
readmeQualityOk: true
url: "https://github.com/portabletext/editor"
homepage: "https://www.portabletext.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["block-content", "rich-text-editor"]
stars: 269
forks: 21
openIssues: 6
closedIssues: 21
watchers: 5
contributors: 37
recentReleases: 0
createdAt: "2024-06-18T08:58:48Z"
lastCommitAt: "2026-09-09T08:17:37Z"
lastReleaseAt: "2025-08-14T13:16:39Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 40
maintainers: ["christianhg", "ecoscript[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/09cf52aea750377d5e42d71ab46b0056f3bd7d98a712725e27d3b600b333814b/portabletext/editor"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/portabletext/portabletext/master/logo-white.svg?sanitize=true">
</picture>

# Portable Text Editor Monorepo

[Portable Text](https://github.com/portabletext/portabletext) is an open specification for structured block content. Rich text, images, code blocks, and any custom type you define, stored as JSON and renderable anywhere.

This monorepo contains [`@portabletext/editor`](https://github.com/portabletext/editor/blob/HEAD/packages/editor/), the officially supported editor for working with Portable Text content. It's a headless, schema-driven block content editor for React: you bring the UI, the editor handles the editing. The other packages in this repository support editor work, including schema definition, toolbar hooks, plugins, conversion to and from HTML and Markdown, and testing utilities.

> **Looking to render Portable Text?** The renderers (`@portabletext/react`, `@portabletext/to-html`, and friends) live in separate repositories. See [Render Portable Text](https://www.portabletext.org/rendering/) for the full picture.

For documentation and guides, visit…

---
repo: "bwat47/joplin-rich-tables"
name: "joplin-rich-tables"
description: "A Joplin plugin to provide table rendering & table editing in the Markdown editor."
readmeQualityOk: true
url: "https://github.com/bwat47/joplin-rich-tables"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["joplin", "joplin-plugin", "codemirror", "codemirror6", "markdown-table", "markdown-table-editor", "markdown-tables"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-28T15:59:45Z"
lastCommitAt: "2026-11-09T03:30:54Z"
lastReleaseAt: "2025-12-21T20:57:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["bwat47"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf059eaa9536ad20ca9e378bfc920d9fb70fa8a88085aaab1842f1e78bbcd1fb/bwat47/joplin-rich-tables"
---

> [!note]
> This plugin was created entirely with AI tools.

> [!note]
> Joplin 3.7 (pre-release) now includes a basic table editor which can be enabled/disabled under Joplin Settings | Editor tab. Rich Tables will only work when the built-in table editor is disabled.

# Rich Tables

A Joplin plugin to provide table rendering & table editing in the Markdown editor.

## Features

### Table Rendering

Tables are rendered as HTML in the markdown editor, allowing you to see the HTML formatted table without using the markdown viewer.

Table rendering includes rendering of inline markdown and image embeds.

> [!note]
> Table rendering can be temporarily disabled by toggling "source mode" via toolbar button or keyboard shortcut.

#### Markdown Rendering

Supports syntax highlighting (while editing a cell) and rendering (cells not being edited) most markdown syntax supported by Joplin:

- Basic formatting: bold/italic/inline code/strikethrough/highlight(==mark==)/underline(++insert++).
- Inline HTML (Joplin 3.6 and newer), e.g. `<sup></sup>`.
- Links (markdown links, autolinks).
- Footnotes: Note that footnotes support is very basic. Table cells are rendered in isolation, which breaks…

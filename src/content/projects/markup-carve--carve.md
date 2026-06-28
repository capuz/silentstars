---
repo: "markup-carve/carve"
name: "carve"
description: "A post-Markdown lightweight markup language with visual mnemonics and human-centered design."
url: "https://github.com/markup-carve/carve"
homepage: "https://markup-carve.github.io/carve/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [56, 42]
topics: ["djot", "language", "markdown", "markup", "parser", "templating"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-13T15:06:42Z"
lastCommitAt: "2026-06-28T02:01:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cb3c9aed87ea1ffc4689c794d3d5a587bc0811b8ffeefef120dc6f488f62c13/markup-carve/carve"
discussionCount: 0
---

# Carve

A lightweight markup language with visual mnemonics and human-centered design.

> "The best markup is the one you don't have to think about."

## Philosophy

Carve builds on Markdown's basics and Djot's technical rigor while adding:

- **Visual mnemonics** - Syntax resembles its output
- **Human factors research** - Based on how non-technical users naturally mark up text
- **Progressive disclosure** - Basic usage is trivial, power features exist when needed
- **Extendable by design** - Core syntax stays small while standard and app-level extensions fit a defined contract
- **Social conventions** - `@mentions` and `#tags` are recognized as first-class inline tokens

## Why Carve?

Markdown's reach, Djot's consistency, web-native features by default - without
turning your content into a JavaScript program. What sets Carve apart:

- **Cross-references that just work** - `</#id>` auto-fills its link text from the
  target heading, and `[Heading][]` resolves to a heading with no separate
  definition. A `#` placeholder in a caption (`^ Figure #: …`) auto-numbers
  figures, tables, listings, and equations, and `</#id>` to one fills in "Figure 1".
  Neither Markdown nor Djot…

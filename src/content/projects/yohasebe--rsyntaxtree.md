---
repo: "yohasebe/rsyntaxtree"
name: "rsyntaxtree"
description: "Syntax tree generator for linguistic research"
readmeQualityOk: true
url: "https://github.com/yohasebe/rsyntaxtree"
homepage: "http://yohasebe.com/rsyntaxtree"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["rubynlp", "visualization", "linguistics", "ruby", "svg", "syntax-tree"]
stars: 122
forks: 18
openIssues: 3
closedIssues: 10
watchers: 5
contributors: 2
recentReleases: 2
createdAt: "2009-11-29T14:14:09Z"
lastCommitAt: "2026-08-14T05:14:07Z"
lastReleaseAt: "2026-08-13T22:01:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 34
maintainers: ["yohasebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/39a91b30a7d63986ca917390e74b5e8ddfae9f21fa6a77dc1c16ff906afb6321/yohasebe/rsyntaxtree"
fundingLinks: ["GITHUB:https://github.com/yohasebe", "KO_FI:https://ko-fi.com/yohasebe", "BUY_ME_A_COFFEE:https://buymeacoffee.com/yohasebe"]
---

**RSyntaxTree** is a graphical syntax tree generator for linguistic research.

<p>
</p>

## Features

RSyntaxTree provides a rich set of features for creating publication-quality syntax trees:

### Basic Syntax

Use bracket notation to define tree structures:

```text
[S [NP the cat] [VP [V sleeps]]]
```

### Text Decoration

Apply various text styles to node labels:

- **Bold**: `**text**`
- *Italic*: `*text*`
- Subscript: `_text_`
- Superscript: `__text__`
- Overline/Underline/Strikethrough: `=text=`, `-text-`, `~text~`

### Per-Node Coloring

Apply custom colors to individual nodes using `@color:` syntax:

```text
[S [@red:NP the cat] [@blue:VP sleeps]]
```

Supports named colors (`red`, `blue`, `green`, etc.) and hex colors (`@#FF5733:`).

### Enclosures and Triangles

- **Brackets**: `[#NP text]` → draws brackets around the node
- **Rectangle**: `[##NP text]` → draws a rectangle around the node
- **Triangle**: `[^NP the quick fox]` → draws a triangle connector

Combine with colors: `[#@red:NP text]`, `[^@blue:VP phrase]`

### Region Shade

Shade the whole subtree a node governs with a semi-transparent plane — useful for c-command/binding domains and cognitive grammar…

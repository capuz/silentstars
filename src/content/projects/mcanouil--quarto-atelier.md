---
repo: "mcanouil/quarto-atelier"
name: "quarto-atelier"
description: "An accessible, brand-driven documentation-website project type for Quarto."
readmeQualityOk: true
url: "https://github.com/mcanouil/quarto-atelier"
homepage: "https://m.canouil.dev/quarto-atelier/"
language: "Lua"
languages: ["Lua"]
languagePcts: [82]
topics: ["quarto", "quarto-extension", "quarto-metadata", "accessibility", "website", "experimental", "quarto-project"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-23T18:14:09Z"
lastCommitAt: "2026-11-20T12:02:46Z"
lastReleaseAt: "2026-07-31T17:57:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 39
maintainers: ["mcanouil", "mcanouil-dev[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1310241132/7d45624f-e140-4824-b743-453a5e871883"
fundingLinks: ["GITHUB:https://github.com/mcanouil"]
discussionCount: 0
---

# Atelier Extension for Quarto

`atelier` is an accessible, brand-driven documentation-website project type for Quarto.

It derives the navbar, the page footer, and a docked sidebar from one `_brand.yml`, in both colour schemes, and ships the accessibility scripts and social metadata a documentation site needs.

## Installation

Atelier needs Quarto 1.12.1 or later.
Older releases drop the project's `extensions` options from any page that sets `extensions` in its own front matter, which breaks workshop mode.
They also draw the announcement dismiss control so that the keyboard cannot reach it.

```bash
quarto add mcanouil/quarto-atelier@0.15.1
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

```yaml
project:
  type: atelier
```

## Starter templates

Two templates give you a working site to start from: `documentation`, with a navbar and a docked sidebar, and `workshop`, with the sidebar only and workshop mode turned on.
Run the two commands in an empty folder, in this order:

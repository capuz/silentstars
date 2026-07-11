---
repo: "dsebastien/obsidian-book-exporter"
name: "obsidian-book-exporter"
description: "Export books written in Obsidian to EPUB and PDF via Pandoc and Calibre."
readmeQualityOk: true
url: "https://github.com/dsebastien/obsidian-book-exporter"
homepage: "https://dsebastien.github.io/obsidian-book-exporter/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["books", "converter", "obsidian", "obsidian-plugin", "publishing", "writing"]
stars: 6
forks: 2
openIssues: 8
closedIssues: 26
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-04-28T12:33:30Z"
lastCommitAt: "2026-07-11T05:56:17Z"
lastReleaseAt: "2026-06-30T07:25:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 67
maintainers: ["dsebastien", "github-actions[bot]", "wvwoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e6de75ce249c93b671467cdb0caacb00dd7a125aa3f1a23f88133ae7a0be276/dsebastien/obsidian-book-exporter"
fundingLinks: ["GITHUB:https://github.com/dsebastien", "BUY_ME_A_COFFEE:https://buymeacoffee.com/dsebastien"]
---

# Obsidian Book Exporter

Write a book inside an Obsidian vault — one **manifest note** acts as the table of contents, each chapter / section is its own note. The plugin compiles the structure into a single manuscript and exports to **EPUB** and **PDF** via [Pandoc](https://pandoc.org).

> Desktop only. Requires `pandoc` on `$PATH` (or configure the path in settings). For PDF, [Typst](https://typst.app) is the recommended engine — single small binary, no LaTeX install needed. LaTeX engines (xelatex, tectonic) are still supported if you prefer.
>
> **Configure an output folder before exporting.** Settings → Book Exporter → Default output folder: an absolute filesystem path (e.g. `~/Downloads`). The plugin refuses to export until this is set. Temp files live in the OS temp directory — never in your vault or plugin folder.

## How it works

1. Open any Markdown note that you want to use as the book manifest. Put book metadata in the frontmatter, structure the body with headings and bulleted wikilinks — no specific tag, folder, or filename required.
2. Run **Export current book to EPUB / PDF / all formats** from the command palette.

### The manifest contract

- `# H1` is the **book…

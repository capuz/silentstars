---
repo: "CalvinKirs/burrow"
name: "burrow"
description: "Markdown workspace reader for Chrome: browse a local folder of Markdown files with a file tree, outline and full-text search."
readmeQualityOk: true
url: "https://github.com/CalvinKirs/burrow"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["chrome-extension", "manifest-v3", "markdown", "markdown-viewer"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-20T02:06:03Z"
lastCommitAt: "2026-10-31T09:53:39Z"
lastReleaseAt: "2026-10-31T09:54:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 22
maintainers: ["CalvinKirs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cfdd98ee341ad4cab723202899e9ab65c8dc2af3368dd74efb64da7a6e7fd37/CalvinKirs/burrow"
---

A Markdown workspace reader for Chrome.<br>
  Open one local <code>.md</code> file and the whole folder is one click away.

## Why

Notes, docs and ADRs usually live as a *folder* of Markdown files, but Markdown viewers show you one file at a time. Burrow treats the folder as the unit:

- **Workspace sidebar** (right) – every Markdown file in the folder as a tree. Click to switch; the tree, its expanded folders and your sidebar layout stay put.
- **No setup** – there is no "open folder" step. The workspace is detected from the file you opened; press **↑** to widen it to the parent folder, and Burrow remembers that root for every file under it.
- **Search the whole folder** – file names and contents. Clicking a hit opens that file at the matching line with the term highlighted, and the results stay open so the next hit is one click away.
- **Outline sidebar** (left) – the headings of the current file; follows your scroll position, click to jump.
- **Out of the way when you read** – hide either sidebar (`Alt`+`[`, `Alt`+`]`), drag to resize; the layout is remembered.
- **Rendering** – GFM tables and task lists, syntax highlighting, Mermaid diagrams, light / dark / system theme, raw…

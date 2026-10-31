---
repo: "tinycld/calc"
name: "calc"
description: "a spreadsheet application that allows users to create, edit, and collaborate on data in real-time "
readmeQualityOk: true
url: "https://github.com/tinycld/calc"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [76, 24]
stars: 7
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-05-09T02:20:35Z"
lastCommitAt: "2026-10-31T02:00:01Z"
lastReleaseAt: "2026-09-15T16:47:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 59
maintainers: ["nathanstitt"]
openGraphImageUrl: "https://opengraph.githubassets.com/2813c359d5327a6f877829b84af53ef141e2e9e18e4d9c543749a89674e9ac28/tinycld/calc"
---

# calc

Collaborative spreadsheets for your server.

A feature package for the [tinycld](https://tinycld.org/) ecosystem.
Lives as a standalone git repo alongside the [tinycld app
shell](https://github.com/tinycld/tinycld) and other sibling feature
packages (`contacts`, `mail`, `calendar`, `drive`, `text`,
`google-takeout-import`). `@tinycld/core` is the shared runtime/UI
library, nested inside the `tinycld` shell repo at `tinycld/core/` and
imported as `@tinycld/core`.

## What it does

Stores spreadsheets as `.xlsx` files in `@tinycld/drive` and edits them
collaboratively. Workbooks open from the drive UI (calc registers an xlsx
preview + an "Open in Calc" file action) or from the dedicated
`/a/calc` index.

Editing features:

- Cell editing — type to enter, double-click to edit in place, Enter /
  Tab navigation, ⌘Z / ⌘⇧Z undo + redo backed by `Y.UndoManager`
- Formulas via **HyperFormula** running client-side, with formula-bar
  editing, autocomplete by function name, the full HyperFormula
  function set surfaced through **Help → Function list**, and a
  rewrite layer that keeps cross-sheet refs and inserted/deleted rows
  and columns in sync (`lib/formula/`)
- Cell formatting…

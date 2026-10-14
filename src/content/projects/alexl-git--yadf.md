---
repo: "Alexl-git/YADF"
name: "YADF"
description: "Yet Another Delphi Formatter"
readmeQualityOk: true
url: "https://github.com/Alexl-git/YADF"
language: "Pascal"
languages: ["Pascal", "PowerShell"]
languagePcts: [78, 21]
stars: 21
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-08T00:07:11Z"
lastCommitAt: "2026-10-14T08:53:42Z"
lastReleaseAt: "2026-06-02T21:47:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["alexanderliberov-dotcom"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c4dc5d7833a1dbca815f7f5f4b4443782a91f6e24c55d209b90f6d221699bf/Alexl-git/YADF"
---

# YADF -- Yet Another Delphi Formatter

A Pascal/Delphi source code formatter, written in Delphi 13. Reformats `.pas`
files according to a configurable rule set: line-length budgeting, structural
re-indentation, capitalization, and column alignment.

YADF ships in three flavours, built from the same engine:

- **`YADF.exe`** — a stand-alone CLI for formatting files, folders, and
  whole `.dpr`/`.dproj` projects (see [CLI quick start](#cli-quick-start)).
- **`YADFSetup.exe`** — a visual settings editor / format playground
  (see [YADFSetup](#yadfsetup)).
- **`YADFOT.bpl`** — a Delphi IDE design-time package ("YADF Open Tools")
  that adds a `Help → Tools → YADFOT: Format Current Buffer` menu item
  and a `Ctrl+Shift+Alt+F` shortcut to format the current source-editor
  buffer (see [YADFOT install](#yadfot-install)).

All three artifacts are produced by this single project tree and share one
`yadf.ini` configuration. `build_all.bat` builds them together with a single
version stamp.

## YADFSetup

`YADFSetup.exe` is a three-column GUI — **Settings | Source | Result**. Load any
`.pas` on the left, watch it reformat live on the right, and tune every option
in between. It is the visual…

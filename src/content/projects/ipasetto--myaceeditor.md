---
repo: "ipasetto/MyAceEditor"
name: "MyAceEditor"
description: "Engine/editor open source dos dados do Perfect World (motor Angelica): elements.data, tasks.data, .pck e mais — C#/WinForms nativo."
readmeQualityOk: true
url: "https://github.com/ipasetto/MyAceEditor"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["csharp", "dotnet", "game-editor", "game-modding", "mmorpg", "perfect-world", "pw-server", "winforms", "angelica-engine", "elements-data"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 32
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-10-15T14:25:41Z"
lastCommitAt: "2026-11-09T00:55:40Z"
lastReleaseAt: "2026-10-31T14:31:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 67
maintainers: ["ipasetto"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef83a0d3078a72cebbd73871c78f6da695787db862ad2d1b0d3f4deef26a9689/ipasetto/MyAceEditor"
---

# MyAceEditor

**An open-source editor for Perfect World (Angelica engine) — client and server data in one native Windows app.**

MyAceEditor reads and writes the game files (`elements.data`, `tasks.data`, `gshop`, `aipolicy.data`, `npcgen.data`,
`.pck` packages and the interface), shows them the way the game shows them, checks that client and server still match,
and can run a local test server so you see your changes in game. Everything is saved with a backup and verified
byte by byte before it touches your files.

**[⬇ Download the latest release (Windows x64)](https://github.com/ipasetto/MyAceEditor/releases)** · [Install](#install) · [Features](#features) · [Screenshots](#screenshots) · [Contributing](#contributing)

---

## Features

### Game data
- **`elements.data`** — opens any version from v6 to v623 (170 layouts), saves byte-identical, real game icons and
  3D thumbnails, game-like tooltips, links ("uses" / "used by"), bulk edit, undo/redo, find errors, advanced search,
  convert between versions, Save-all (Ctrl+S) and auto-save.
- **Item rules from the server code** run before saving (unique IDs, shop limits, subtypes, fixed-ID configs), so an
  edited item does not…

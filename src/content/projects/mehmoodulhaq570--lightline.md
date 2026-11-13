---
repo: "mehmoodulhaq570/LightLine"
name: "LightLine"
description: "A fast IDE made in Rust"
readmeQualityOk: true
url: "https://github.com/mehmoodulhaq570/LightLine"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["fast", "ide", "lightline", "rust"]
stars: 55
forks: 14
openIssues: 4
closedIssues: 49
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-09-18T04:29:33Z"
lastCommitAt: "2026-11-13T18:29:54Z"
lastReleaseAt: "2026-11-09T15:22:11Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 43
maintainers: ["mehmodulhaq570", "mehmoodulhaq570", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5280c31aef369c2f83811c0e477628b1e3304e176476438de0a997dd6d943b30/mehmoodulhaq570/LightLine"
discussionCount: 3
---

# LightLine

**A fast, lightweight code editor for Windows, written in Rust.**

---

LightLine is a code editor that feels like VS Code but starts fast and stays light. It's a single portable `.exe`: no installer, no Electron, no admin rights. It draws its own window straight through Windows, so it uses little memory and keeps typing and scrolling smooth: in our tests it starts in about a tenth of a second, a keystroke reaches the screen in about 3 ms, and LightLine idling in the background runs no timers and does no work of its own: it wakes only when Windows or another program asks it something. New features are measured so they don't slow it down: v0.10.0 is as fast as v0.9.0 ([numbers](https://github.com/mehmoodulhaq570/LightLine/blob/HEAD/CHANGELOG.md#v0100---2026-11-13)).

## Features

- **Menu bar**: File, Edit, Selection, View, Go, Run, Terminal and Help menus in the title bar, as in VS Code, with each item's shortcut beside it. `Alt` and a letter opens a menu from the keyboard; in a narrow window they fold into one button.
- **Smart editing**: syntax colors, colored bracket pairs, code folding, an optional minimap, find and replace in a file or across the project (with…

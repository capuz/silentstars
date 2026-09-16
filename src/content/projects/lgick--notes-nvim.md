---
repo: "lgick/notes.nvim"
name: "notes.nvim"
description: "A lightweight Neovim plugin for managing notes in a dedicated tab with automatic Git synchronization."
readmeQualityOk: true
url: "https://github.com/lgick/notes.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [91]
topics: ["nvim", "plugin", "lua", "neovim-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T15:25:40Z"
lastCommitAt: "2026-09-16T08:48:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e97a4d587d14d885010da07639f93726127c6675b5cdcc185093a9bab477f48c/lgick/notes.nvim"
---

# notes.nvim

*[Русская версия](https://github.com/lgick/notes.nvim/blob/HEAD/README.ru.md)*

A lightweight Neovim plugin for managing notes in a dedicated tab — modelled on the
**macOS Notes** app — with optional GitHub synchronization via Git (SSH).

<video src="https://github.com/user-attachments/assets/1286d1b7-bb8f-4cae-924f-2120521f80c9" autoplay loop muted playsinline></video>

```
──────────────┬──────────────────────────────────
 Folders      │ Notes                            ← statuslines
 Notes/           │ 26.06.2026 - Shopping list
 ├─ Work[12]/     │ 25.06.2026 - Project idea
 └─ Personal[3]/  │ 24.06.2026 - Report
──────────────┴──────────────────────────────────
 Notes/Shopping list                              ← statusline (folder/title)
 # Shopping list

 - [ ] Milk
 - [ ] Call the bank
```

Folders nest to any depth, shown drill-down one level at a time (`o` to enter / go up):

```
────────────────┬────────────────────────────────
 Folders        │ Notes
 Notes/Work/ .. │ 26.06.2026 - Sprint notes
 ├─ Projects[8]/│
 └─ Archive[4]/ │
────────────────┴────────────────────────────────
```

## Features

- **Two-pane, macOS-Notes-style UI** — opens in a new…

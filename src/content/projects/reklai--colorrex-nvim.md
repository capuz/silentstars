---
repo: "reklai/colorrex.nvim"
name: "colorrex.nvim"
description: "Theme-synced between Ghostty / Rex as a color scheme in Neovim. Theme change -> applied to Ghostty / Rex -> applies to Neovim."
readmeQualityOk: true
url: "https://github.com/reklai/colorrex.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-03T02:07:46Z"
lastCommitAt: "2026-11-08T10:31:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["reklai"]
openGraphImageUrl: "https://opengraph.githubassets.com/487818f70adf31734aeb16381b87008d0f4b18dea56d1df03a9b13594d44e378/reklai/colorrex.nvim"
---

# colorrex.nvim

Compiles the theme your Ghostty / Rex Terminal is showing into a native Neovim colorscheme.
No dependencies, no configuration, no theme files.

https://github.com/user-attachments/assets/c36718b4-fa47-48ef-83bf-e4f948cbc8c3

as each theme is previewed, with no other configuration.</sub></p>

> **Early days.** colorrex is young and has mostly been built and tested on one
> person's setup, so expect bugs and edge cases nobody has hit yet. The promises
> below are what it is working toward, and the tests hold it to them. If something
> looks wrong, please [report it](#reporting-a-problem).

It is built for terminals on libghostty, such as Ghostty and Rex, and works through
tmux. herdr, a multiplexer built on libghostty, should work too: its source answers
the same request, but it has not been tested in a real herdr yet. Other terminals that
answer the standard color queries may work, untested. If the terminal reports no
palette, colorrex stays grey and says so once.

```lua
vim.cmd.colorscheme("colorrex")
```

That is the whole setup. It asks your terminal for its 19 colors in one request
(through tmux, one question per color), and compiles them into over 300…

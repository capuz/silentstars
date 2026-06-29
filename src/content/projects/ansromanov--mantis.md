---
repo: "ansromanov/mantis"
name: "mantis"
description: "A fast terminal file tree viewer with syntax highlighting, markdown rendering, fuzzy search, and mouse support."
url: "https://github.com/ansromanov/mantis"
homepage: "https://ansromanov.github.io/mantis/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 23
closedIssues: 174
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-11T22:47:54Z"
lastCommitAt: "2026-06-29T07:23:17Z"
lastReleaseAt: "2026-06-26T22:29:58Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["ansromanov", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fad47538248ca12b2c699318785800fa55f78ba297ee79d78bce1eb1d6f4d2d5/ansromanov/mantis"
---

# mantis

**An instant terminal code browser.**

**Linux / macOS:**
```sh
curl -fsSL https://raw.githubusercontent.com/ansromanov/mantis/main/install.sh | sh
```

**Windows (PowerShell):**
```powershell
irm https://raw.githubusercontent.com/ansromanov/mantis/main/install.ps1 | iex
```

`mantis` is a fast, lightweight tree viewer for reading code in your terminal:
syntax highlighting, markdown rendering, fuzzy search, and code folding in one
small binary. No config required, with an optional plugin system when you want
more. Built with [ratatui](https://ratatui.rs).

</p>

```sh
mantis      # open the current directory and start browsing
```

That's it — no setup step. Press `?` for help, `q` to quit.

## Why mantis?

`mantis` does one job: **move through a codebase and read it, fast**. It opens in
milliseconds, needs zero config, and stays out of your way. It is *not* an editor —
when you want to change something, press `e` to jump into your `$EDITOR`.

| | **mantis** | **Vim / Neovim** | **VS Code** | **Zed** | **Sublime Text** |
| --- | --- | --- | --- | --- | --- |
| Interface | Terminal (TUI) | Terminal (TUI) | GUI (Electron) | GUI (native/GPU) | GUI (native) |
| Footprint |…

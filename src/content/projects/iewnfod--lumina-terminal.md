---
repo: "iewnfod/lumina-terminal"
name: "lumina-terminal"
description: "A modern, cross-platform terminal emulator built with Tauri, React, and Xterm.js — featuring a sleek UI, command palette, and customizable profiles."
readmeQualityOk: true
url: "https://github.com/iewnfod/lumina-terminal"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [73, 24]
topics: ["tauri", "terminal", "xterm"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-21T16:32:42Z"
lastCommitAt: "2026-08-23T04:08:53Z"
lastReleaseAt: "2026-08-05T06:31:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["iewnfod", "Keyneswu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f50fe4c4037ff62a99533387862efe0882cb75ceb1950d8d6bfb1064d705bbd/iewnfod/lumina-terminal"
---

</a>
  <h3 align="center">Lumina Terminal</h3>
</p>
</p>

A modern, cross-platform terminal emulator built with Tauri, React, and Xterm.js — featuring a sleek UI, command palette, and customizable profiles.

## Installation
* Arch Linux (with an AUR helper like `paru` or `yay`):
```shell
paru -S lumina-terminal-bin
# or: yay -S lumina-terminal-bin
```
* Other Linux / macOS: install with script
```shell
curl -fsSL https://raw.githubusercontent.com/iewnfod/lumina-terminal/master/install.sh | bash
```
* Windows: download installer from [releases](https://github.com/iewnfod/lumina-terminal/releases)

## Screenshots

### Terminal
</p>

### Command Palette
</p>

### Settings
</p>

### Profile
</p>

## Features

### Terminal
* Multi-tab terminal backed by [portable-pty](https://docs.rs/portable-pty/latest/portable_pty/) — each tab runs a real shell process
* **Tear off tabs** — move a tab into its own window (`Ctrl+Shift+L` / `Cmd+Shift+L`) while keeping the running process and scrollback alive
* **Find in terminal** (`Ctrl+F` / `Cmd+F`) — match-case / whole-word / regex with a live result counter, via [addon-search](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-search)
*…

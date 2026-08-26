---
repo: "Gianluska/lvsk-calendar"
name: "lvsk-calendar"
description: "A lightweight, modular terminal calendar written in pure Bash. Designed for Arch Linux and Hyprland enthusiasts, it combines minimalist aesthetics with powerful customization options. No compilation needed, just pure shell scripting."
readmeQualityOk: true
url: "https://github.com/Gianluska/lvsk-calendar"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["arch-linux", "bash", "bash-scripting", "calendar", "omarchy"]
stars: 83
forks: 2
openIssues: 3
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-11-29T17:59:17Z"
lastCommitAt: "2026-08-26T04:17:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 14
maintainers: ["Gianluska"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3829c7ccd6b67acff5fa6907060193f434531245eedf119e631e0450ffac35b/Gianluska/lvsk-calendar"
---

```
                                     |               |
                                        | \ \   /  __|  |  /
                                       |  \ \ / \__ \    <
                                       _|   \_/  ____/ _|\_\
```

# lvsk-calendar

**Terminal-based calendar with minimalist design and extensive customization**

</div>

A month-view calendar in pure Bash — zero subprocesses per keypress, ISO week numbers, auto-detected public holidays, and your own events. Ships 5 color schemes, ASCII-art backgrounds and full character/color customization. Built for Arch Linux and Hyprland: the launcher opens it as a centered floating window with no compositor config.

## Installation

```bash
yay -S lvsk-calendar        # or paru; manual: git clone + makepkg -si
```

Runtime deps: `bash` (5.x), `coreutils`, `ncurses`, `util-linux` — optional `curl` + `jq` for holidays.

## Usage

```bash
lvsk-calendar               # in the current terminal (--help / --version available)
lvsk-calendar-launcher      # floating 600x500 window on Hyprland, auto-closes on quit
```

| Key | Action |
|-----|--------|
| `↑↓←→` / `hjkl` | Navigate days and weeks (crossing month edges just…

---
repo: "jR4dh3y/nonchalant-shell"
name: "nonchalant-shell"
description: "Niri-first Wayland desktop shell built with Quickshell"
readmeQualityOk: true
url: "https://github.com/jR4dh3y/nonchalant-shell"
language: "QML"
languages: ["QML"]
languagePcts: [82]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2026-07-23T04:38:11Z"
lastCommitAt: "2026-10-16T08:27:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 48
maintainers: ["jR4dh3y"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1f14fb56e03bafb9eefe755cc84d4ffc1432b0942ef9426d3dd81b66265e433/jR4dh3y/nonchalant-shell"
---

# <img src="./assets/nonchalant/nonchalant-logo-color.svg" alt="" width="40" height="40"> Nonchalant Shell

**Nonchalant Shell** is a Niri-first Wayland desktop shell built with
[Quickshell](https://quickshell.org).

## Hard fork

This project is a **hard fork** of
[Ambxst](https://github.com/Axenide/Ambxst) by
[Axenide](https://github.com/Axenide).

It is not Ambxst, does not track Ambxst as an upstream merge target for
day-to-day work, and ships under its own name, branding, config paths, and
release process. The fork keeps a lean runtime focus:

- wallpaper
- one unified bar
- floating run menu
- lockscreen
- searchable settings and synchronized lyrics
- reactive JSON configuration

Multi-monitor support uses Quickshell `Variants` on `Quickshell.screens`.

## Features

- Runs directly on [Niri](https://github.com/YaLTeR/niri) via its JSON event stream
- Normalized monitor, workspace, and window state for multi-monitor setups
- Unified bar with workspaces/taskbar, clock, system status, and systray
- Floating run menu and power menu
- Wallpaper picker and secure `WlSessionLock` session lock
- Searchable settings with section history, previews, and the existing configuration…

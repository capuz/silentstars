---
repo: "bnema/dumber"
name: "dumber"
description: "Keyboard-driven web browser for tiling WMs, inspired by Zellij, built in Go."
readmeQualityOk: true
url: "https://github.com/bnema/dumber"
homepage: "https://dumber.bnema.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["browser", "dmenu", "fuzzel", "hyprland", "rofi", "sway", "wayland", "niri", "zellij", "gtk4"]
stars: 8
forks: 1
openIssues: 6
closedIssues: 73
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-09T20:42:18Z"
lastCommitAt: "2026-07-11T05:58:10Z"
lastReleaseAt: "2025-10-07T18:12:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 70
maintainers: ["bnema", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a464be197459d8857963d5aca1c0dca148f87adcd419577c9292b5be56fcc5fc/bnema/dumber"
discussionCount: 0
---

# Dumber

Dumber is a keyboard-driven web browser, built around panes, workspaces, and modal controls.

Tabs contain workspaces. Workspaces contain panes. Panes can be split, stacked, moved, resized, and closed from the keyboard.

The layout model is inspired by terminal multiplexers such as Zellij and tmux, but applied to web browsing this is particularly suited for Wayland compositors such as Niri or Hyprland.

[Website](https://dumber.bnema.dev) · [Documentation](https://dumber.bnema.dev/docs) · [Keybindings](https://dumber.bnema.dev/docs/reference/keybindings)

## Demo

https://github.com/user-attachments/assets/232822af-08e4-4a74-9416-87f79c96b118

The demo shows split panes, stacked panes, modal navigation, and workspace switching.

## Overview

Dumber uses three layout levels:

- **Tabs** group separate browser contexts.
- **Workspaces** hold a layout of panes.
- **Panes** display web pages and can be split, stacked, moved, resized, or closed.

Most browser-management actions are exposed through modal keybindings. Enter a mode, run one or more commands, then leave the mode. The default modes cover pane management, tabs, resizing, and session commands.

The browser chrome…

---
repo: "adelmonte/file-browser-tui"
name: "file-browser-tui"
description: "A Dolphin-like file manager for kitty, built with ratatui."
readmeQualityOk: true
url: "https://github.com/adelmonte/file-browser-tui"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-11-06T00:09:56Z"
lastCommitAt: "2026-11-07T13:55:09Z"
lastReleaseAt: "2026-11-07T13:34:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["adelmonte"]
openGraphImageUrl: "https://opengraph.githubassets.com/d14cb96b45d6cf87f132663c46540dc298362782a0f4721b408dcd00c12cd315/adelmonte/file-browser-tui"
fundingLinks: ["GITHUB:https://github.com/adelmonte"]
---

# file-browser-tui

> Also the Open and Save dialog for Firefox and other programs, with
> [xdg-desktop-portal-tui](https://github.com/adelmonte/xdg-desktop-portal-tui).

A Dolphin-like file manager for [kitty](https://sw.kovidgoyal.net/kitty/), built with
[ratatui](https://ratatui.rs). It has Dolphin's look and habits: a places sidebar, an
icon grid with real thumbnails, a clickable path bar, right-click menus and Dolphin's
shortcuts. It uses kitty's graphics to draw your icon theme, thumbnails and rounded
menus right in the terminal, and follows the freedesktop standards for the thumbnail
cache, trash, file types and default apps. Everything else is set in its own config
file.

It's as much a mouse app as a keyboard one. Click, double-click, Shift- and
Ctrl-click to select, drag a box around items, drag files onto folders, places or the
other side of a split, right-click anything for its menu, middle-click a folder to open
it in a tab, scroll with the wheel, and drag the sidebar's edge or the scrollbar. Every
action also has a keyboard shortcut.

## Features

- **Three views**: Icons (zoomable), Compact and Details (sortable columns, expandable
  folder tree). View settings are…

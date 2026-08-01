---
repo: "ChrisLauinger77/gnome-shell-extension-SmartAutoMoveNG"
name: "gnome-shell-extension-SmartAutoMoveNG"
description: "Smart Auto Move NG learns the size and position of your application windows and restores them to the correct place on subsequent launches. Supports Wayland/Dynamic Workspaces. Forked from https://github.com/khimaros/smart-auto-move"
readmeQualityOk: true
url: "https://github.com/ChrisLauinger77/gnome-shell-extension-SmartAutoMoveNG"
homepage: "https://extensions.gnome.org/extension/8149/smart-auto-move-ng/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["gnome", "gnome-shell-extension", "gjs", "window-management"]
stars: 28
forks: 7
openIssues: 1
closedIssues: 26
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2025-02-13T16:02:26Z"
lastCommitAt: "2026-08-01T06:14:44Z"
lastReleaseAt: "2025-06-09T14:50:07Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 65
maintainers: ["ChrisLauinger77", "renovate[bot]", "svan71"]
openGraphImageUrl: "https://opengraph.githubassets.com/176e1526846c4dcd66861df13561be98a898e295304b0ab8886d4664f3a94928/ChrisLauinger77/gnome-shell-extension-SmartAutoMoveNG"
fundingLinks: ["GITHUB:https://github.com/ChrisLauinger77", "KO_FI:https://ko-fi.com/ChrisLauinger77", "CUSTOM:https://www.paypal.com/paypalme/chrislauinger"]
discussionCount: 2
---

# gnome-shell-extension-SmartAutoMoveNG

Forked from https://github.com/khimaros/smart-auto-move

  

</div>

SmartAutoMoveNG
is a Gnome Shell extension which keeps track of all application windows and restores them to the previous position, size, and workspace on restart. Supports Wayland.
Dynamic workspaces are supported for GNOME 48 and later.

  </a>
</p>

# Contributing

Pull requests are welcome.

To update the translation files run
`./smartautomoveng.sh translate` in the extensions directory after your code changes are finished. This will update the files in po folder.
Then [Poedit](https://poedit.net/download) can be used to translate the strings. poedit can also be used to create new localization files.

## Screenshots

#### Quick Settings

The toggle in Quick Settings is connected to the "Freeze saves" switch of settings. (Configurable in GNOME 48 and later)

#### General

#### Saved Windows

#### Overrides

## Getting started

Most settings can be modified via the extension preferences dialog.

## Overtake settings from [smart-auto-move](https://github.com/khimaros/smart-auto-move) (the one this was forked from - only supported until GNOME 48)

- dump the settings from…

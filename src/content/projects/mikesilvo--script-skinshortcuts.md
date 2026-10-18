---
repo: "MikeSiLVO/script.skinshortcuts"
name: "script.skinshortcuts"
description: "Skin Shortcuts enables user-customizable menus for Kodi skins."
readmeQualityOk: true
url: "https://github.com/MikeSiLVO/script.skinshortcuts"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 26
openIssues: 2
closedIssues: 41
watchers: 12
contributors: 31
recentReleases: 3
createdAt: "2019-08-18T21:55:13Z"
lastCommitAt: "2026-10-18T08:16:36Z"
lastReleaseAt: "2026-09-28T19:17:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 74
maintainers: ["MikeSiLVO", "weblate"]
openGraphImageUrl: "https://opengraph.githubassets.com/411c45bb5545f0c1d2a0ec7f1db3dc0466eed53c201b4b8b5de37b53c06ff051/MikeSiLVO/script.skinshortcuts"
fundingLinks: ["KO_FI:https://ko-fi.com/mikesilvo"]
---

# Skin Shortcuts

Skin Shortcuts enables user-customizable menus for Kodi skins. Users can add, remove, reorder menu items, assign widgets, backgrounds, and more through a management dialog that you design.

## Overview

- **Customizable Menus**: Users modify menus without editing XML
- **Widget System**: Assign dynamic content to menu items
- **Background System**: Per-item background images
- **View Locking**: Automatic view selection by content type
- **Template Engine**: Generate complex skin includes from simple definitions
- **Property System**: Extensible custom properties with picker dialogs

The script merges skin defaults with the user's changes and writes includes your skin references. Only the user's changes are stored.

```
skin defaults          user customizations           generated includes
(shortcuts/*.xml)   +   (skin.name.userdata.json)  =  (script-skinshortcuts-includes.xml)
```

## Documentation

### Getting Started

| Document | Description |
|----------|-------------|
| [Getting Started](https://github.com/MikeSiLVO/script.skinshortcuts/blob/HEAD/docs/skinning/getting-started.md) | Setup walkthrough and basic integration |
| [File…

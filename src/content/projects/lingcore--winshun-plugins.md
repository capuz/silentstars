---
repo: "LingCore/WinShun-plugins"
name: "WinShun-plugins"
description: "Win顺 (WinShun) Community Plugin Repository · Community plugins for WinShun"
originalDescription: "Win顺 (WinShun) 社区插件仓库 · Community plugins for WinShun"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LingCore/WinShun-plugins"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [65, 35]
topics: ["launcher", "plugins", "windows", "winshun", "winshun-plugin"]
stars: 10
forks: 8
openIssues: 6
closedIssues: 10
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-10-23T09:12:12Z"
lastCommitAt: "2026-11-11T19:43:43Z"
lastReleaseAt: "2026-10-29T05:01:20Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 91
undervaluedScore: 64
maintainers: ["LingCore", "github-actions[bot]", "ra9fael"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc3fb33e3fd9f5e7c47e178ea5eef50236f77b691d0639211ca5a98713cf6040/LingCore/WinShun-plugins"
discussionCount: 0
---

# Win顺 Plugin Library

The plugin library supports the "unreviewed native plugins" category, with a minimum client version of Win顺 0.22.0. Community exe/dll packages are clearly marked as unreviewed, and installation and every update require user confirmation. For submission steps, see [CONTRIBUTING](https://github.com/LingCore/WinShun-plugins/blob/HEAD/CONTRIBUTING.md).

[Win顺](https://github.com/LingCore/WinShun) (WinShun) is a search launcher for Windows. Its plugins can add keyword commands to the search box. This is the directory of official and community plugins. The source code and release packages of community plugins are hosted in their authors' own GitHub repositories, while the source code of official plugins is in the main Win顺 repository and their release packages are in this repository. This repository registers an entry for each plugin as `plugins/<id>.json`, which specifies where to download it and the file's sha256. Win顺's plugin library reads the list generated from these entries.

## How to install

- Win顺 Settings → Plugins → **Plugin Library**, click "Install and enable", and confirm permissions when required. If you decline, the plugin stays installed but…

---
repo: "lvce-editor/lvce-editor"
name: "lvce-editor"
description: "VS Code inspired text editor that mostly runs in a webworker"
readmeQualityOk: true
url: "https://github.com/lvce-editor/lvce-editor"
homepage: "https://lvce-editor.github.io/lvce-editor"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 39]
topics: ["editor", "electron", "javascript"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-06-16T20:48:52Z"
lastCommitAt: "2026-09-26T08:48:29Z"
lastReleaseAt: "2022-06-24T16:18:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 76
maintainers: ["lvce-editor-helper-bot[bot]", "levivilet"]
openGraphImageUrl: "https://opengraph.githubassets.com/b02dbddcea853faccc4f50fb4b7f5a2d8e0f2d6068846f35635598bc6851ad35/lvce-editor/lvce-editor"
---

# LVCE Editor

VS Code inspired text editor that mostly runs in a webworker.

## macOS command line

After copying `lvce.app` to `/Applications`, open the Command Palette and run
**Shell Command: Install 'lvce' command in PATH**. This links the bundled launcher
into `/usr/local/bin`; macOS may request administrator permission. Open a new
terminal, then run `lvce -v` to check the installed version.

The command preserves existing files and links belonging to other installations.
Running it again with the same installation is harmless. The link continues to
work when the app is replaced at the same location during an update.

The launcher supports `-v` and `--version` without opening a window, plus file paths
and the other editor CLI arguments. This requires a release containing the macOS
launcher and installation command; older releases do not include them.

## Contributing

```sh
git clone git@github.com:lvce-editor/lvce-editor.git &&
cd lvce-editor &&
npm ci &&
npm test
```

Package repository hosting is graciously provided by [Cloudsmith](https://cloudsmith.com).
Cloudsmith is the only fully hosted, cloud-native, universal package management solution, that
enables your…

---
repo: "mgvs/winstats"
name: "winstats"
description: "System resource widgets embedded in the Windows taskbar"
readmeQualityOk: true
url: "https://github.com/mgvs/winstats"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 59
forks: 9
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-09-06T19:55:19Z"
lastCommitAt: "2026-11-19T12:00:22Z"
lastReleaseAt: "2026-11-14T08:24:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 37
maintainers: ["mgvs", "ogrrd", "harafuhub"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d4e977b188102fa06f72c9d2112fc938395a675bf629170dfaaf7b93e8ca8ee/mgvs/winstats"
---

# winstats

System resource widgets in the style of [exelban/stats](https://github.com/exelban/stats), embedded directly into the
Windows taskbar: the strip becomes a child of `Shell_TrayWnd` and is drawn with per-pixel alpha, so the taskbar
background (including a translucent one) is left untouched.

## Screenshots

The strip next to the system tray (per-core CPU bars with the P/E divider, CPU history, RAM, GPU, network and disk
rates):

Click a widget for its popup (the Network one shows the tooltip that opens over a label that did not fit):

| CPU | Network | Memory |
|---|---|---|
|  |  |  |

| Disk | GPU | CPU of a remote ARM node |
|---|---|---|
|  |  |  |

The battery of a remote MacBook through its agent, plugged in but drawing on its battery for the moment: where the
power goes, the pack's readings and the history (in Russian; on the strip the battery widget in its compact layout):

Right click for the settings menu. The interface comes in 29 languages (see Configuration); the menu in
English and Ukrainian, the popups in Greek and Ukrainian:

| Settings menu, the Settings submenu open | In Ukrainian, with the CPU submenu |
|---|---|
|  |  |

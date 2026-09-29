---
repo: "s3rven/silere-shell"
name: "silere-shell"
description: "Bloat-free desktop shell for Hyprland and niri, built on Quickshell. Bar, menu, notifications, OSD and tray in one process, idling under 1% CPU."
readmeQualityOk: true
url: "https://github.com/s3rven/silere-shell"
language: "QML"
languages: ["QML", "Shell"]
languagePcts: [77, 23]
topics: ["desktop-shell", "hyprland", "linux-desktop", "qml", "quickshell", "rice", "ricing", "wayland", "niri", "hyprland-rice"]
stars: 31
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-16T00:06:26Z"
lastCommitAt: "2026-09-29T09:58:36Z"
lastReleaseAt: "2026-08-22T19:57:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["s3rven"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1270669694/77a050be-a2b6-4b22-879c-540460daa667"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.svg"/>
  </picture>
</p>

</p>

</p>

Silere gives you a bar, notifications, an OSD, a calendar, a tray and a menu that holds
quick controls and every setting, all running in one Quickshell process. It's built to
cost almost nothing while you're not using it:

- It uses about 88 MB of memory with only the bar drawn, and about 95 MB once the menu
  has been opened ([how that's measured](#performance)).
- It idles at well under 1% of one CPU core. After 10 minutes without input, it also
  pauses its periodic readings and checks; the clock keeps updating once a minute.
- The media visualizer, package update checks, network speed, temperature alerts, seconds
  on the clock and the underline effects all start switched off.
- Quickshell is the only package it requires. Night light, the visualizer and the
  underline's screenshot feedback start their helper programs only while they're on.

## Features

<details>
<summary>Bar, menu, notifications, OSD, calendar, night light, theming and more</summary>

- The bar can show workspaces, the focused window's title, what's playing, network,
  Bluetooth,…

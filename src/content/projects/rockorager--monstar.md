---
repo: "rockorager/monstar"
name: "monstar"
description: "wayland terminal based on libghostty. cpu rendered, like foot"
readmeQualityOk: true
url: "https://github.com/rockorager/monstar"
language: "Zig"
languages: ["Zig"]
languagePcts: [98]
stars: 139
forks: 9
openIssues: 1
closedIssues: 29
watchers: 3
contributors: 9
recentReleases: 4
createdAt: "2026-07-02T21:53:59Z"
lastCommitAt: "2026-08-28T14:23:06Z"
lastReleaseAt: "2026-08-14T17:11:42Z"
status: "newborn"
tags: []
healthScore: 96
undervaluedScore: 35
maintainers: ["rockorager", "ampagent", "neurosnap"]
openGraphImageUrl: "https://opengraph.githubassets.com/e407659b6cf5071e641d79ee1d39884a2677b7d435e843731ea051bde8176831/rockorager/monstar"
---

<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./dist/dev.rockorager.monstar-wordmark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./dist/dev.rockorager.monstar-wordmark-light.svg">
  </picture>
</h1>

Monstar is a Wayland terminal emulator built on libghostty.

## Features

- Native Wayland with fractional scaling, IME (text-input-v3), activation, and background blur.
- Kitty graphics, clipboard/paste, and drag-and-drop protocols; OSC 8 hyperlinks;
  automatic URI detection; and synchronized output.
- Deep Linux integration: XDG desktop portals, D-Bus notifications, and optional systemd cgroups.
- Non-blocking scrollback search and rectangular block selection.
- Inertial touchpad scrolling with distinct precision/discrete wheel tuning.
- Automatic desktop light/dark theme tracking, bundled color schemes, and live config reload.

## Install

We maintain source-built [`monstar`](https://aur.archlinux.org/packages/monstar)
and prebuilt [`monstar-bin`](https://aur.archlinux.org/packages/monstar-bin) AUR
packages. Both are automatically updated after we tag a release.

We also attach binaries to GH Releases:…

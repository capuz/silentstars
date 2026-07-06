---
repo: "Antiz96/oniri"
name: "oniri"
description: "A tool that automatically maximizes the only window of a niri workspace (with optional tiling layout mode)."
readmeQualityOk: true
url: "https://github.com/Antiz96/oniri"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [79, 21]
topics: ["niri", "niri-config", "niri-ipc", "rust", "wayland", "wayland-compositor", "tiling"]
stars: 37
forks: 3
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-03-16T21:58:31Z"
lastCommitAt: "2026-07-06T07:04:09Z"
lastReleaseAt: "2026-04-26T22:33:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 44
maintainers: ["Antiz96", "renovate[bot]", "1Naim"]
openGraphImageUrl: "https://opengraph.githubassets.com/99566577546b700cd426b8a304917ce92c7b66a42082e4c6b67754042a068aea/Antiz96/oniri"
fundingLinks: ["GITHUB:https://github.com/Antiz96", "KO_FI:https://ko-fi.com/Antiz96"]
---

# Oniri

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Description

Oniri is a tool that automatically maximizes the **on**ly window of a **niri** workspace.

With `oniri` started in your niri configuration file (`spawn-at-startup "oniri"` in `~/.config/niri/config.kdl`), the only window of a niri workspace gets automatically maximized, whether it's the first opened window or the last remaining one after all the other windows got closed:

<https://github.com/user-attachments/assets/d5eab7a2-d0c2-4fc9-b1be-1d4bc1cb8fd8>

With `oniri` started in "first window only" mode in your niri configuration file (`spawn-sh-at-startup "oniri --first-only"` in `~/.config/niri/config.kdl`), only the first opened window of a niri workspace gets automatically maximized (the last remaining window after all the other windows got closed is **not** automatically maximized):

<https://github.com/user-attachments/assets/d97f1416-a5f0-452c-b2d4-16b6af12631f>

With `oniri` started in "tiling layout" mode in your niri configuration file (`spawn-sh-at-startup…

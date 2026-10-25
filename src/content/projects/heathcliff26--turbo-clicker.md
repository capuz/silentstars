---
repo: "heathcliff26/turbo-clicker"
name: "turbo-clicker"
description: "GUI based auto-clicker for Linux."
readmeQualityOk: true
url: "https://github.com/heathcliff26/turbo-clicker"
language: "Rust"
languages: ["Rust", "Slint"]
languagePcts: [63, 20]
stars: 6
forks: 0
openIssues: 3
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-27T10:17:17Z"
lastCommitAt: "2026-10-25T09:00:55Z"
lastReleaseAt: "2026-01-01T08:12:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["heathcliff26", "bot-ahsoka[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5063fd26c7c1df27f43fc37f86855aa8df0980d06d6aaec4e283a853d9d0f22d/heathcliff26/turbo-clicker"
---

# Turbo Clicker

GUI based auto-clicker for Linux (Wayland). It simulates virtual input via x11/wayland-client.
The user needs to accept remote access permissions for the app.

## Table of Contents

- [Turbo Clicker](#turbo-clicker)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
    - [Fedora Copr](#fedora-copr)
    - [Download binary](#download-binary)
      - [Uninstalling](#uninstalling)
  - [Credits](#credits)

## Screenshots

## Installation

### Fedora Copr

The app is available as an rpm by using the fedora copr repository [heathcliff26/turbo-clicker](https://copr.fedorainfracloud.org/coprs/heathcliff26/turbo-clicker/).
1. Enable the copr repository
```bash
sudo dnf copr enable heathcliff26/turbo-clicker
```
2. Install the app
```bash
sudo dnf install turbo-clicker
```

### Download binary

1. Download the [latest release](https://github.com/heathcliff26/turbo-clicker/releases/latest)
2. Unpack the archive
3. Install the app for your user by running:
   - You can install it globally by running the script with `sudo`
```bash
./install.sh -i
```

**Note:** On GNOME there is no native System Tray support, so you…

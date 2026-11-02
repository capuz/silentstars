---
repo: "shadowww-dev/DarkShadowShell"
name: "DarkShadowShell"
description: "DarkShadow's Shell Dotfiles"
readmeQualityOk: true
url: "https://github.com/shadowww-dev/DarkShadowShell"
language: "QML"
languages: ["QML", "Python"]
languagePcts: [63, 25]
stars: 48
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-30T22:04:41Z"
lastCommitAt: "2026-11-02T15:17:13Z"
lastReleaseAt: "2026-11-01T20:30:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 25
maintainers: ["shadowww-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/354e4c7f31888f3a2f0c4a191a1303814ba3621e544f769a151008061072d037/shadowww-dev/DarkShadowShell"
---

Everything is set with sliders and switches in one app. No config editing.<br>
  Made by <a href="https://www.tiktok.com/@shadoww.dev">shadoww.dev</a>

---

## Screenshots

## Supported systems
The bar, the dashboard, the welcome window and Settings show **your distro's logo** automatically.

| System | Status | How |
| --- | --- | --- |
| **NixOS** | main system | the module in `nix/`, then `./install.sh` |
| **Arch Linux** | supported | `./install.sh` |
| **CachyOS** | new in V2.70 | `./install.sh` (Arch based: its repositories and `paru` are used) |
| **EndeavourOS, Garuda** | Arch route | `./install.sh` |
| **Fedora, Nobara** | new in V2.60 | `./install.sh` (COPR for Hyprland and Quickshell) |
| **Bazzite, Silverblue** | commands only | the installer prints the `rpm-ostree` steps |
| **Manjaro** | may not work | its packages are held back, Hyprland can be older than 0.55 |

CachyOS and Fedora support is new: if something does not install, open an issue with the installer log and it gets fixed fast.

## Install in one minute
**Arch Linux / CachyOS / EndeavourOS**
```bash
sudo pacman -S --needed git base-devel
git clone https://github.com/shadowww-dev/shadows-shell && cd…

---
repo: "P3DROVFX/ii-p3drovfx"
name: "ii-p3drovfx"
description: "illogical-impulse based hyprland shell"
readmeQualityOk: true
url: "https://github.com/P3DROVFX/ii-p3drovfx"
language: "QML"
languages: ["QML"]
languagePcts: [82]
stars: 58
forks: 12
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 204
recentReleases: 0
createdAt: "2026-03-29T02:56:08Z"
lastCommitAt: "2026-08-30T00:43:49Z"
lastReleaseAt: "2026-05-18T18:53:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 35
maintainers: ["P3DROVFX", "Scrimas"]
openGraphImageUrl: "https://opengraph.githubassets.com/accaf9cfcac2558500a35a15c48239a9374befbedf63564d10b7c22e9a487d4f/P3DROVFX/ii-p3drovfx"
---

# 🌌 ii-vynx: Quickshell Dotfiles Manager

A powerful and flexible environment manager for [ii-vynx](https://github.com/vaguesyntax/ii-vynx) (Quickshell + Hyprland). This fork adds advanced source switching and update capabilities directly from your Quickshell settings.

---

## ✅ Requirements

- **Hyprland 0.56.1 or newer**
- **Matugen 4.1.0 or newer**

> [!NOTE]
> The lightweight scheme-switching path keeps compatibility with Matugen 3 by detecting whether `--source-color-index` is available, but Matugen **4.1.0+ is the supported/recommended version**. On Fedora, the installer enables the `avengemedia/danklinux` COPR so `matugen` is sourced from the repository that provides the 4.x release instead of Fedora 44's older 3.x package.

---

## 🚀 Installation

To install **ii-vynx** and set up the management environment, clone this repository and run the setup script:

```bash
git clone https://github.com/P3DROVFX/ii-vynx.git ~/Downloads/ii-vynx
cd ~/Downloads/ii-vynx
./setup-ii-vynx.sh
```

> [!TIP]
> The first run will automatically bootstrap the environment into `~/.local/share/ii-vynx/` and create a dedicated fork repository at `~/.local/share/ii-vynx-fork/`.

---

## 🌟 Custom…

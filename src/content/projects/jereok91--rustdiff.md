---
repo: "jereok91/rustdiff"
name: "rustdiff"
description: "Comparador semántico de JSON y XML — escritorio nativo con GTK4"
url: "https://github.com/jereok91/rustdiff"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-04-14T06:21:30Z"
lastCommitAt: "2026-07-04T19:20:52Z"
lastReleaseAt: "2026-07-03T04:54:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 49
maintainers: ["jereok91"]
openGraphImageUrl: "https://opengraph.githubassets.com/479580f456aa2735079f909f6d71f0ba5031e7ec7ef957c95b3b7548a49d6f69/jereok91/rustdiff"
---

# RustDiff

Semantic JSON, XML & SQL diff tool with a native GTK4 + Libadwaita desktop UI.

Language: **English** | [Espanol](README.es.md)

## Features

- Semantic JSON, XML & SQL diff (objects, arrays, XML nodes, attributes, text, and SQL statements)
- Welcome screen with guided comparison flow (single editor initially)
- Side-by-side editors with syntax highlighting
- **Busqueda en editores** (`Ctrl+F`) con navegacion siguiente/anterior y wrap-around
- Auto compare while typing (debounced) + manual compare
- Difference table with filters and click-to-jump navigation
- Export to `.txt` and styled `.html`
- Session history stored in SQLite (paginated, searchable)

## Screenshots

## Installation

### 1) Flatpak + Flathub (recommended for desktop users)

Install Flatpak:

```bash
# Arch / Manjaro
sudo pacman -S flatpak

# Fedora
sudo dnf install flatpak

# Ubuntu / Debian
sudo apt update && sudo apt install -y flatpak

# openSUSE
sudo zypper install flatpak
```

Enable Flathub:

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Install and run RustDiff from Flathub:

```bash
flatpak install flathub com.digitalgex.RustDiff
flatpak…

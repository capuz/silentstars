---
repo: "sanjayadanushka712/Neoarch"
name: "Neoarch"
description: "NeoArch Package Manager for Arch Linux — multi-source GUI (pacman, AUR, Flatpak, npm, pipx)"
readmeQualityOk: true
url: "https://github.com/sanjayadanushka712/Neoarch"
homepage: "https://neoarch.dpdns.org"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 85
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-21T08:52:17Z"
lastCommitAt: "2026-10-29T05:50:17Z"
lastReleaseAt: "2026-10-21T16:14:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 34
maintainers: ["sanjayadanushka712", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a0b93c3ec5244cd79aef3283465fa945b41f1393f47c56e8e63ba10e9c83d56/sanjayadanushka712/Neoarch"
fundingLinks: ["CUSTOM:https://www.buymeacoffee.com/sanjayadanushka"]
discussionCount: 1
---

# NeoArch

> **One app for everything you install.** Search, install, update, and clean across **pacman, AUR (live search), Flatpak, and npm** — from a native PyQt6 desktop app or a headless `neo` CLI with `--json` automation.

> [!NOTE]
> **📖 Read before use** — the [Wiki](https://github.com/neoarch712/Neoarch/wiki) covers every feature with screenshots, tips, and a video tutorial. Start here before your first install. For the complete [feature overview](https://github.com/neoarch712/Neoarch/wiki/Features) and full [Install](#install) instructions, read the wiki and docs below.

---

## Quick start

Install the stable release with your AUR helper:

```bash
yay -S neoarch        # or: paru -S neoarch
```

Then run it — a GUI and a CLI come together:

```bash
neoarch                # launch the desktop app (also in your app menu)
neo --help             # scriptable CLI; try: neo search cmatrix
```

New to it? In a nutshell NeoArch lets you **search, install, and update packages from pacman, AUR, Flatpak, and npm in one place**, keep those packages clean (orphans, cache, `.pacnew` diffs), snapshot before risky operations, and **scan PKGBUILDs for dangerous code before you install…

---
repo: "Goldzxcbug/droidspaces-package"
name: "droidspaces-package"
description: "ARM64 systemd 257 package families for Android old-kernel containers"
originalDescription: "ARM64 systemd 257 package families for Android old-kernel containers"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Goldzxcbug/droidspaces-package"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 5
forks: 12
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-26T09:35:08Z"
lastCommitAt: "2026-11-17T12:16:54Z"
lastReleaseAt: "2026-10-16T22:21:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 72
maintainers: ["Goldzxcbug", "GhfunNiHe"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c047875ca987bcd99e0b32324fd71773941a67a826b9ea0a5b039b347aced5/Goldzxcbug/droidspaces-package"
---

# Droidspaces Package Build

This repository builds ARM64 distribution packages for Anland, and publishes the installers, platform manifests, and CNB images.

| Component | Ubuntu 26.04 | Debian 13 | Fedora 43/44 | Arch Linux ARM | Installer |
| --- | --- | --- | --- | --- | --- |
| KDE / KWin | ✓ | ✓ | ✓ | ✓ | `install-anland-kde.sh` |
| GNOME / Mutter | ✓ | ✓ | ✓ | ✓ | `install-anland-gnome.sh` |
| Niri | ✓ | ✓ | ✓ | ✓ | `install-anland-niri.sh` |
| Hyprland | ✓ | ✓ | ✓ | ✓ | `install-anland-hyprland.sh` |
| Mango | ✓ | ✓ | ✓ | ✓ | `install-anland-mango.sh` |
| Denial | ✓ | ✓ | ✓ | ✓ | `install-anland-denial.sh` |
| Anland Next session | ✓ | ✓ | ✓ | ✓ | `install-anland-next.sh` |

Builds use the `ubuntu-24.04-arm` native ARM64 runner and compile inside the target distribution's container. Desktop packages include the matching patched Xwayland; dependencies are managed by the target system's apt, dnf, or pacman.

## Running builds

In GitHub Actions, select:

- **Build Anland packages**: separately select KDE, GNOME, Niri, Hyprland, Mango, Denial, and the Next session, along with their distribution targets.
- **test**: manually runs the main build workflow. It defaults to the…

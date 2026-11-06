---
repo: "Mavernix/mavernix"
name: "mavernix"
description: "Turns your desktop more… lickable."
readmeQualityOk: true
url: "https://github.com/Mavernix/mavernix"
language: "C++"
languages: ["C++", "QML", "Python"]
languagePcts: [43, 27, 25]
stars: 94
forks: 4
openIssues: 7
closedIssues: 6
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2026-10-25T15:08:06Z"
lastCommitAt: "2026-11-06T12:17:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 27
maintainers: ["pruefsumme", "jonasnemeth", "ClaireLostHerPhone"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff2e45f1eb4f109d4c9baf4784a16c5e235fe137a02abc42310cb1ad21d0c3d2/Mavernix/mavernix"
---

Mavernix is a Linux desktop with a menu bar up top, a dock down below, and windows that cast real shadows. Under the hood it's built on [Wayfire](https://github.com/WayfireWM/wayfire) and [Quickshell](https://quickshell.org).

On a fresh install it looks pretty plain, and that's on purpose. The fun starts if you've still got an old installer for a classic system somewhere. Hand it to the Theme Installer and it builds the whole look right on your machine:

| Your installer | Turns into | Status |
|---|---|---|
| OS X 10.9.5 Mavericks | Sea Lion, light and dark | supported |
| Mac OS X 10.3 Panther | | soon |
| Mac OS 9 | | maybe.. |

Mavernix doesn't ship any of Apple's files. Every look is built from your own copy of the installer.

## Install

Mavernix is built and tested on Arch Linux. It is in the AUR as [`mavernix`](https://aur.archlinux.org/packages/mavernix):

```sh
yay -S mavernix
```

Then pick Mavernix on your login screen. Want to build it yourself? See [docs/building.md](https://github.com/Mavernix/mavernix/blob/HEAD/docs/building.md).

Just want to look around first? `dev/run-in-container` runs it in a Podman container, no install needed.

## Contributing

Bug reports,…

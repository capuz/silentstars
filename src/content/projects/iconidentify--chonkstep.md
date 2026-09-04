---
repo: "iconidentify/chonkstep"
name: "chonkstep"
description: "A traditional floating compositor for Omarchy, designed as a drop-in replacement for Hyprland."
readmeQualityOk: true
url: "https://github.com/iconidentify/chonkstep"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 34
forks: 3
openIssues: 1
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-08-27T22:37:21Z"
lastCommitAt: "2026-09-04T08:09:40Z"
lastReleaseAt: "2026-09-04T07:51:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["iconidentify"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe3ec47218f3da72f37b1ddf8fe179f2cd70730b9f10ef9ed0cd93ba7199f5dd/iconidentify/chonkstep"
---

# ChonkStep

**A traditional floating compositor for Omarchy, designed as a drop-in
replacement for Hyprland.**

ChonkStep replaces the compositor and window manager underneath Omarchy, not
the desktop you already use. Omarchy's themes, bar, menu, applications,
notifications, lock screen, session management, and familiar keybindings stay
in place. ChonkStep translates the Hyprland IPC and `hyprctl` calls that
Omarchy relies on into a classic stacking-window model with real minimize,
maximize, shade, fullscreen, snapping, workspaces, Alt-Tab, and Overview.

Version 0.2.0 is an **alpha**. It is ready for adventurous users and bug
reports, not machines where a compositor failure would be costly. Hyprland
stays installed, so ChonkStep is easy to evaluate and easy to leave.

## Install ChonkStep 0.2.0 alpha

Native packages are available for `x86_64` and `aarch64` (including M1 Macs
running an Arch Linux ARM/Omarchy environment):

```sh
curl -fLO "https://github.com/iconidentify/chonkstep/releases/download/preview-v0.2.0-r2/chonkstep-0.2.0-2-$(uname -m).pkg.tar.zst"
sudo pacman -U "./chonkstep-0.2.0-2-$(uname -m).pkg.tar.zst"
omarchy install desktop-chonkstep
```

Then reboot. On an…

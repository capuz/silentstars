---
repo: "marcmeier/driftless"
name: "driftless"
description: "driftless: one Arch + Hyprland setup on all your machines. The repository is the only truth, the home links into it, a signed sync keeps them in step"
readmeQualityOk: true
url: "https://github.com/marcmeier/driftless"
language: "QML"
languages: ["QML", "Shell", "Python"]
languagePcts: [46, 27, 22]
topics: ["arch-linux", "dotfiles", "hyprland", "wayland", "quickshell"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-23T09:24:22Z"
lastCommitAt: "2026-10-27T09:16:17Z"
lastReleaseAt: "2026-09-24T05:45:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 45
maintainers: ["marcmeier"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1383138623/d821dbd1-018e-48a6-a173-71ae78caf9bb"
---

The repository is the only truth. Your home is made of symlinks into it, so editing
`~/.config/hypr/hyprland.lua` *is* editing the repository. An hourly sync commits what you changed,
takes over what your other machines changed (only if one of your machines signed it), and pushes.
A new machine gets everything from two scripts.

> [!WARNING]
> **A personal hobby project.** In daily use on two machines (a desktop and a notebook) and tested in a
> VM, not more. Most of the code and this README were written with an AI assistant (Claude).
>
> - Read the scripts first. `install-base.sh` wipes a disk, and the sync changes files in your home.
> - Try it in a VM before real hardware.
> - Keep your own backup. Git history and btrfs snapshots are not a backup of your data.
> - Keep the sync in *review first* (the default) until you trust it.

> **Coming from arch-hyprland-kit v1?** This is its successor, rebuilt around links instead of
> copies ([why](https://github.com/marcmeier/driftless/blob/HEAD/ARCHITECTURE.md)). See [moving over](#moving-over-from-arch-hyprland-kit-v1).

## What you get

- **A complete Hyprland desktop in one plain look**: greys and one accent, a desktop of one…

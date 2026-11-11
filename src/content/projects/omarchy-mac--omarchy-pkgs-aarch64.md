---
repo: "omarchy-mac/omarchy-pkgs-aarch64"
name: "omarchy-pkgs-aarch64"
description: "Official aarch64 (Apple Silicon / Asahi) builds for Omarchy Mac"
readmeQualityOk: true
url: "https://github.com/omarchy-mac/omarchy-pkgs-aarch64"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 6
forks: 10
openIssues: 12
closedIssues: 3
watchers: 0
contributors: 10
recentReleases: 2
createdAt: "2026-08-08T03:41:11Z"
lastCommitAt: "2026-11-11T19:45:07Z"
lastReleaseAt: "2026-09-20T11:08:41Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 81
undervaluedScore: 63
maintainers: ["github-actions[bot]", "malik-na", "scottjones"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b4edccc156225decabb64e15052d9cfdd149ef26af4d7f00906f55de2d42000/omarchy-mac/omarchy-pkgs-aarch64"
---

# omarchy-pkgs-aarch64

Unofficial **aarch64** builds of Omarchy's own packages, for Apple Silicon Macs
running [Asahi Linux](https://asahilinux.org/) and the
[omarchy-mac](https://github.com/omarchy-mac/omarchy-mac) fork.

## Why this exists

Omarchy's package repo at `pkgs.omarchy.org` now serves `edge/aarch64`, but
Apple Silicon machines must not *install* from it. Mac `pacman.conf` sets
`[omarchy]` to `Usage = Sync`: the db is refreshed, and only three explicit
Hyprland targets (`omarchy/hyprland`, `omarchy/hyprtoolkit`,
`omarchy/hyprland-guiutils`) come from official edge. Everything else —
`omarchy-nvim`, `voxtype-bin`, `1password`, the share picker — is invisible
to `pacman -S` and Restore Preinstalls. This repo is the install repo those
names actually resolve from. Widening `[omarchy]` to normal Install is how
you get official Hyprland fighting ALARM's `libaquamarine` SONAME.

Application sources are unmodified. The Omarchy Mac package pair carries a
small, checked packaging patch described below. Packages come from four places:

- **Omarchy's own repo** ([omacom-io/omarchy-pkgs](https://github.com/omacom-io/omarchy-pkgs)),
  built with that repo's tooling, which already…

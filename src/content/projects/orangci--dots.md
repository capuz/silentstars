---
repo: "orangci/dots"
name: "dots"
description: "My NixOS system configuration flake. Mirrored from https://orangc.net/g/dots"
readmeQualityOk: true
url: "https://github.com/orangci/dots"
homepage: "https://orangc.net/dots"
language: "Nix"
languages: ["Nix"]
languagePcts: [96]
topics: ["dotfiles", "hyprland", "nix", "nix-flake", "nixos"]
stars: 69
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-09-08T06:57:32Z"
lastCommitAt: "2026-10-09T10:50:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["orangci"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/688814937/ed4ccf7b-57c1-4c0f-bcc4-7b63d268bd6e"
---

> [!CAUTION]
> This flake is meant for my personal usage. Use at your own risk. Several (mostly server related) modules utilise [secrets](https://github.com/orangci/dots/blob/HEAD/docs/secrets.md) and are inoperable without them.
> Going through my code for little bits and snippets to borrow or learn from is totally fine, as long as you respect the license and credit me appropriately.
> This flake is very much a work in progress; I'm constantly working on improving it and I have [many things planned for it](https://github.com/orangci/dots/blob/HEAD/TODO.md) for the future.

Modular NixOS configuration for my machines. Very lightweight! A fresh installation of this flake (with the modules enabled in [komashi](https://github.com/orangci/dots/blob/HEAD/hosts/komashi/config.nix)) will be *18 gigabytes*, which isn't bad at all in my opinion. If you are reading this on the [documentation page](https://flake.orang.ci), the source code is [available on my Forgejo instance](https://git.orangc.net/c/dots).

Hosts:
- komashi ~ My main computer; a HP EliteDesk mini PC with an Intel i5-6500T, integrated graphics, 16GiB of RAM, and a 512GiB NVMe SSD. Name is a reference to *Yumi and the…

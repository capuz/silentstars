---
repo: "Venefilyn/veneos"
name: "veneos"
description: "Bootc images based on Fedora Atomic & Fedora CoreOS"
readmeQualityOk: true
url: "https://github.com/Venefilyn/veneos"
language: "Just"
languages: ["Just", "Shell"]
languagePcts: [79, 21]
topics: ["bazzite", "bootc", "fedora", "fedora-atomic", "gaming", "linux", "ostree", "ublue", "universal-blue", "coreos"]
stars: 15
forks: 0
openIssues: 6
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2024-06-28T20:06:22Z"
lastCommitAt: "2026-11-06T13:20:32Z"
lastReleaseAt: "2026-10-09T18:54:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 68
maintainers: ["renovate[bot]", "Venefilyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e3a060faf79e3141a35952cacb89779589db76045fe1593a36c83318237ba29/Venefilyn/veneos"
---

# VeneOS - Venefilyn OS

A custom Fedora Atomic image designed for gaming, development and daily use. Based on Bazzite Gnome using https://github.com/ublue-os/image-template

Primarily intended for myself.

## Variants/tags

### Desktop

- Built on Fedora Atomic 44
- Uses [Bazzite](https://bazzite.gg/) as the base image
- GNOME 50
- Optimized for AMD GPU
- [Bazzite features](https://github.com/ublue-os/bazzite#about--features)

### Server

- Built on Fedora CoreOS
- Uses [uCore Hyper-Coverged Infrastructure (HCI)](https://github.com/ublue-os/ucore)
- Cockpit is preinstalled
- `zsh` and `fish` is preinstalled
- Starship prompt is preinstalled

## Features

- Curated list of [Flatpaks](https://github.com/Veneflyn/veneos/blob/main/repo_files/flatpaks)
- Starship prompt, `fish`, `fuck` alias and Atuin history search (Ctrl+R). 
- POSIX compliant `fish` that starts through through `zsh`
- NodeJS and front-end tooling
- Setup command for git to work with SSH auth, SSH signing, and to work within containers without extra configuration

## Install

### Image Verification

All my images are signed with sigstore's [cosign](https://docs.sigstore.dev/cosign/overview/). You can verify the…

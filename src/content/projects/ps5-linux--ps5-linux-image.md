---
repo: "ps5-linux/ps5-linux-image"
name: "ps5-linux-image"
description: "Linux image builder"
url: "https://github.com/ps5-linux/ps5-linux-image"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
stars: 58
forks: 17
openIssues: 3
closedIssues: 4
watchers: 5
contributors: 10
recentReleases: 1
createdAt: "2026-04-24T13:20:27Z"
lastCommitAt: "2026-06-23T23:27:48Z"
lastReleaseAt: "2026-06-23T20:54:01Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 35
maintainers: ["resulknad", "TheOfficialFloW", "BugBountyzip"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b743793f632875b3e43e1308755dc9bdec2973ce393bc1243af0b590149c9ae/ps5-linux/ps5-linux-image"
---

# PS5 Linux Image Builder

Builds bootable Linux USB images for PlayStation 5 using Docker containers. Supports Ubuntu 26.04, Arch, CachyOS (Gamescope + Steam), Fedora (GNOME), individually or as a multi-distro image with kexec switching.

## Prerequisites

- Docker (with permission to run `--privileged` containers) — install as per your distro's instructions
- ~30GB free disk space for Ubuntu, Arch, or CachyOS

Once Docker is installed, add your user to the docker group and apply it without logging out:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## Quick Start

```bash
# Build a single Ubuntu 26.04 image
./build_image.sh --distro ubuntu2604

OR

# Build CachyOS (Arch-based, Gamescope + Steam Big Picture)
./build_image.sh --distro cachyos

OR

OR

# Build Fedora (GNOME desktop)
./build_image.sh --distro fedora

OR

# Build a multi-distro image (ubuntu2604 + arch + cachyos)
./build_image.sh --distro all
```

The script auto-clones the kernel source, applies PS5 patches, compiles, and builds the image. Subsequent runs reuse cached artifacts automatically. Press Ctrl+C at any time to abort cleanly.

## Flash to USB

```bash
sudo dd if=output/ps5-ubuntu2604.img…

---
repo: "arshavirm/PersisOS"
name: "PersisOS"
description: "Modern. Elegant. Open Source. "
readmeQualityOk: true
url: "https://github.com/arshavirm/PersisOS"
homepage: "https://persisos.arshavirm.com/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["distro", "linux", "operating-system", "os"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-07-18T06:40:28Z"
lastCommitAt: "2026-09-08T08:16:02Z"
lastReleaseAt: "2026-07-31T16:50:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["arshavirm", "qwen-intl", "webbrain-one"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1304667467/ffeb5154-7caa-4fc6-a983-1b2498dfae23"
---

# PersisOS

PersisOS is a polished KDE Plasma live desktop built on Debian 13. It ships with a focused set of everyday applications, a branded Plasma experience, and secure-by-default services.

## Design goals

- **Stable:** PersisOS 2.0 is pinned to Debian 13 (Trixie) and enables the
  matching security and stable-updates repositories.
- **User-friendly:** The live session provides a complete Plasma desktop,
  modern web browsing, common file formats, screenshots, networking, audio,
  Bluetooth, and a branded graphical installer.
- **Lean:** Packages are installed without automatic recommendations. The
  image includes a deliberately small application set instead of multiple
  programs for the same task.

Package additions should solve a common desktop need, hardware requirement,
security issue, or accessibility problem. Optional specialist applications
belong in the repositories rather than the base image.

## Build

The builder must run as root (or inside the provided CI container) and requires debootstrap, xorriso, squashfs-tools, GRUB, and dosfstools.

```bash
sudo python3 build.py PersisOS-2.0-amd64.json --workdir build --outdir output
```

Use the arm64 configuration for…

---
repo: "semen88pochuev-eng/RezzOS"
name: "RezzOS"
description: "RezzOS is a lightweight operating system built for learning how Linux works. It uses a custom-compiled Linux kernel and BusyBox for userspace. "
readmeQualityOk: true
url: "https://github.com/semen88pochuev-eng/RezzOS"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gnu-linux", "linux", "open-source", "os"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-11T12:55:03Z"
lastCommitAt: "2026-07-23T06:15:12Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["semen88pochuev-eng", "neko-qt", "keeniGithub"]
openGraphImageUrl: "https://opengraph.githubassets.com/6966db56d2fbf29a4824be2cbe100f204ad65c6b90f7889ce08fd97917eba3a4/semen88pochuev-eng/RezzOS"
---

██████╗ ███████╗███████╗███████╗ ██████╗ ███████╗
    ██╔══██╗██╔════╝╚══███╔╝╚══███╔╝██╔═══██╗██╔════╝
    ██████╔╝█████╗    ███╔╝   ███╔╝ ██║   ██║███████╗
    ██╔══██╗██╔══╝   ███╔╝   ███╔╝  ██║   ██║╚════██║
    ██║  ██║███████╗███████╗███████╗╚██████╔╝███████║
    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝

*more documentation in /docs*

## System
| Component | Version |
|-----------|---------|
| Linux | 6.6.40 LTS |
| BusyBox | 1.36.1 |                  
| Bash | 5.2 |
| musl | 1.2.5 |
| runit | 2.1.2 |

*These are just recommended versions, you can change them by editing build.sh!*

## Features
- Package manager (Alpine repos)
- Persistent ext4 storage
- Network with DHCP and DNS
- File downloader (ghget)

## Development
- TCC (Tiny C Compiler) with full musl-dev headers
- Lua 5.3 
- Write and compile C and Lua programs directly in RezzOS

## Usage
```bash
pkg install nano
pkg search python
ghget https://url file
sv status /etc/runit/runsvdir/default/*
sv restart tty1
```
## Manual build
See build.sh for detailed steps.

## Quick Start
To get launched, use ./start.sh or start-gui.sh

## Build from Source
The easiest way is to run the included build script:
```bash…

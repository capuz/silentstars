---
repo: "singularityos-lab/os"
name: "os"
description: "Build System for the Singularity OS Root and Kernelcache"
url: "https://github.com/singularityos-lab/os"
language: "Makefile"
languages: ["Makefile", "Shell"]
languagePcts: [65, 35]
topics: ["buildroot", "kernelcache", "linux"]
stars: 8
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-04-24T13:56:25Z"
lastCommitAt: "2026-06-28T01:47:35Z"
lastReleaseAt: "2026-06-27T20:04:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 58
undervaluedScore: 24
maintainers: ["mirkobrombin"]
openGraphImageUrl: "https://opengraph.githubassets.com/81e2a2c24ca3091482ae43b93eb32e003a88786580e25e64330fcca158dabfd8/singularityos-lab/os"
---

# Singularity OS

Build system for the Singularity OS root and kernelcache images.

## Prerequisites

On Ubuntu/Debian:

```bash
sudo apt-get install -y \
  build-essential gcc g++ make \
  bc bison flex libssl-dev libelf-dev \
  libncurses-dev wget rsync cpio \
  xz-utils gzip bzip2 patch perl python3 \
  git unzip erofs-utils cryptsetup-bin \
  systemd-boot binutils
```

## Build

```bash
./scripts/prepare.sh
./scripts/compile.sh
./scripts/package.sh
```

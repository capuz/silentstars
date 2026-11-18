---
repo: "rc-chuah/termux-backup"
name: "termux-backup"
description: "A Rust program to backup and restore your Termux home and sysroot directories."
readmeQualityOk: true
url: "https://github.com/rc-chuah/termux-backup"
homepage: "https://rc-chuah.is-a.dev/termux-backup"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["android", "backup", "restore", "rust", "termux", "termux-environment", "termux-tool", "termux-tools"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-03-01T05:57:59Z"
lastCommitAt: "2026-11-18T12:07:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 76
maintainers: ["rc-chuah", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc75f7cd330e61ebd62d2e46fd8ff7ecbba32587c43d9577eb7704344026fabf/rc-chuah/termux-backup"
---

# termux-backup

A Rust program to backup and restore your Termux home and sysroot directories.

## Download Counter

## Usage
### How To Use termux-backup

#### Install from GitHub Releases (`.deb`)
1. Download and install the latest `.deb` package for your architecture:
   ```bash
   ARCH=$(dpkg --print-architecture)
   VERSION=$(curl -sL https://api.github.com/repos/rc-chuah/termux-backup/releases/latest | grep -Po '"tag_name": "\K[^"]*')
   DEB_VERSION="${VERSION#v}"
   curl -LO "https://github.com/rc-chuah/termux-backup/releases/download/${VERSION}/termux-backup_${DEB_VERSION}_${ARCH}.deb"
   pkg install ./termux-backup_${DEB_VERSION}_${ARCH}.deb -y
   rm -f termux-backup_${DEB_VERSION}_${ARCH}.deb
   ```
   Or download it directly from [GitHub Releases](https://github.com/rc-chuah/termux-backup/releases/latest) and run:
   ```bash
   pkg install ./termux-backup_*.deb
   ```
2. Run the program:
   ```bash
   termux-backup
   ```

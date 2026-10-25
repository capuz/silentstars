---
repo: "kolezka/NL5H00X"
name: "NL5H00X"
description: "Firmware analysis and modification tools. Bypass security restrictions, install custom launchers, and safely modify locked-down Chinese projector devices with comprehensive backup and recovery scripts."
readmeQualityOk: true
url: "https://github.com/kolezka/NL5H00X"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [64, 31]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-14T17:47:33Z"
lastCommitAt: "2026-10-25T09:00:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 62
maintainers: ["kolezka"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e49379cd2ec7890e979454568e1034b6d0d916aa6e6b46bfbbc219d7d3d52c0/kolezka/NL5H00X"
discussionCount: 0
---

# Android Projector Toolkit

Tools for bypassing security restrictions on locked Android projectors and installing custom launchers.

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Unlocking the launcher](#unlocking-the-launcher)
- [Installing apps](#installing-apps)
- [Root for apps](#root-for-apps)
- [Features](#features)
- [Scripts](#scripts)
- [Documentation](#documentation)
- [Tested Devices](#tested-devices)
- [Safety](#safety)
- [If the projector stops booting: the `wtprovision` brick](#if-the-projector-stops-booting-the-wtprovision-brick)
- [Emergency Recovery](#emergency-recovery)
- [Contributing](#contributing)
- [License](#license)

## Overview

Fixes Android projectors that won't let you install apps or change launchers. Creates a complete device backup and safely replaces the locked stock launcher with [Projectivy](https://github.com/spocky/miproja1), or another launcher of your choice.

## Quick Start

```bash
./scripts/PROJECTOR.sh
```

That is the whole thing. It finds the projector, shows what state it is in, and
walks you through backup → verify → unlock, with a progress bar for the 15-minute
backup. Nothing is done without asking.…

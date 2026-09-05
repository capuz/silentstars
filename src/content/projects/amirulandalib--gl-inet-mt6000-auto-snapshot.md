---
repo: "AmirulAndalib/gl-inet-mt6000-auto-snapshot"
name: "gl-inet-mt6000-auto-snapshot"
description: "This script automates the firmware update process for the GL.iNet MT6000 device, fetching the latest SNAPSHOT version and verifying it before performing the upgrade."
readmeQualityOk: true
url: "https://github.com/AmirulAndalib/gl-inet-mt6000-auto-snapshot"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [68, 32]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-20T12:21:39Z"
lastCommitAt: "2026-09-05T07:48:12Z"
lastReleaseAt: "2025-12-20T12:42:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 49
maintainers: ["AmirulAndalib"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e1819efb2c6568e53812f863b49d614812eef13f3e94486ee767e70cccf76b6/AmirulAndalib/gl-inet-mt6000-auto-snapshot"
---

# GL.iNet MT6000 (Flint 2) Auto-Updater

Automated firmware update system for the GL.iNet GL-MT6000 (Flint 2) router, targeting the SNAPSHOT release channel.

## Overview

This project provides a lightweight, self-preserving shell script that automatically updates your GL-MT6000 router to the latest SNAPSHOT firmware. The script is designed to work reliably on minimal BusyBox environments without external dependencies.

## Features

- **SNAPSHOT Channel Targeting**: Explicitly filters for firmware marked as SNAPSHOT, ignoring TESTING and RELEASE channels
- **Zero Dependencies**: Pure POSIX shell and AWK implementation; no requirement for jsonfilter, lua, python, or curl
- **Self-Preserving**: Automatically registers itself in `/etc/sysupgrade.conf` to survive firmware upgrades
- **Checksum Verification**: Validates SHA256 checksums before flashing to prevent corrupted firmware installation
- **Duplicate Prevention**: Tracks installed firmware timestamps to avoid unnecessary re-flashing
- **Retry Logic**: Automatic retry mechanism for failed API requests and downloads
- **Lock File Protection**: Prevents concurrent execution of multiple update instances
- **System Logging**:…

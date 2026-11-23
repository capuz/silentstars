---
repo: "crocdeine/ps3-data-recovery"
name: "ps3-data-recovery"
description: "A toolkit to recover user data from a formatted PS3 internal hard drive. Includes tools and instructions for decrypting the drive using the eid_root_key, generating a raw decrypted image, and carving files using a custom signature list for PhotoRec."
readmeQualityOk: true
url: "https://github.com/crocdeine/ps3-data-recovery"
language: "Python"
languages: ["Python", "C"]
languagePcts: [65, 25]
topics: ["ps3", "ps3-tool", "filesystem-recovery", "ps3-data-recovery", "carving", "ps3-recovery"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-17T17:20:04Z"
lastCommitAt: "2026-11-23T12:24:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["claude", "crocdeine"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/968205372/31a052bf-fa92-453b-9199-718f640fc802"
---

# PS3 Data Recovery

`ps3recover` is a single command-line tool for recovering photos, videos, music and save data from a formatted PS3 internal hard drive. It runs on macOS, Windows and Linux, and needs nothing else installed.

> **Status: work in progress.** Decryption, file carving, sorting and checking all work and are tested on synthetic images. They have not yet been tried on a real PS3 drive, so please [open an issue](https://github.com/crocdeine/ps3-data-recovery/issues) with your console model if you try it.

## How it works

The PS3 encrypts its internal drive with keys derived from a console-specific secret, the `eid_root_key`. Formatting the drive does not erase the data, it only makes it unreachable. Recovery takes three stages:

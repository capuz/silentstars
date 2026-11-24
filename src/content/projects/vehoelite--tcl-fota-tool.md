---
repo: "vehoelite/tcl-fota-tool"
name: "tcl-fota-tool"
description: "TCL Firmware Tool - Firmware checker & downloader for TCL/REVVL"
readmeQualityOk: true
url: "https://github.com/vehoelite/tcl-fota-tool"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [79, 20]
stars: 30
forks: 7
openIssues: 2
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 7
createdAt: "2026-02-28T18:33:19Z"
lastCommitAt: "2026-11-24T01:55:47Z"
lastReleaseAt: "2026-11-24T01:59:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 38
maintainers: ["vehoelite"]
openGraphImageUrl: "https://opengraph.githubassets.com/b72da1d63917851619e82d4ca261a86732e3dc9b6d7d94bcdecdf9df754f5493/vehoelite/tcl-fota-tool"
---

# tcl-fw

**Pull and decrypt official TCL (MediaTek) firmware — flashable service packages, fully offline.**

`tcl-fw` talks to TCL's own FOTA download servers the way the on-device updater
does (no Google, no account, no dongle), lists a device's complete factory
"service" fileset, streams the plaintext partitions, and **AES-decrypts** the
small partitions that ship inside an encrypted 4 MiB header — producing clean,
flashable images (`lk.img`, `boot.img`, `vbmeta.img`, `preloader_*.bin`, the
scatter, …).

> ### Credit
> The header-decryption scheme that makes this tool possible — **AES-128-ECB
> with a universal key recovered from `sugar_otu_r.dll`** — was cracked by
> **[Littlenine Ennea](https://github.com/LittlenineEnnea)**. Mode 4 (full-image
> decryption) exists entirely because of that work. Thank you.

Works on TCL-made Android devices (TCL, REVVL, Alcatel).

---

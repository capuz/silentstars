---
repo: "quer3q/kraken-mount"
name: "kraken-mount"
description: "Minimalist PS5 game mounter supporting PKG, folder dumps, zstd and lz4"
readmeQualityOk: true
url: "https://github.com/quer3q/kraken-mount"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [70, 25]
topics: ["homebrew", "ps5"]
stars: 499
forks: 44
openIssues: 25
closedIssues: 38
watchers: 8
contributors: 2
recentReleases: 3
createdAt: "2026-11-13T07:25:37Z"
lastCommitAt: "2026-11-18T12:03:34Z"
lastReleaseAt: "2026-11-16T10:50:49Z"
status: "newborn"
tags: ["solo_builder", "under_pressure"]
healthScore: 82
undervaluedScore: 15
maintainers: ["quer3q", "strongt1me"]
openGraphImageUrl: "https://opengraph.githubassets.com/12048b6bdbd3723ef54a63397e5254957480ecac2bb35429abd1ec828e66b076/quer3q/kraken-mount"
---

A PS5 game mounter. It finds games on the internal SSD, the M.2 drive and USB drives.

**Supported formats**: debug FPKG (`.pkg`) and game folders (plain, or packed with zstd or LZ4).
For large, demanding games, use the zstd pack format: it performs better than FPKG.

## How to

1. Download `kraken-mount.elf` from [Releases](https://github.com/quer3q/kraken-mount/releases)
   and send it to your jailbroken PS5 with the ELF loader (elfldr, port 9021) or payload-manager:
   `nc -w 3 <ps5-ip> 9021 < kraken-mount.elf`. kstuff must be loaded, and ShadowMount+ must not be
   running: Kraken Mount waits until both are true.
2. Put each game in a scan root:
   - internal SSD: `/data/homebrew`, `/data/etaHEN/games`
   - M.2 or extended drive (`/mnt/ext0`, `/mnt/ext1`): `homebrew`, `etaHEN/games` or the drive root
   - USB drive (`/mnt/usb0` to `/mnt/usb7`): `homebrew`, `etaHEN/games` or the drive root
3. Each game gets a "<name> registered" notification and its own home-screen tile.

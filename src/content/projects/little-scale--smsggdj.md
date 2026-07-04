---
repo: "little-scale/smsggdj"
name: "smsggdj"
description: "SEGA Master System / Game Gear Music Tracker"
readmeQualityOk: true
url: "https://github.com/little-scale/smsggdj"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [70]
stars: 21
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-13T13:53:13Z"
lastCommitAt: "2026-07-04T22:52:58Z"
lastReleaseAt: "2026-06-19T12:19:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["little-scale"]
openGraphImageUrl: "https://opengraph.githubassets.com/9024b0b8d95a35e580cc2eff5a4c8223ea4f9ecfed34e3450fc83e7dd2db7537/little-scale/smsggdj"
---

</p>

An LSDJ-inspired music tracker for the **Sega Master System** and **Game
Gear**, written in pure Z80 assembly. Make music on real hardware (via
flashcart) or in an emulator, using just the D-pad and two buttons. Sound is
the SN76489 PSG — three square channels and noise — plus 4-bit PCM samples and
drawn wavetables via the volume-register DAC trick, a built-in tempo-synced
echo, and Game Gear stereo. On a Master System with the **FM Sound Unit** you
also get YM2413 FM: melodic voices (15 ROM patches + 8 ROM-baked custom presets,
with tables and per-note commands) and a rhythm-mode drum kit, sounding
alongside the PSG (SMS only, off by default).

> 📺 **[Video tutorials](https://www.youtube.com/playlist?list=PLf0JfRVkMERq5UKv2p6lkpVskXwkyfFCt)** — a growing playlist walking through how to use SMSGGDJ.

One source tree builds two ROMs:

- **`smsggdj.sms`** — Master System (full screen).
- **`smsggdj.gg`** — Game Gear / *GGDJ* (handheld screen, real stereo).

**Prebuilt ROMs are on the [Releases](../../releases) page** — download the
version-stamped `.sms` (Master System) or `.gg` (Game Gear) ROM; flash to a cart
or open in an emulator, no toolchain needed.

## Build & run…

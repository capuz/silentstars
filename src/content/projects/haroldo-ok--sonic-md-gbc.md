---
repo: "haroldo-ok/sonic-md-gbc"
name: "sonic-md-gbc"
description: "A W.I.P. vibe-port at half-scale of Sonic 1 from Sega Genesis to Nintendo Game Boy, Generated using Arena and polished using Claude."
readmeQualityOk: true
url: "https://github.com/haroldo-ok/sonic-md-gbc"
homepage: "https://haroldo-ok.itch.io/sonic-md-gbc"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-21T18:59:35Z"
lastCommitAt: "2026-11-20T11:57:22Z"
lastReleaseAt: "2026-11-05T09:52:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 31
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8f79b21604984fc1a1e4b931d40db683328a41fe7c115692046c5c23446e33a3/haroldo-ok/sonic-md-gbc"
---

# Sonic the Hedgehog — Complete Half-Scale (`0.5x`) Game Boy Color Port

A complete, zero-placeholder, **half-scale (`0.5x` width × `0.5x` height) Game Boy Color (`MBC5+RAM+BATTERY`, `2.0 MB` / `128` ROM banks + `32 KB` Battery-Backed SRAM)** port built from **`https://github.com/sonicretro/s1disasm`**.

Every single one of the **`946 / 946` non-`.git` files** in `s1disasm` is hashed (`SHA-256`), converted without placeholders (`placeholders_used = 0` in `generated/conversion_manifest.json`), compiled with **GBDK-2020 (`sdcc` / `lcc -msm83:gb`)** into `sonic.gbc` running at CGB `8.388 MHz` double speed (`cpu_fast()`), and verified end-to-end on emulated Game Boy Color hardware using **PyBoy** (`10` hardware E2E tests in `tests/test_e2e_emulator.py`, including the optional 30 Hz ROM pacing probe).

---

---
repo: "TibaneLabs/catcard"
name: "catcard"
description: "Clean-room open-source Rust firmware for Coldcard hardware wallets. MIT licensed, no-std, Cortex-M4F."
readmeQualityOk: true
url: "https://github.com/TibaneLabs/catcard"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["bitcoin", "bitcoin-wallet", "clean-room", "coldcard", "cortex-m", "embedded", "firmware", "hardware-wallet", "no-std", "rust"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-02T05:20:59Z"
lastCommitAt: "2026-09-19T01:18:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 45
maintainers: ["MagicalTux", "kwsantiago"]
openGraphImageUrl: "https://opengraph.githubassets.com/20590a2b03de24077da0f54e32be44e5d64cabf8ae4a5a4712473dd54b2b11af/TibaneLabs/catcard"
---

# CatCard

An independent, open-source firmware for Coldcard hardware, written from scratch in
Rust. Bitcoin first, but not Bitcoin-only — see [`docs/ROADMAP.md`](https://github.com/TibaneLabs/catcard/blob/HEAD/docs/ROADMAP.md).

MIT licensed. Copyright © 2026 Karpeles Lab Inc.

> **Status: pre-hardware.** The wallet crypto (BIP-32/39, addresses, Base58Check,
> Bech32/Bech32m) is implemented and passes the official test vectors. The drivers
> (SPI, SSD1306, keypad, SPI-NOR) and the settings store are written but have **never
> run on a device** — see [`docs/VALIDATION.md`](https://github.com/TibaneLabs/catcard/blob/HEAD/docs/VALIDATION.md). There is no USB,
> no PSBT and no signing yet. See [`docs/ROADMAP.md`](https://github.com/TibaneLabs/catcard/blob/HEAD/docs/ROADMAP.md).
>
> Do not put funds on a device running this.

## Why

The stock Coldcard firmware derives its BIP-39 wallet seed from two chained software
PRNGs, not from the hardware TRNG the chip provides. On mk3 the resulting seed has on
the order of 22 bits of real entropy; on mk4 a partial mitigation raises the floor to
about 32. That is the immediate reason this project exists, and it is why the entropy
subsystem is…

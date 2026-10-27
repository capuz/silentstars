---
repo: "ArthurHeymans/rflasher"
name: "rflasher"
description: "Blazing fast SPI NOR flash programming"
readmeQualityOk: true
url: "https://github.com/ArthurHeymans/rflasher"
homepage: "http://rflasher.9elements.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 21
forks: 5
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-23T07:10:03Z"
lastCommitAt: "2026-10-27T09:17:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 48
maintainers: ["ArthurHeymans", "hlyi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a61474a72f9a344c0c89fd4b79b82a3c898fb4b03dcbcf55b43b311101c4ff70/ArthurHeymans/rflasher"
---

# rflasher

rflasher reads, writes, and erases SPI flash chips from Rust. It is heavily inspired by [flashprog](https://github.com/SourceArcade/flashprog) and supports 480+ chips (`rflasher list-chips`) and most common programmers: CH341A/CH347, Dediprog, FTDI (MPSSE and FT4222H), serprog, Raiden debug hardware, internal Intel/AMD chipset controllers, Allwinner FEL, and Linux spidev/MTD/GPIO. The same codebase also runs in the browser via WebSerial/WebUSB, and the core crates are `no_std` for reuse in firmware.

Only SPI NOR flash is in scope.

> **⚠️ Alpha software**
>
> rflasher is not ready for production use. For anything critical, use [flashprog](https://github.com/SourceArcade/flashprog) instead.
>
> Before writing: make sure the programmer voltage matches the chip (3.3 V for most SPI flash), check write protection status, and always read a backup first. Corrupting the wrong region (e.g. the Intel ME region) can brick the device permanently.

## Installation

Build from source (Rust 1.85+):

```bash
git clone https://github.com/ArthurHeymans/rflasher
cd rflasher
cargo build --release                                          # default programmers
cargo build --release…

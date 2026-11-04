---
repo: "OpenIPC/devourer"
name: "devourer"
description: "The Realtek userspace Wi-Fi driver"
readmeQualityOk: true
url: "https://github.com/OpenIPC/devourer"
homepage: "https://openipc.org"
language: "C"
languages: ["C"]
languagePcts: [74]
topics: ["openipc", "rtl8812au", "openipc-fpv"]
stars: 67
forks: 38
openIssues: 43
closedIssues: 89
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2024-03-08T09:58:46Z"
lastCommitAt: "2026-11-04T13:05:03Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["josephnef", "snokvist", "gilankpam"]
openGraphImageUrl: "https://opengraph.githubassets.com/1621c685339ded0febaa9387c01a2e47cab660306fffa4bea91889c3611a3549/OpenIPC/devourer"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/openipc"]
---

# devourer

**The Realtek Wi-Fi driver that simply devours its competitors.**

Devourer is a userspace Wi-Fi driver for Realtek's 802.11n, 802.11ac and 802.11ax
USB adapters —
the cheap, everywhere-available dongles that power most long-range FPV video
links. It talks to the chip directly over libusb: no kernel module, no DKMS
tree to patch every time your kernel updates, no root filesystem to taint.
Build one static library, link it, and you have raw monitor-mode RX and
packet injection across five Realtek hardware backends, from a single API.

It is the [OpenIPC](https://openipc.org) project's driver of choice for
long-range digital video links.

## Why devourer

- **No kernel driver, no driver hell.** Everything runs in your process via
  libusb — on Linux, macOS, Windows and Android alike, including platforms the
  vendor drivers never supported. On Android that means no root and no custom
  kernel: [PixelPilot](https://github.com/OpenIPC/PixelPilot) uses devourer as
  the receive path of an FPV ground station running on an ordinary phone, with
  the adapter opened straight from the USB permission the app is granted.
- **Faster on-air than the kernel driver.** Ready-to-receive…

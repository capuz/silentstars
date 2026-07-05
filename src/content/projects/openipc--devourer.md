---
repo: "OpenIPC/devourer"
name: "devourer"
description: "The Realtek 11ac userspace driver."
readmeQualityOk: true
url: "https://github.com/OpenIPC/devourer"
homepage: "https://openipc.org"
language: "C"
languages: ["C"]
languagePcts: [85]
topics: ["openipc", "rtl8812au", "openipc-fpv"]
stars: 37
forks: 19
openIssues: 5
closedIssues: 25
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2024-03-08T09:58:46Z"
lastCommitAt: "2026-07-05T06:33:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 64
maintainers: ["josephnef", "AlaEddine-Zoghlami"]
openGraphImageUrl: "https://opengraph.githubassets.com/edcdec70ccefcf3628c783fbf75b8414a6144cf311b4fbc6e8a6efb40a18083a/OpenIPC/devourer"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/openipc"]
---

# devourer

The Realtek 11ac driver that simply devours its competitors.

Devourer is a userspace re-implementation of Realtek's RTL88xxAU Wi-Fi
driver, speaking to the chip directly through libusb. It covers three chip
generations: the first-generation **Jaguar** 802.11ac family (RTL8812AU,
RTL8814AU, and RTL8821AU shipping on every band, RTL8811AU via the 8812
code path); the **Jaguar2** **RTL8822BU** (RTL8812BU via the 8822B code path,
2.4/5 GHz at 20/40/80 MHz); and
the **Jaguar3** parts — `rtl8822c` (RTL8812CU / RTL8822CU) and `rtl8822e`
(RTL8812EU / RTL8822EU) — which additionally reach **5/10 MHz narrowband**
operation the Jaguar-1 silicon physically can't. No kernel module, no
`rtl8812au` DKMS tree — just a C++20 static library (`WiFiDriver`) plus two
demo executables for RX and TX. It is the OpenIPC project's driver of choice
for long-range video links built on top of cheap Realtek 11ac USB radios.

## Hardware landscape

Devourer targets **RTL8812AU**, **RTL8811AU**, **RTL8814AU**, and
**RTL8821AU** — all members of Realtek's first-generation 802.11ac
silicon family, internally codenamed **"Jaguar"**. The HAL,
register-table layout, firmware-download plumbing, and…

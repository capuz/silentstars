---
repo: "Pawlash/p1100-macos-driver"
name: "p1100-macos-driver"
description: "macOS driver for the HP LaserJet Pro P1100 series (P1102 etc.) that works on Apple Silicon without Rosetta"
readmeQualityOk: true
url: "https://github.com/Pawlash/p1100-macos-driver"
language: "C"
languages: ["C", "Shell"]
languagePcts: [62, 24]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-20T14:19:00Z"
lastCommitAt: "2026-11-17T12:18:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 8
maintainers: ["Pawlash", "ginosanterre"]
openGraphImageUrl: "https://opengraph.githubassets.com/870fb6b10746b4474a2ad2f8c50bf9f0932cdd5ec52ce7d6b8d27e81b807b83e/Pawlash/p1100-macos-driver"
---

# Native macOS driver for the HP LaserJet Professional P1100 series

> **Note:** verified on a P1102 and a P1109 over USB, and on a P1109w over Wi-Fi (raw `pdl-datastream`). The other P1100 models should work the same way, but nobody has confirmed it yet. See [Supported printers](#supported-printers).

HP's macOS driver for the P1100 series (P1102, P1104, P1106, P1107, P1108, P1109) is an Intel-only binary. On Apple Silicon it only runs through Rosetta, and Apple is phasing Rosetta out after macOS 27. Once it's gone, the printer stops working even though the hardware is perfectly fine.

This project replaces the one part of HP's driver that matters, the CUPS filter `rastertozjs`. It's written from scratch in C and runs natively on Apple Silicon and Intel. Everything else is still handled by macOS as before.

The output sent to the printer is byte for byte identical to what HP's original driver sends. This was checked on 85 test cases: all paper sizes, all media types, both quality modes, EconoMode, density, copies, manual duplex and a set of difficult test images. Print quality is exactly the same as with HP's driver.

## Supported printers

| Printer | Status |
|---|---|
| HP…

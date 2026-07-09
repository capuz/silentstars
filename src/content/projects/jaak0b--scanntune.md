---
repo: "jaak0b/ScanNTune"
name: "ScanNTune"
description: "Caliper-free 3D printer XY scale and skew calibration from a flatbed scan"
readmeQualityOk: true
url: "https://github.com/jaak0b/ScanNTune"
homepage: "https://scanntune.jaak0b.at/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["3dprinting", "axis", "kalico", "klipper", "machine", "marlin", "reprap", "skew", "tuning", "reprapfirmware"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T20:54:00Z"
lastCommitAt: "2026-07-09T20:45:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["jaak0b"]
openGraphImageUrl: "https://opengraph.githubassets.com/45200cc1f434d24e5054d0d9a4b86c14fdd36dad43a35bf314a123ca2e79fbc3/jaak0b/ScanNTune"
---

# ScanNTune

**Caliper-free 3D printer calibration from a flatbed scanner: skew, shrinkage, pressure advance, and
extrusion multiplier.**
Print a coupon, scan it on an ordinary office scanner, and get ready-to-paste firmware or slicer
corrections. No calipers, no measuring, no eyeballing test prints, no typing numbers into a calculator.

## ▶ [Open ScanNTune in your browser](https://scanntune.jaak0b.at/)

**Runs entirely in your browser. Nothing to install, nothing uploaded to a server, on desktop or phone.**

</div>

> [!TIP]
> **A regular office flatbed scanner is all you need.** The same kind you'd use to copy a document,
> including the scanner built into an all-in-one printer. No camera photos, no special hardware, and no high
> end machine required. Scan at 600 DPI, which any normal home or office scanner can do.

> [!WARNING]
> **XY calibration is solid. XZ and YZ are experimental**: the standing-plate scans work, but the
> correction math for those planes hasn't seen the same real-world validation as XY yet. Sanity-check the
> results before trusting them on your printer.

## How you use it

1. **Once per scanner:** scan any plastic card (a credit, debit or loyalty card)…

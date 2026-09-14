---
repo: "ijigen/fpSup"
name: "fpSup"
description: "SIGMA fp Enhancement Project"
readmeQualityOk: true
url: "https://github.com/ijigen/fpSup"
language: "Assembly"
languages: ["Assembly", "Python", "HTML"]
languagePcts: [41, 34, 22]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-08-18T15:11:22Z"
lastCommitAt: "2026-09-14T09:11:56Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 70
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bca38cba06e9a51ca3318eaa5959e375117bd48920e45e137446078d08165315/ijigen/fpSup"
fundingLinks: ["KO_FI:https://ko-fi.com/fpsup"]
---

# fpSup

**SIGMA fp firmware research and on-camera tools.**
**SIGMA fp 韌體研究與機身端工具。**

[English](#english) | [繁體中文](#繁體中文) · **[→ ijigen.github.io/fpSup](https://ijigen.github.io/fpSup/)**

Everything here runs from an `AutoRun.txt` on the SD card, in RAM only. Remove the
file, power-cycle, and the camera is stock. **Nothing is ever written to flash.**
**Firmware Ver.5.02 only** — a card built for one version writes into whatever
happens to be at those addresses on another.

---

## English

### Start here

**[ijigen.github.io/fpSup](https://ijigen.github.io/fpSup/)** — the tools, the
releases and the reference, in one page.

**[fpSup-Merge](https://ijigen.github.io/fpSup/tools/card-composer/)** — pick the
products you want on one card and get `AutoRun.txt` and `VSHL.BIN`. Merged cards are
produced here and nowhere else, and every combination is checked against the same
rules the build scripts use. Runs in the browser — no toolchain, no camera.

### Releases

Two files each — copy `AutoRun.txt` and `VSHL.BIN` to the root of the card. No
folder to make, nothing to convert, no step afterwards. To put two of them on one
card, use the composer rather than copying both.

| product |…

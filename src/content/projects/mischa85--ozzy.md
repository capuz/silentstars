---
repo: "mischa85/Ozzy"
name: "Ozzy"
description: "Driver for several Ploytec interfaces"
readmeQualityOk: true
url: "https://github.com/mischa85/Ozzy"
language: "Objective-C++"
languages: ["Objective-C++", "C++", "C"]
languagePcts: [34, 32, 23]
stars: 113
forks: 22
openIssues: 51
closedIssues: 25
watchers: 23
contributors: 2
recentReleases: 0
createdAt: "2024-04-26T16:10:35Z"
lastCommitAt: "2026-10-10T10:04:21Z"
status: "thriving"
tags: ["funded", "under_pressure"]
healthScore: 71
undervaluedScore: 20
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b7e723321083c8fffcdd9dfccb0c3205d70cd33a0fddafdd923d93d989d034f6/mischa85/Ozzy"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mischa85"]
---

# 🎛️ Ozzy - USB Audio & MIDI Driver for Non-Class Compliant Devices

**Bringing legacy professional audio hardware back to life.**

Modern operating systems dropped support for non-class compliant USB audio devices—hardware that doesn't follow the standard USB Audio Class specification. These devices require vendor-specific drivers, and when manufacturers abandon them, perfectly good professional equipment becomes unusable.

Ozzy fixes that.

This is an open-source, reverse-engineered driver supporting non-class compliant USB audio interfaces—high-end DJ mixers and audio processors that were left behind when official driver support ended.

**Currently Supported Devices:**
* **Allen & Heath Xone:DB4, DB2, DX, 4D** (Ploytec-based protocol)

More devices can be added—the architecture separates the audio engine from device protocols.

---

## 🚀 What Makes These Devices Non-Class Compliant?

Standard USB Audio Class devices work automatically with any modern OS—they follow a universal protocol. But professional hardware often needs:

* **Custom audio routing** beyond simple stereo in/out
* **Hardware-specific DSP control** and mixer integration  
* **Proprietary USB protocols** for…

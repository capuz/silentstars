---
repo: "Detcom-GH/lowakernel"
name: "lowakernel"
description: "A custom Linux kernel for ThinkPads on AMD"
readmeQualityOk: true
url: "https://github.com/Detcom-GH/lowakernel"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 25
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-10T12:25:50Z"
lastCommitAt: "2026-11-12T11:42:59Z"
lastReleaseAt: "2026-11-12T11:33:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 35
maintainers: ["Detcom-GH"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b359a6daaf16fa6e7fd63a450962d2bdfbd604a849ac8f73df38e165a56f5b1/Detcom-GH/lowakernel"
---

# lowakernel

Changed name from detkernel to lowakernel, because my dog's name is Lowa and I love her too much.

A custom Linux kernel built specifically for AMD-powered ThinkPads. Strips everything that doesn't belong: Intel, NVIDIA, legacy drivers, dead protocols, server-only subsystems etc., leaving a leaner, more responsive kernel tuned for the hardware that's actually in your machine.

Faster boot. Better responsiveness. Slightly better performance. Lower power consumption.

> **Note:** lowakernel may work on other AMD-based laptops or desktops, but is only tested and supported on ThinkPads. Intel ThinkPads are not supported at all, all Intel drivers are removed on purpose. Use on other hardware at your own risk.

---

## Supported models

| Model | CPU Generation |
|-------|---------------|
| ThinkPad T495 | AMD Zen1 |
| ThinkPad T14 / T14s G1-G6 | AMD Zen2-Zen5 |
| ThinkPad T16 G1-G3 | AMD Zen3-Zen5 |
| ThinkPad P14s G1-G6 | AMD Zen2-Zen5 |
| ThinkPad P15v G1-G3 | AMD Zen3 |
| ThinkPad L14 / L15 G1-G4 | AMD Zen2-Zen5 |

Community-confirmed

| Model | CPU Generation |
|-------|---------------|
| ThinkPad E14 G6 | AMD |
| ThinkPad E14 G8 | AMD Zen 5 (Ryzen AI 400 series),…

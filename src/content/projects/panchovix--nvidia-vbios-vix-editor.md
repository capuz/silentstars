---
repo: "Panchovix/nvidia-vbios-vix-editor"
name: "nvidia-vbios-vix-editor"
description: "Offline NVIDIA Blackwell VBIOS editor."
readmeQualityOk: true
url: "https://github.com/Panchovix/nvidia-vbios-vix-editor"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 123
forks: 10
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T23:21:20Z"
lastCommitAt: "2026-10-21T17:31:44Z"
lastReleaseAt: "2026-10-16T20:49:11Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 28
maintainers: ["Panchovix"]
openGraphImageUrl: "https://opengraph.githubassets.com/8775e7c776ee4c0befdc6961b5c28d2b518374f11cd334c57e260e94bdd75701/Panchovix/nvidia-vbios-vix-editor"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/panchovix"]
discussionCount: 3
---

# NVIDIA VBIOS Vix Editor

Offline editor for NVIDIA Blackwell (GB20x) VBIOS images, for Linux and Windows, with a
GTK editor window and a JSON command line. It edits power limits, voltage ceilings, the minimum voltage
(VMIN), clock offset ranges, 12 V input current and output OCP limits, fan PWM frequency, fan channels,
per-channel fan speed limits, the stored fan curves and zero RPM (experimental). Ada (AD10x) images get power limits,
clock offset ranges, slot power, fans and, where they apply, voltage ceilings, VMIN, fixed REL/ALT voltages
and the XOC-style flat voltage limit (experimental).
Ampere (GA10x) images get power limits, power connector channels, clock offset ranges, slot power, fans
and, where it applies, VMIN (experimental). Turing (TU10x/TU11x) images get power limits, slot and
connector power and current limits, VMIN, fixed REL/ALT voltages, clock offset ranges and fans
(experimental; on one RTX 2080 Ti edited board and connector power limits loaded and the card reached about
458 W under load, nothing else is tested on a Turing card; see the
[Turing tester guide](https://github.com/Panchovix/nvidia-vbios-vix-editor/blob/main/docs/turing.md)).

Loading an edited…

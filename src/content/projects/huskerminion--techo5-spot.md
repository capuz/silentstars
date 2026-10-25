---
repo: "HuskerMinion/techo5-spot"
name: "techo5-spot"
description: "Linux firmware for the Echo Spot (1st gen): no Fire OS, no Alexa. A local Home Assistant voice satellite with a round touch face, camera, Bluetooth, phone calls and signed A/B updates."
readmeQualityOk: true
url: "https://github.com/HuskerMinion/techo5-spot"
language: "Python"
languages: ["Python", "PowerShell"]
languagePcts: [64, 21]
stars: 43
forks: 2
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-09-17T00:31:44Z"
lastCommitAt: "2026-10-25T21:59:24Z"
lastReleaseAt: "2026-09-20T18:22:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 39
maintainers: ["HuskerMinion"]
openGraphImageUrl: "https://opengraph.githubassets.com/92e16c55e80daf0622cf12647a852fc3359f8320bfde6e45f558825f1663003a/HuskerMinion/techo5-spot"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/huskerminion"]
---

# TECHO5 Spot

**TECHO5 for the Echo Spot**: the TECHO5 Linux image, brought to the Amazon Echo Spot 1st
generation (2017, codename `rook`, model VN94DQ / `AEORK`).

The goal is the same end state [TECHO5](https://github.com/HuskerMinion/techo5) reached on the
Echo Show 5 2nd gen and TECHO5 Dot reached on the Echo Dot 2. No Fire OS userspace: a small Alpine
root filesystem and one daemon that owns the microphones, the speaker, the round screen, wake word
and the Home Assistant connection (ESPHome native API), with nothing leaving the house.

The daemon is TECHO5's `echod`, which is built on **[EchoLocal](https://github.com/ygelfand/echolocal)**
by Yuri Gelfand (MIT): EchoLocal's Echo Dot 2 daemon, vendored and developed further, much of it
still EchoLocal's code. See [NOTICE](https://github.com/HuskerMinion/techo5-spot/blob/HEAD/NOTICE).

**Installing:** [Getting started](https://github.com/HuskerMinion/techo5/blob/main/docs/getting-started.md)
has every step from a stock Spot, in order: the Fire OS version, the amonet-rook unlock and LineageOS
(both linked), the installer, and Home Assistant. The installer is a Python 3 script that runs the same
on Windows, Linux and macOS and…

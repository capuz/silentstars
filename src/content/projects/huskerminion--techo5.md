---
repo: "HuskerMinion/techo5"
name: "techo5"
description: "Open firmware for the Echo Show 5, 1st and 2nd gen: Alpine Linux instead of Android, no Alexa. A local Home Assistant voice satellite with its own touch screen, on-device wake word, SSH and A/B over-the-air updates."
readmeQualityOk: true
url: "https://github.com/HuskerMinion/techo5"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["cronos", "echo-show", "esphome", "home-assistant", "mt8163", "voice-assistant", "alexa-alternative", "alpine-linux", "echo-show-5", "firmware"]
stars: 416
forks: 66
openIssues: 17
closedIssues: 133
watchers: 8
contributors: 30
recentReleases: 10
createdAt: "2026-09-14T23:30:01Z"
lastCommitAt: "2026-10-25T08:40:45Z"
lastReleaseAt: "2026-09-16T15:44:32Z"
status: "newborn"
tags: ["funded", "release_machine"]
healthScore: 94
undervaluedScore: 29
maintainers: ["HuskerMinion", "nuno407", "miraassist"]
openGraphImageUrl: "https://opengraph.githubassets.com/94a71699a840d5ca308fce0757459f0cad8ca1e049b01a0265bbd9ba588e735d/HuskerMinion/techo5"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/huskerminion"]
discussionCount: 6
---

---

> **New: the Echo Show 8 2nd gen (2021, `athena`) runs TECHO5 on a 64-bit mainline Linux kernel.**
> The story, the board and the UART pads: [TECHO5 ATHENA](https://github.com/HuskerMinion/techo5-athena).
> Install: [docs/install-athena.md](https://github.com/HuskerMinion/techo5/blob/HEAD/docs/install-athena.md).

**TECHO5** (Tech Echo 5) is open firmware for **Amazon's Echo Show 5 and Echo Show 8**, both
generations of each. It replaces Fire OS and Alexa with a small Alpine Linux image and one Go daemon,
turning the Show into a fast, private Home Assistant voice satellite with a touch screen of its own.
It started on the Show 5, which is where the name comes from.

**Every Echo that can be unlocked now runs it.** The bootloader exploit these devices are opened with,
[amonet](https://github.com/R0rt1z2/amonet), reaches five Amazon Echos, and saiyaku-athena unlocks a sixth. All six run the same daemon:

| Device | Model | Repository | Status |
|---|---|---|---|
| <img src="docs/images/badges/cronos.png" alt="" width="36" align="absmiddle"> **Echo Show 5, 2nd gen** (2021, `cronos`) | C76N8S | this one | In daily use |
| <img src="docs/images/badges/checkers.png" alt=""…

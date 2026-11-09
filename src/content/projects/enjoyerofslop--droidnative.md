---
repo: "enjoyerofslop/droidnative"
name: "droidnative"
description: "Nintendo Switch and Switch 2 games running natively on Android, replayed on Vulkan: nxnative with an Android port. Bring your own game."
readmeQualityOk: true
url: "https://github.com/enjoyerofslop/droidnative"
language: "Python"
languages: ["Python", "Objective-C", "C"]
languagePcts: [34, 28, 28]
topics: ["android", "native", "nintendo-switch", "switch2", "vulkan"]
stars: 40
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 200
recentReleases: 1
createdAt: "2026-11-08T16:39:07Z"
lastCommitAt: "2026-11-09T04:34:15Z"
lastReleaseAt: "2026-11-09T03:51:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["enjoyerofslop", "seedds"]
openGraphImageUrl: "https://opengraph.githubassets.com/6adba79ee839d6276ef7bd500bd8a3efe3bbcd86d51d4816b20632fe99c4b07b/enjoyerofslop/droidnative"
discussionCount: 0
---

# droidnative

**Nintendo Switch and Switch 2 games running natively on Android: not an emulator.** The game's own ARM64 code runs directly on the device's CPU, and its NVN
graphics are replayed on the GPU through Vulkan. Pokémon Brilliant Diamond plays at 60 fps on an Ayn Odin 2, Animal Crossing: New Horizons at 30.

- **Native, not emulated.** A Switch and an Android device both run ARM64 code: the game's code is rewritten only where the host needs it (system calls,
  thread registers), and a host answers the Switch's system calls and SDK services. There is no CPU emulation.
- **A game is an app of its own**, with its name, icon and saves, installable on any arm64 device with Vulkan, or every game in one launcher app.
- **Packed on your computer** from your own dump: NSP / XCI files, or a Switch 2 game's `.nup` or dump folder. [DroidPlay](https://github.com/enjoyerofslop/droidplay),
  a Mac app, does it with a click; the command line works on any computer.

droidnative is [seedds/nxnative](https://github.com/seedds/nxnative) (Switch games natively on the iPhone, the iPad and the Mac) with an Android port. The port began
as…

---
repo: "MCUdude/TinyCore"
name: "TinyCore"
description: "A light-weight Arduino hardware package for ATtiny25/45/85, ATtiny24/44/84, ATtiny441/841, ATtiny261/461/861, ATtiny87/167, ATtiny48/88, ATtiny2313/4313, ATtiny1634, ATtiny828, ATtiny43 and ATtiny26"
readmeQualityOk: true
url: "https://github.com/MCUdude/TinyCore"
language: "C++"
languages: ["C++", "C"]
languagePcts: [55, 39]
stars: 25
forks: 3
openIssues: 3
closedIssues: 20
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-05T09:11:16Z"
lastCommitAt: "2026-10-20T08:49:51Z"
lastReleaseAt: "2026-06-01T14:51:09Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 90
undervaluedScore: 43
maintainers: ["felias-fogg", "MCUdude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d909d2ebf4cc9b79b214034da0aaa2e8df18a223cf8882d3db2176e2e554c5c9/MCUdude/TinyCore"
---

# TinyCore

TinyCore brings full Arduino IDE support to the classic ATtiny microcontroller family. It pairs these capable little chips with the modern and lean [Urboot](https://github.com/stefanrueger/urboot) bootloader and a clean, well-documented experience.

Arduino IDE v1.8 and v2.x are both supported, as well as with [PlatformIO](#platformio)! Note, however, that with Arduino IDE v1.8, you do not get any debugging functionality. Additionally, the flash size check before starting the upload is too optimistic, maybe leading to strange error messages by the bootloader.

TinyCore is a fork of [ATTinyCore 2.0.0](https://github.com/SpenceKonde/ATTinyCore), with focus on a cleaner user experience, up-to-date tooling, and improved documentation.  
Key improvements include:

- **Cleaner Tools menu** - fewer options, as core functionality is automatically optimized away if not used
- **Urboot bootloader** - only 256 bytes, self-protecting, and far more reliable than Optiboot
- **Hardware debugging** via [PyAvrOCD](https://pyavrocd.io)
- **Revised and improved documentation** for every supported chip
- **Systematic hardware testing** - core functionality is [tested on real…

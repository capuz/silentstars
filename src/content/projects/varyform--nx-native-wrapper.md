---
repo: "varyform/nx-native-wrapper"
name: "nx-native-wrapper"
description: "NX Play: a Mac app to build, play, install and manage Switch games with nxnative, on the Mac and on iPhone/iPad"
readmeQualityOk: true
url: "https://github.com/varyform/nx-native-wrapper"
language: "Swift"
languages: ["Swift"]
languagePcts: [94]
topics: ["ios", "macos", "nintendo-switch", "nxnative", "swiftui", "xcodegen"]
stars: 253
forks: 30
openIssues: 1
closedIssues: 28
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-10-25T08:26:53Z"
lastCommitAt: "2026-11-21T11:33:14Z"
lastReleaseAt: "2026-10-30T15:41:49Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 32
maintainers: ["varyform", "saphid", "dracinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c6cf4dab13c4950a04676fbdbb24cad09cc0f52cbe00dd2f56d19bad7cc8ffe/varyform/nx-native-wrapper"
---

# NX Play

**NX Play** is a Mac app (and `nxplay`, the script behind it) that runs Nintendo Switch games natively on a Mac or an iPhone/iPad, through [nxnative](https://github.com/seedds/nxnative). It builds a game once, then starts it straight away the next time. This repository is `nx-native-wrapper`.

- A library of your games with their icons: extract them, play them on the Mac, rebuild them.
- Console Mode for the couch: full screen, driven by a game controller.
- Install a game on your iPhone or iPad, signed by Xcode or with your own certificate, or build an IPA to sideload. The game files can go to the device on their own, so reinstalls after a rebuild stay small.
- Copy saves between the Mac and a device, after seeing which one is newer, and back them up to your own private Git repository while you play.
- Pull nxnative's latest fixes before a play and rebuild when they change something, after asking whether to update now or play the current build. Or keep a build that works as it is.

> You need your own games (NSP, NSZ, XCI or XCZ files, or a NUP file or dump of a Switch 2 game) and the `prod.keys` of your own Switch. Nothing here downloads games or keys.

**Contents**

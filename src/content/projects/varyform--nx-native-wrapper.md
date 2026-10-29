---
repo: "varyform/nx-native-wrapper"
name: "nx-native-wrapper"
description: "NX Play: a Mac app to build, play, install and manage Switch games with nxnative, on the Mac and on iPhone/iPad"
readmeQualityOk: true
url: "https://github.com/varyform/nx-native-wrapper"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["ios", "macos", "nintendo-switch", "nxnative", "swiftui", "xcodegen"]
stars: 33
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-10-25T08:26:53Z"
lastCommitAt: "2026-10-29T10:20:33Z"
lastReleaseAt: "2026-10-28T10:09:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 46
maintainers: ["varyform"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfdfe7385b35bf405711c4e48ada75b820f052cb86733be7277971d9bc3df190/varyform/nx-native-wrapper"
---

# NX Play

**NX Play** is a Mac app (and `nxplay`, the script behind it) that runs Nintendo Switch games natively on a Mac or an iPhone/iPad, through [nxnative](https://github.com/seedds/nxnative). It builds a game once, then starts it straight away the next time. This repository is `nx-native-wrapper`.

- A library of your games with their icons: extract them, play them on the Mac, rebuild them.
- Console Mode for the couch: full screen, driven by a game controller.
- Install a game on your iPhone or iPad through Xcode, or build an IPA to sideload.
- Copy saves between the Mac and a device, after seeing which one is newer, and back them up to your own private Git repository while you play.
- Pull nxnative's latest fixes before each run and rebuild when they change something, or keep a build that works as it is.

> You need your own games (NSP, NSZ, XCI or XCZ files) and the `prod.keys` of your own Switch. Nothing here downloads games or keys.

## Why

nxnative can pack a game into a standalone Mac app (`--platform mac-app`), with its own settings window. That's an app for one game.

NX Play takes the other route: one app for all your games, everything portable and in one place.…

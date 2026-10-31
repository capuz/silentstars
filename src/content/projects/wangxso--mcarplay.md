---
repo: "wangxso/mcarplay"
name: "mcarplay"
description: "mCarPlay bridges Xiaomi CarWith to wireless CarPlay for seamless in-car connectivity."
readmeQualityOk: true
url: "https://github.com/wangxso/mcarplay"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 20
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-25T16:20:10Z"
lastCommitAt: "2026-10-31T07:45:21Z"
lastReleaseAt: "2026-10-30T13:24:15Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 47
maintainers: ["wangxso"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ebc15782688761a45e8eab0e5969e8dd301f68346387dcb0b8f323ee6f50a6b/wangxso/mcarplay"
---

# mcarplay

**[English](https://github.com/wangxso/mcarplay/blob/HEAD/README.md) | [简体中文](https://github.com/wangxso/mcarplay/blob/HEAD/README.zh-CN.md)**

[Changelog](https://github.com/wangxso/mcarplay/blob/HEAD/CHANGELOG.md) · [Releases](https://github.com/wangxso/mcarplay/releases)

Bridge Xiaomi CarWith to a wireless CarPlay receiver using an Android APK.
mcarplay receives native CarWith video and audio on the phone, sends them to the
receiver, and routes receiver touch events back to CarWith. The displayed
interface is CarWith, rather than the iOS CarPlay application interface.

## Status

Experimental, with working Xiaomi-to-DiPlay and Xiaomi-to-WinPlay 1.2.5 test setups and
one validated manual Xiaomi-to-Chery wireless path as of October 31, 2026.

| Capability | Validation |
| --- | --- |
| Native video | CarWith encodes at the receiver's aspect ratio (long side up to 1920); observed 1920 x 1080 and 1280 x 720 at 30 fps. Earlier DiPlay runs measured about 20 fps delivered |
| WinPlay 1.2.5 | Default settings: picture, touch and music reached the receiver; one session ran about 25 minutes after WinPlay released Bluetooth; reconnect worked after a manual disconnect and…

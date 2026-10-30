---
repo: "hackintosh-user/hack-touchid"
name: "hack-touchid"
description: "A Client made to add Touch-ID support for Hackintosh. "
readmeQualityOk: true
url: "https://github.com/hackintosh-user/hack-touchid"
homepage: "https://hackintosh-user.github.io/hack-touchid/"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["fingerprint", "fingerprint-scanner", "fingerprint-sensor", "hackintosh", "macos", "macos14", "macos15", "sequoia", "sonoma", "tahoe"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-08-05T19:52:15Z"
lastCommitAt: "2026-10-30T10:22:35Z"
lastReleaseAt: "2026-10-06T20:34:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["hackintosh-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0c594c9fdaea48000a081d3e64771a720b98ab41d633e9e56bd309c404c9354/hackintosh-user/hack-touchid"
discussionCount: 0
---

A libusb-based capture pipeline and NBIS matcher bringing Fingerprint sensors
  fingerprint authentication to macOS on unsupported (Hackintosh) hardware —
  lock screen unlock and System Settings authentication prompts, driven by
  a real fingerprint sensor instead of a password.
  
  * Current version: ```v1.1.0```
  * Current Menubar app version: ```v1.4.1```
  * If you want to see the changes that happen to the code, please head into the Change log with [This link](https://github.com/hackintosh-user/hack-touchid/blob/main/CHANGELOG.md)
  * Please refrence the Table that has the Supported sensors to make sure you can use this tool. [This link should take you there](https://github.com/hackintosh-user/hack-touchid/tree/main#supported-sensors)
  * [link to the GitHub page](https://hackintosh-user.github.io/hack-touchid/index.html)

---

## Overview

This project ports the USB capture protocol for supported fingerprint sensors to a standalone
macOS C code, and pairs it with NIST's NBIS fingerprint matching suite
(`mindtct` for minutiae extraction, `bozorth3` for matching) to provide
working fingerprint authentication on Hackintosh hardware that shipped
with this sensor but has no…

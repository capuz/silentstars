---
repo: "Sylonin/xposed-newx-patches"
name: "xposed-newx-patches"
description: "X-Posed account location badges and country filters for NewX (Compose X), as Morphe patches"
readmeQualityOk: true
url: "https://github.com/Sylonin/xposed-newx-patches"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [77, 22]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-10-27T05:58:43Z"
lastCommitAt: "2026-11-26T23:38:04Z"
lastReleaseAt: "2026-11-26T21:56:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 55
maintainers: ["Sylonin", "AetherMagee", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab7fd0a0829bddfdfe8442f8a7e7f7f01243ae8a1049986f04b7017f94694482/Sylonin/xposed-newx-patches"
---

# X-Posed Patches for NewX

[Morphe](https://morphe.software) patches that bring
[X-Posed](https://github.com/xaitax/x-account-location-device)'s account location badges and
country filters to the Compose-based X (Twitter) Android app ("NewX"). This is a port of
[AetherMagee/xposed-patches](https://github.com/AetherMagee/xposed-patches), which targets
the older X 12.19.1.

## Install

Add this repository as a patch source in Morphe Manager:
https://morphe.software/add-source?github=Sylonin/xposed-newx-patches

Then patch the NewX APKM from APKMirror, version 12.40.1-prod.01 or newer. The patch refuses
older versions. 12.40.1-prod.01 has been tested on its own and together with
[piko-newx](https://github.com/crimera/piko-newx) 3.74.0; newer versions have not. The patch
finds X's code by its structure, not by its obfuscated names, and stops with an error instead of
producing a broken app if something doesn't match.

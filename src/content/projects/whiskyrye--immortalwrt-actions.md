---
repo: "whiskyrye/ImmortalWrt-Actions"
name: "ImmortalWrt-Actions"
description: "Compile ImmortalWrt based on .config"
originalDescription: "根据.config编译ImmortalWrt "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/whiskyrye/ImmortalWrt-Actions"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 12
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2025-05-24T13:56:30Z"
lastCommitAt: "2026-11-12T11:40:44Z"
lastReleaseAt: "2026-11-12T09:48:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 73
undervaluedScore: 68
maintainers: ["whiskyrye"]
openGraphImageUrl: "https://opengraph.githubassets.com/f350567453e052b12ef60dc623dbcd61961f50e103b3f611fe1463a7875fb574/whiskyrye/ImmortalWrt-Actions"
---

# ImmortalWrt Build
## Usage

- Fork this repository
- Create a `.config` file locally
- Upload the `.config` file to the GitHub repository
- On the Actions page, select `ImmortalWrt Builder`
- Click `Run workflow` to start the build

## .config File Description
- KERNEL size: 256M  ROOTFS size: 1024M
- v23054.config is for x86-23.05.4; no longer in use
- v24106.config is for x86-24.10.6; no longer in use
- x86.config is the x86 firmware. For plugins, see the current .config configuration. v25.12.2 download: [2026.11.11-1735](https://github.com/whiskyrye/ImmortalWrt-Actions/releases/tag/2026.11.11-1735)
- m28k.config is the m28k firmware, with the same plugins as the .config configuration. v25.12.2 download: [2026.11.12-1748](https://github.com/whiskyrye/ImmortalWrt-Actions/releases/tag/2026.11.12-1748)
- r5s.config is the r5s firmware, with the same plugins as the .config configuration. v25.12.2 download: [2026.11.12-1014](https://github.com/whiskyrye/ImmortalWrt-Actions/releases/tag/2026.11.12-1014)

## Default Login Address
http://192.168.1.1 or http://immortalwrt.lan, username: root, no password

## Current .config Configuration
|Plugin|Function|
|:-|:-|…

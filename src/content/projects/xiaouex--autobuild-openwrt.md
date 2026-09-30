---
repo: "xiaouex/Autobuild-OpenWrt"
name: "Autobuild-OpenWrt"
description: "autobuild lean's lede/immrotalwrt/openwrt for rax3000m nand and X86 device"
originalDescription: "autobuild lean's lede/immrotalwrt/openwrt for rax3000m nand and X86 device"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaouex/Autobuild-OpenWrt"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2024-06-11T20:46:33Z"
lastCommitAt: "2026-09-30T09:57:00Z"
lastReleaseAt: "2026-09-05T11:46:02Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 76
undervaluedScore: 74
maintainers: ["xiaouex"]
openGraphImageUrl: "https://opengraph.githubassets.com/860a64a88e68e269b979b526899a39747f2c59ebfc7094bd1eb2a906f8a15a61/xiaouex/Autobuild-OpenWrt"
---

[Chinese](https://p3terx.com/archives/build-openwrt-with-github-actions.html)

# Actions-OpenWrt

A template for building OpenWrt with GitHub Actions

## My default config
The firmware released by this project, in addition to the components included by default in OpenWrt, also contains the following: ipv6-helper, luci-app-filetransfer, BORE CPU Scheduler, SmartDNS, OPENCLASH (with built-in mihomo smart alpha kernel), ~~DiskMan~~, TurboACC (supporting firewall4), BBR3 patch, taskplan (task scheduling), ~~my-script (a startup script for switching qdisc algorithm)~~, luci-app-temp-status (temperature), luci-theme-argon (theme), restart plugin, shutdown plugin.

~~The current rax3000m firmware uses source code from https://github.com/chasey-dev/immortalwrt-mt798x-rebase, uses closed-source drivers, and supports MTK hardware NAT and hardware acceleration.~~
Switched back to immortalwrt because for some reason closed-source drivers have game latency twice as high as open-source drivers, and this branch's source code doesn't support high power, 5G can only be set to 22dB, but immortalwrt can be set to 24dB.

~~**TurboACC only works with BBR algorithm enabled. Please do not enable…

---
repo: "Zakkaus/gentoo-install"
name: "gentoo-install"
description: "Interactive Gentoo installer"
readmeQualityOk: true
url: "https://github.com/Zakkaus/gentoo-install"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T12:42:34Z"
lastCommitAt: "2026-08-17T04:20:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["Zakkaus"]
openGraphImageUrl: "https://opengraph.githubassets.com/127081ff3f417319ac956b53f4e004913e2d01c0b4e63dc1f9f71430c8241ed3/Zakkaus/gentoo-install"
---

English | [正體中文](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.zh-TW.md) | [简体中文](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.ja.md) | [한국어](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.ko.md)

# gentoo-install

gentoo-install runs in a Linux live environment to install an amd64 Gentoo system. An interactive menu or a TOML configuration file specifies the installation. The interface is available in English, Traditional Chinese, Simplified Chinese, Japanese and Korean.

## Capabilities

The paths below are implemented and have automated unit or plan coverage unless the verification status identifies a narrower boundary.

**Storage.** The device graph covers GPT and MBR; ext2, ext3, ext4, btrfs subvolumes, xfs, f2fs and vfat; swap; and LUKS2, LVM and mdraid. Existing partition tables can be retained, with a separate keep, format or delete decision for each partition.

The system configuration can configure zram independently of the device graph and swap partitions.

**In-place conversion.** Setting `mode = "in-place"` in the `[disk]` table replaces the userland of…

---
repo: "Zakkaus/gentoo-install"
name: "gentoo-install"
description: "Interactive Gentoo installer"
readmeQualityOk: true
url: "https://github.com/Zakkaus/gentoo-install"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T12:42:34Z"
lastCommitAt: "2026-08-28T12:23:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["Zakkaus"]
openGraphImageUrl: "https://opengraph.githubassets.com/26d10615532221e9bebcf128c25d49ce75be391785c4ee0ae76208ad0851be5a/Zakkaus/gentoo-install"
---

English | [正體中文](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.zh-TW.md) | [简体中文](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.ja.md) | [한국어](https://github.com/Zakkaus/gentoo-install/blob/HEAD/README.ko.md)

# gentoo-install

gentoo-install runs in a Linux live environment to install an amd64 Gentoo system. An interactive menu or a TOML configuration file specifies the installation. The interface is available in English, Traditional Chinese, Simplified Chinese, Japanese and Korean.

## Capabilities at a glance

The implementation covers normal disk installation, storage and boot configuration, desktop and language profiles, and special modes.

- **Storage.** The device graph covers partition tables, filesystems, LUKS2, LVM, mdraid and ZFS.
- **Boot and system.** GRUB, systemd-boot and ZFSBootMenu configure UEFI or BIOS as their configurations allow.
- **Desktop and language.** GNOME, KDE Plasma, Xfce, CJK fonts and input methods are configuration choices.
- **Special modes.** Memory environments, in-place conversion, sparse images and `dd` have separate constraints.

[The…

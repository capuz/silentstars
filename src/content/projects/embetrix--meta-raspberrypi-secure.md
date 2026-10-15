---
repo: "embetrix/meta-raspberrypi-secure"
name: "meta-raspberrypi-secure"
description: "meta-raspberrypi add-on yocto layer for enhanced security/OTA update🔒"
readmeQualityOk: true
url: "https://github.com/embetrix/meta-raspberrypi-secure"
language: "BitBake"
languages: ["BitBake", "Shell"]
languagePcts: [58, 37]
topics: ["cm4", "cm5", "cybersecurity", "linux-kernel", "raspberry-pi", "secure-boot", "selinux", "yocto", "yocto-layer", "raspberry-pi-4b"]
stars: 72
forks: 13
openIssues: 0
closedIssues: 4
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T11:38:45Z"
lastCommitAt: "2026-10-15T08:31:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 27
maintainers: ["embetrix"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1179791399/e79d862e-c866-4f0f-8bd0-c23bc58a248a"
discussionCount: 1
---

# meta-raspberrypi-secure

A Yocto layer that provides a security-hardened baseline for Raspberry Pi images, extending [meta-raspberrypi](https://github.com/agherzan/meta-raspberrypi/tree/master) layer with secure boot, verified and encrypted storage, runtime integrity and a hardened kernel and userspace.

> **Disclaimer:** This layer is a starting point, not a finished secure product. You are still responsible for threat modeling your product, removing unused software and services, tailoring defaults (SELinux, firewall, USBGuard, SW Updates, keys management) to your use case, performing license compliance checks, monitoring and remediating CVEs for all included software and independently testing the results. Moreover the maintainers accept no liability for bricked devices from incorrect OTP fuse programming, lost or leaked signing keys or misconfiguration. Provided as is with no warranty and no certification implied (see [LICENSE](https://github.com/embetrix/meta-raspberrypi-secure/blob/HEAD/LICENSE)).

## Features

- Hardware root of trust with signed boot chain anchored in the SoC boot ROM
- Read-only encrypted/authenticated rootfs with state isolated to data partitions
-…

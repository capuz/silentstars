---
repo: "CESNET/ndk-sw"
name: "ndk-sw"
description: "Linux driver and SW tools for Network Development Kit (NDK)"
readmeQualityOk: true
url: "https://github.com/CESNET/ndk-sw"
homepage: "https://www.liberouter.org/ndk/"
language: "C"
languages: ["C"]
languagePcts: [85]
topics: ["driver", "ethernet", "fpga", "liberouter", "linux", "network-development-kit"]
stars: 10
forks: 7
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 20
recentReleases: 0
createdAt: "2021-11-10T06:21:48Z"
lastCommitAt: "2026-07-31T06:30:16Z"
lastReleaseAt: "2023-07-13T07:14:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 67
maintainers: ["martinspinler", "xmarus09", "pavelekm"]
openGraphImageUrl: "https://opengraph.githubassets.com/b090766d98e27151972ac44a2e4d48f877cb8b77a9155fd4dcfededc40ababd2/CESNET/ndk-sw"
---

# The NDK software framework

This repository contains software framework for the Network Development Kit (NDK). The NDK allows users to quickly and easily develop new network applications based on FPGA acceleration cards.
You can build the FPGA firmware for this card using the [NDK-APP-Minimal application](https://github.com/CESNET/ndk-app-minimal/). The NDK-APP-Minimal is a reference FPGA application based on the NDK.
The NDK software framework is used to manage and control FPGA cards with NDK firmware. It includes:
- Linux kernel driver
- libnfb userspace library
- nfb & ndp tools for basic usage

## Documentation

The [**NDK software documentation**](https://cesnet.github.io/ndk-sw) is automatically generated documentation based on the [Sphinx](https://www.sphinx-doc.org) (public GitHub Pages - built from main branch).

## Prebuilt RPM packages

The prebuilt RPM packages can be obtained via [Copr](https://copr.fedorainfracloud.org/coprs/g/CESNET/nfb-framework/):

`sudo dnf copr enable @CESNET/nfb-framework`

`sudo dnf install nfb-framework`

## Install guide

We recommend using the Oracle Linux 8/9 operating system with Red Hat compatible kernel (RHCK), which we use for…

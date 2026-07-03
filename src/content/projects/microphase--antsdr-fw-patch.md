---
repo: "MicroPhase/antsdr-fw-patch"
name: "antsdr-fw-patch"
description: "Repository of antsdr firmware make"
url: "https://github.com/MicroPhase/antsdr-fw-patch"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 101
forks: 45
openIssues: 16
closedIssues: 16
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2022-11-21T01:36:50Z"
lastCommitAt: "2026-07-03T12:39:28Z"
lastReleaseAt: "2026-01-13T12:24:25Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 24
maintainers: ["3570534440"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cd85245a72007182e79897f189635bb1342dd028ec8f9e0fd5cccfd4c5d09d0/MicroPhase/antsdr-fw-patch"
---

# antsdr-fw-patch
This Repository is used to make Microphase software radio device firmware. 

## Build Instructions

The Firmware is built with the [Xilinx Vivado 2023.2](https://account.amd.com/en/forms/downloads/xef.html?filename=FPGAs_AdaptiveSoCs_Unified_2023.2_1013_2256.tar.gz)(v0.39). You need to install the correct Vivado version in you Linux PC, and then,you can follow the instructions below to generate the firmware for [ANTSDR E310](https://item.taobao.com/item.htm?spm=a230r.1.14.16.34e21142YIlxqx&id=647986963313&ns=1&abbucket=2#detail) or [ANTSDR E200](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-17060615344.9.4f201b9f6YDKU2&id=691394502321) or [ANTSDR E310V2](https://item.taobao.com/item.htm?spm=a21xtw.29178619.product_shelf.8.3b923f77eJKa3u&id=708976727818&) and then. If you want to build other versions, check out the history repository.

### Install build requirements

```sh
sudo apt-get install git build-essential fakeroot libncurses5-dev libssl-dev ccache 
sudo apt-get install dfu-util u-boot-tools device-tree-compiler mtools
sudo apt-get install bc python cpio zip unzip rsync file wget 
sudo apt-get install libtinfo5 device-tree-compiler bison flex…

---
repo: "PeakRacing/nes"
name: "nes"
description: "A  NES emulator in C"
readmeQualityOk: true
url: "https://github.com/PeakRacing/nes"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 61
forks: 13
openIssues: 2
closedIssues: 3
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2023-02-14T08:13:37Z"
lastCommitAt: "2026-09-27T09:26:34Z"
lastReleaseAt: "2026-04-06T06:19:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 40
maintainers: ["PeakRacing"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1de6ca19ab2e911c4211d1ac00477f34c7c6c0d75406e8488cbfa0f4774b00f/PeakRacing/nes"
discussionCount: 0
---

**English** | [中文](https://github.com/PeakRacing/nes/blob/HEAD/README_zh.md) 

# nes simulator 

[](https://github.com/PeakRacing/nes/releases/latest)

github: [PeakRacing/nes: A NES emulator in C (github.com)](https://github.com/PeakRacing/nes) (recommend)

gitee: [nes: c语言实现的nes模拟器 (gitee.com)](https://gitee.com/PeakRacing/nes) (updates may not be timely due to synchronization issues)

## Introduction
​	The nes simulator implemented in C , requires `C11` or above

​	**attention：This repository is only for the nes simulator and does not provide the game ！！！**

**Platform support:**

- [x] Windows

- [x] Linux

- [x] MacOS

**Simulator support：**

- [x] CPU (All instructions)

- [x] PPU (Simulating at pixel-level precision)

- [x] APU (Fixed-point calculation)

**mapper  support：**

​	0, 1, 2, 3, 4, 7, 94, 177, 180

## Software Architecture
​	The example is based on SDL for image and sound output, without special dependencies, and you can port to any hardware by yourself

## Compile Tutorial

​	clone repository，install [xmake](https://github.com/xmake-io/xmake)，execute `xmake` directly to compile

### Compile Preparation

#### Windows:	

​	install MSVC([Visual…

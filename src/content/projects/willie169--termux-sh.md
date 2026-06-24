---
repo: "Willie169/termux-sh"
name: "termux-sh"
description: "Termux setup and utility scripts for development tools, proot, box86, and more."
url: "https://github.com/Willie169/termux-sh"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 34
forks: 6
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-11-09T05:23:45Z"
lastCommitAt: "2026-06-24T00:24:54Z"
lastReleaseAt: "2026-02-24T03:47:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 59
maintainers: ["Willie169"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b976ba8cf50460ab7bd233ab9be47a0dcc635a8134f678ca358ba6cc8099b1c/Willie169/termux-sh"
---

# termux-sh

This repository contains Shell scripts for [Termux](https://github.com/termux/termux-app), a terminal emulator for Android. These scripts include setup automation, shortcuts, installations and configurations of development tools and emulation environments such as proot, proot-distro, QEMU system emulation, and box64, and more.

## Table of Contents

* [Termux](#termux)
* [Termux Setup](#termux-setup)
  + [Prerequisites](#prerequisites)
  + [Execution](#execution)
  + [Features](#features)
  + [Invoked VM Setup Scripts](#invoked-vm-setup-scripts)
* [Shortcuts](#shortcuts)
  + [Boot VM Scripts](#boot-vm-scripts)
  + [Utility Scripts](#utility-scripts)
* [Additional Scripts](#additional-scripts)
* [My Related Repositories](#my-related-repositories)
* [TODO](#todo)
* [License](#license)
* [References](#references)

## Termux

Termux (`com.termux`) can be installed from [F-Droid](https://f-droid.org/packages/com.termux).

**WARNING**: If you installed termux from Google Play or a very old version, then you will receive package command errors. Google Play builds are deprecated and no longer supported. It is highly recommended that you update to termux-app v0.118.0 or higher…

---
repo: "Kirby64Ret/kirby64"
name: "kirby64"
description: "A work-in-progress decompilation of Kirby 64: The Crystal Shards, brought to you."
readmeQualityOk: true
url: "https://github.com/Kirby64Ret/kirby64"
homepage: "https://discord.gg/Gh6fBCr"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [79]
topics: ["decomp"]
stars: 228
forks: 22
openIssues: 1
closedIssues: 1
watchers: 19
contributors: 11
recentReleases: 0
createdAt: "2020-05-20T22:03:14Z"
lastCommitAt: "2026-08-20T04:08:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 82
undervaluedScore: 38
maintainers: ["farisawan2000", "farisawan-2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ea2edf6f4886b75a68e0eba057210895168d51f4ff012c646d07f6d84525d96/Kirby64Ret/kirby64"
---

# Kirby 64: The Crystal Shards

This repository contains a work-in-progress decompilation effort for Kirby 64.

### **This repository does not contain game assets. The original game is required to build this project.**

## Installation
 - First, get Linux, or [Windows Subsystem for Linux](https://aka.ms/wslinstall) if you use Windows
 - Next, grab dependencies by running `sudo apt update && sudo apt install python3 git gcc-mips-linux-gnu`
 - Grab the qemu-irix deb from [here](https://github.com/n64decomp/qemu-irix/releases) and install it with `sudo dpkg -i path/to/qemu(press tab here to autocomplete the name)` (Use `alien` on Fedora or `debtap` on Arch to convert)
 - Next, clone the repo by running `git clone https://github.com/Kirby64Ret/kirby64 --recursive`
 - Get `uv` (the Python Everything App) with `python3 -m pip install uv`
   - Or use the relevant instructions for your distribution/package manager at the [installation page](https://docs.astral.sh/uv/getting-started/installation/#pypi). **Running the standalone installer is not recommended.**
 - Grab the rest of the dependencies for your distro by using [this wiki…

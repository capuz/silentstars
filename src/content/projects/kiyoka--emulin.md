---
repo: "kiyoka/Emulin"
name: "Emulin"
description: "Emulin (java based EMUlation technology for Linux IA-32 / x86-64 Native application)"
readmeQualityOk: true
url: "https://github.com/kiyoka/Emulin"
language: "Java"
languages: ["Java"]
languagePcts: [79]
stars: 5
forks: 0
openIssues: 14
closedIssues: 385
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-04-25T13:16:54Z"
lastCommitAt: "2026-09-05T07:48:08Z"
lastReleaseAt: "2026-08-25T11:15:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 63
maintainers: ["kiyoka"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e334e4f3d81314b46e329f40b52be29855e3c2a7ecc1711fcaf83b84c632944/kiyoka/Emulin"
---

# Emulin

**English** | [日本語](https://github.com/kiyoka/Emulin/blob/HEAD/README.ja.md)

**A 32/64-bit Linux ELF emulator that runs on Java**

GNU General Public License v2 (see `COPYING` for details)

---

## Overview

Emulin is an emulator that runs Linux x86 (32-bit) / x86-64 (64-bit) ELF
binaries on Java. Because it is pure Java, you can run Linux binaries on
Windows / macOS.

It can run real Linux binaries (git / curl / openssl / Python 3.12 / vim 9.1 /
emacs-nox / GNU coreutils, etc.).

It also has a **native execution backend using Windows Hypervisor Platform
(WHP) on Windows / KVM on Linux**: where available, the guest runs on a real
vCPU for a large speedup (it falls back to pure-Java execution automatically
when unavailable).

## Get started

Download a release zip from [Releases](https://github.com/kiyoka/Emulin/releases)
(or build one with `dist/build-release.sh`) and unzip it anywhere. A JRE is
bundled, so **you don't need to install Java**.

> As of 0.9.0, prebuilt release zips are published **for Windows only**
> (`debian-emulin-<version>-windows-x64.zip`). On Linux / macOS, build a
> bundle locally with `PLATFORMS="linux-x64" dist/build-release.sh` etc.

## Features…

---
repo: "yoro1836/SamTimer"
name: "SamTimer"
description: "One-tap Android root for Samsung Galaxy devices, built around the CVE-2026-98260 timer exploit."
readmeQualityOk: true
url: "https://github.com/yoro1836/SamTimer"
language: "C"
languages: ["C", "Kotlin"]
languagePcts: [77, 23]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-01T10:00:01Z"
lastCommitAt: "2026-11-07T09:29:43Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 26
maintainers: ["yoro1836"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e2f606650ab1a97feeeea525a165ddf1330840739e8ef61c84ff826254183c/yoro1836/SamTimer"
---

# SamTimer

One-tap Android root for Samsung Galaxy devices, built around the
**CVE-2026-98260** timer exploit (posix-cpu-timers UAF) and a
**KernelSU-Next** late-load module with Samsung KDP/RKP/DEFEX compatibility.

> Based on the **CVE-2026-98260-aurora** repo — its timer LPE port
> (real-cred zero-write / fake-cred ksud late-load chains) is what
> `app/src/main/cpp/timer.c` evolved from.

> [!WARNING]
> For devices you own or are explicitly authorized to test. The exploit is a
> probabilistic kernel UAF — a failed run can leave the system unstable until
> the next reboot. Rebooting always restores the phone to a clean, unrooted
> state.

## Overview

| | |
| --- | --- |
| Exploit | CVE-2026-98260 (timer.c payload, built by Gradle) |
| Root module | KernelSU-Next 3.4.2 (`ksud-next-generic-kdp`, android14-6.1 no-patch-text) |
| Execution context | Shizuku shell (uid 2000) |
| su authorization | KernelSU-Next manager (`com.rifsxd.ksunext`), domain `u:r:ksu:s0` |
| Root lifetime | Per-boot (ephemeral — cleared on reboot) |

Tested on **SM-S921N** (e1s, Exynos 2400), kernel
`6.1.162-android14-11`, OneUI 9.

## Features

- Material 3 Compose UI (English / Korean, follows the system…

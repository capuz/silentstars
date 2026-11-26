---
repo: "firejackson1/jarvis2-recovery"
name: "jarvis2-recovery"
description: "Recovery tooling for jarvis2"
readmeQualityOk: true
url: "https://github.com/firejackson1/jarvis2-recovery"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [78, 22]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-17T01:05:58Z"
lastCommitAt: "2026-11-26T15:24:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 14
maintainers: ["firejackson1"]
openGraphImageUrl: "https://opengraph.githubassets.com/23971df6b66a73d5a8efc2ac84f8f343ff05f6be877ad8da498bad18325f3c86/firejackson1/jarvis2-recovery"
---

# jarvis2-recovery

Root-adb recovery for the **onn 4K Pro Streaming Device** (codename `jarvis2`,
Amlogic S905X5M, Android 14).

This project patches the stock recovery to provide a root ADB shell with
`busybox` and `magiskboot`. Recovery ADB currently accepts USB hosts without
authorization. Anyone with USB access while recovery is running can use that
root shell.

By default, sideload uses the manufacturer's signing certificates. The optional
sideload setup adds a certificate for packages you sign yourself.

## Installation guide

Follow the [Linux and Windows recovery runbook](https://github.com/firejackson1/jarvis2-recovery/blob/HEAD/docs/recovery-guide.md) for USB setup, a build-only checkpoint, flashing, and restoring stock recovery.

## Requirements

- Bootloader already unlocked (`ro.boot.verifiedbootstate` = `orange`)
- Rooted with [Magisk](https://github.com/topjohnwu/Magisk); the scripts use
  the `magiskboot`, `magiskpolicy` and `busybox` that Magisk installs in
  `/data/adb/magisk`
- `adb` on your computer, device booted into normal Android with USB debugging on

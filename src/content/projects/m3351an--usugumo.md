---
repo: "M3351AN/Usugumo"
name: "Usugumo"
description: "A Windows kernel-mode driver that proxies RPM/WPM/mouse_event/keybd_event .etc "
readmeQualityOk: true
url: "https://github.com/M3351AN/Usugumo"
language: "C"
languages: ["C", "C++"]
languagePcts: [44, 43]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-08T16:37:35Z"
lastCommitAt: "2026-08-17T04:18:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 59
maintainers: ["M3351AN"]
openGraphImageUrl: "https://opengraph.githubassets.com/28fda3548604475ac5b25c9c50934b9d35128d7a4d3eb8c274769959cd3d1d97/M3351AN/Usugumo"
---

# Usugumo

A Windows kernel-mode driver that proxies RPM/WPM/mouse_event/keybd_event .etc operations, handling user-mode process requests via DIRECT_IO IRP

> [!WARNING]
> This project IS NOT designed to combat AC/AV/EDR or sth like that.
> 
> And no matter what purpose you use it for, I DO NOT guarantee anything about it and assume ALL RISKS at your own risk

---

## Features

- Handling user-mode process requests via DIRECT_IO IRP
- Kernel-mode RPM/WPM
- Kernel-mode fetch module info(base, size)
- Kernel-mode get PID via name
- Kernel-mode mouse input
- Kernel-mode keyboard input
- Kernel-mode anti capture

## KnownIssues

- Currently only works on x64 windows (other arch, no quiero)
- Current implementation does not take into account CR3 encryption, kernel-mode memory protection, etc., and is only used as a PoC
- This is just a PoC, which is why you may find my approach relatively elegant in some places, while overly ghetto in others
- For the purpose of anti-paste, I unnecessarily rewrote many functions using MASM. However, doing so should not affect the actual functionality.

## Usage

See [Examples](https://github.com/M3351AN/Usugumo/blob/HEAD/Examples)

There‘s also an…

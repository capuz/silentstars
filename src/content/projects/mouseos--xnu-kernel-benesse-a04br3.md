---
repo: "mouseos/xnu_kernel_benesse_a04br3"
name: "xnu_kernel_benesse_a04br3"
description: "WIP / 作業中: XNU kernel for TAB-A04-BR3 (MT8167). Experimental; watchdog boot loop, OS boot incomplete."
readmeQualityOk: true
url: "https://github.com/mouseos/xnu_kernel_benesse_a04br3"
language: "C"
languages: ["C"]
languagePcts: [81]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-19T09:16:14Z"
lastCommitAt: "2026-10-21T20:00:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 48
maintainers: ["mouseos"]
openGraphImageUrl: "https://opengraph.githubassets.com/a86a63a687e7556b4126c8eef4a959b141777769b5856ada36cb771695d2fdd4/mouseos/xnu_kernel_benesse_a04br3"
---

> **Work in progress / 作業中:** Experimental XNU port for Benesse TAB-A04-BR3 (MT8167). XNU entry has been observed, but the device currently watchdog-reboots; a working OS is not available.

What is XNU?
===========

XNU kernel is part of the Darwin operating system for use in macOS and iOS operating systems. XNU is an acronym for X is Not Unix.
XNU is a hybrid kernel combining the Mach kernel developed at Carnegie Mellon University with components from FreeBSD and a C++ API for writing drivers called IOKit.
XNU runs on x86_64 for both single processor and multi-processor configurations.

XNU Source Tree
===============

  * `config` - configurations for exported apis for supported architecture and platform
  * `SETUP` - Basic set of tools used for configuring the kernel, versioning and kextsymbol management.
  * `EXTERNAL_HEADERS` - Headers sourced from other projects to avoid dependency cycles when building. These headers should be regularly synced when source is updated.
  * `libkern` - C++ IOKit library code for handling of drivers and kexts.
  * `libsa` -  kernel bootstrap code for startup
  * `libsyscall` - syscall library interface for userspace programs
  * `libkdd` -…

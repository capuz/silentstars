---
repo: "jamescherti/jc-gentoo-portage"
name: "jc-gentoo-portage"
description: "jc-gentoo-portage - Performance-oriented Gentoo Portage /etc/portage desktop configuration"
url: "https://github.com/jamescherti/jc-gentoo-portage"
homepage: "https://github.com/jamescherti/jc-gentoo-portage"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gentoo", "gentoo-config", "gentoo-configuration", "gentoo-portage"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-14T16:12:57Z"
lastCommitAt: "2026-07-04T19:21:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 72
maintainers: ["jamescherti"]
openGraphImageUrl: "https://opengraph.githubassets.com/6505a75d1c0fb7a4e99491936cdfb94ef78fc38f2ab6bb9c8dcfe86217c4e980/jamescherti/jc-gentoo-portage"
fundingLinks: ["GITHUB:https://github.com/jamescherti"]
---

# jc-gentoo-portage - An opinionated, performance-oriented Gentoo Portage /etc/portage configuration

The [jc-gentoo-portage](https://github.com/jamescherti/jc-gentoo-portage) repository houses an opinionated, performance-oriented Gentoo Portage (`/etc/portage`) configuration.

This repository can be used as an inspiration to build a lean and fast Gentoo operating system.

- Core system utilities are heavily optimized. Applications are compiled using `pgo` (Profile-Guided Optimization) and `lto` (Link-Time Optimization). Global flags such as `xs`, `asm`, `orc`, `jit`, `threads`, `kms`, and `native-extensions` ensure applications use hand-optimized assembly routines and multi-core parallelism. This portage uses `jemalloc` to reduce memory fragmentation. Furthermore, specific linker flags (`-Wl,--as-needed`, `-Wl,-z,pack-relative-relocs`) shrink binaries, and `-fno-semantic-interposition` is used to accelerate the Python interpreter.
- Network chatter is bounded. The configuration disables upstream telemetry, background analytics reporting, geolocation (`-geoclue`), cloud provider integrations, and zero-configuration local service scanning like Avahi. It also prevents NetworkManager…

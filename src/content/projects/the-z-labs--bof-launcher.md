---
repo: "The-Z-Labs/bof-launcher"
name: "bof-launcher"
description: "[ BOF-LAUNCHER ] ->  an API for loading, executing and in-memory masking BOFs on Windows and Linux for use in C/Zig/Go/Rust agents/implants. [ Z-BEAC0N ] ->   a custom-written stage-1 (aka pre-C2) solution engineered with a small footprint, stealth and modularity in mind."
readmeQualityOk: true
url: "https://github.com/The-Z-Labs/bof-launcher"
language: "Zig"
languages: ["Zig"]
languagePcts: [82]
topics: ["bof", "beacon", "beaconobjectfile", "post-exploitation", "cobalt-strike", "in-memory", "cybersecurity", "security-tools", "adversarial-attacks", "red-team"]
stars: 346
forks: 29
openIssues: 11
closedIssues: 16
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2023-03-31T09:22:42Z"
lastCommitAt: "2026-10-08T10:52:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 34
maintainers: ["mzet-", "michal-z", "Sizeable-Bingus"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c1a39a247fd9be4d2e1ef5d7f8eac8a28f1ad1e4e7e2b8e4d05b731557fd11/The-Z-Labs/bof-launcher"
---

# Introduction

[Cobalt Strike 4.1](https://www.cobaltstrike.com/blog/cobalt-strike-4-1-the-mark-of-injection/) released on 25 June 2020, introduced a novel (for that time) capability of running so called [Beacon Object Files](https://hstechdocs.helpsystems.com/manuals/cobaltstrike/current/userguide/content/topics/beacon-object-files_main.htm) - *small post-ex capabilities that execute in [Beacon](https://www.cobaltstrike.com/), parse arguments, call a few Win32 APIs, report output, and exit*. Since that time BOFs became very popular and the demand to launch/execute them in other environments than [Cobalt Strike's Beacon](https://www.cobaltstrike.com/) has emerged.

We at [Z-Labs](https://z-labs.eu) saw a big potential in BOFs and decided to extend its capabilities, versatility and usefulness even further. That's how the following projects came to live.

The repository provides:

1. [bof-launcher](#bof-launcher-library) - programming library for BOFs in-memory management (loading, keeping track of loaded BOFs, execution, masking).
2. [z-beac0n](#z-beac0n) - a custom-written stage-1 (aka pre-C2) solution featuring bof-launcher. Engineered with a small footprint, stealth and…

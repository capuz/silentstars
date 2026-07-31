---
repo: "AlexKnauth/silksong-autosplit-wasm"
name: "silksong-autosplit-wasm"
description: "An auto splitter for Hollow Knight: Silksong"
readmeQualityOk: true
url: "https://github.com/AlexKnauth/silksong-autosplit-wasm"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 19
forks: 13
openIssues: 23
closedIssues: 26
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2025-09-10T06:02:13Z"
lastCommitAt: "2026-07-31T06:29:57Z"
lastReleaseAt: "2025-09-20T22:41:18Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 85
undervaluedScore: 41
maintainers: ["AlexKnauth", "sfinae-fgsr"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f9bb65c85f6f21d5566144f29fe1816197bbb45c0adffc4495acd252a4453ff/AlexKnauth/silksong-autosplit-wasm"
---

# silksong-autosplit-wasm

An auto splitter for Hollow Knight: Silksong.

## Installation

### LiveSplit (Windows)

Get [LiveSplit](https://livesplit.org/downloads/), 1.8.34 or later.

Right-click for the context menu:
- Open Splits, From File... : Select your `.lss` splits file. Go to [HKSplitMaker](https://hksplitmaker.com/?game=silksong) to generate and download `.lss` splits files.
- Edit Splits... : Activate the autosplitter.
- Compare Against: Game Time.

See also:
- [Silksong-Resources LiveSplit Setup Guide](https://github.com/hk-speedrunning/Silksong-Resources/blob/main/setup.md#livesplit)

### LiveSplit One Druid (Windows, Linux, Mac)

Go to the [LiveSplit One Druid Latest Release](https://github.com/AlexKnauth/livesplit-one-druid/releases/latest) page,
and under the `Assets` section, download the one for your architecture and operating system.

When you run LiveSplitOne, it needs to have permission to read memory of other processes.
- Windows: no additional steps required.
- Linux: set the capabilities to include `CAP_SYS_PTRACE`, with a command like `sudo setcap CAP_SYS_PTRACE=+eip LiveSplitOne` to run once after downloading LiveSplitOne.
- Mac: you have to run it under…

---
repo: "KindleTweaks/jobman"
name: "jobman"
description: "A Simple Kindle Jailbreak Manager "
readmeQualityOk: true
url: "https://github.com/KindleTweaks/jobman"
language: "Slint"
languages: ["Slint", "Rust"]
languagePcts: [44, 43]
stars: 34
forks: 3
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-09-02T21:45:34Z"
lastCommitAt: "2026-11-02T15:17:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["penguins184", "sparklerfish"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76d1424a5459b4384099b1ae66d4e179481046eea71c64dae3b618f41878066/KindleTweaks/jobman"
---

# Jobman

> [!NOTE]
> A Simple Kindle Jailbreak Manager, that Performs Certain Jobs! :) WIP

*Like [my](https://penguins184.xyz/) work? Consider donating or just starring my repo! :)*

P.S The bee is called Jay Bee! - JB - get it? (thanks to Mergen for this pun!)

## Installation 

Jobman is hosted on the official KindleModding KPM [repository](https://repo.kindlemodding.org/).

To install, run the following in the search bar (one at a time):

```
;kpm update
;kpm install jobman
```

## Features

- Update blocking/unblocking
- Battery health estimates
- Environment updates
- USB SSH 
- Wi-Fi SSH
- Recovery mode
- Log generation
- Our mascot, Jay Bee! 

## Tested devices (default, & recovery mode)

- 5.19.2 KT5
- 5.20.1, 5.19.2 KT6
- 5.16.21, 5.18.1.1.1 PW4
- 5.20.1, 5.19.2 PW6
- 5.17.1.0.3 PW5
- 5.20.1 KS1
- 5.20.1 CS
- 5.18.2.1.1 KOA3

## Building

Great thanks to [slint-kindle-backend](https://github.com/sverrejb/slint-kindle-backend).

### Prerequisites

- [koxtoolchain & Kindle SDK](https://kindlemodding.org/kindle-dev/gtk-tutorial/prerequisites.html)
- cargo-zigbuild
    - `rustup target add armv7-unknown-linux-musleabihf`
    - `cargo install cargo-zigbuild`
    - `sudo…

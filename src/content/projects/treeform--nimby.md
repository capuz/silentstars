---
repo: "treeform/nimby"
name: "nimby"
description: "Nimby is an unofficial package manager and installer for the Nim programming language."
readmeQualityOk: true
url: "https://github.com/treeform/nimby"
language: "Nim"
languages: ["Nim"]
languagePcts: [100]
stars: 44
forks: 6
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2019-06-01T17:05:04Z"
lastCommitAt: "2026-11-11T19:49:15Z"
lastReleaseAt: "2025-11-18T16:49:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 55
maintainers: ["treeform", "RowDaBoat"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb673f9c0869a95347f6622db007a79a6ba7f0b5152c980489bacc4525509c0/treeform/nimby"
---

# Nimby

`nimble install nimby`

[API reference](https://treeform.github.io/nimby)

Nimby is the fastest and simplest way to install Nim packages.
It keeps things honest, transparent, and lightning fast.

## Quick Start

```sh skip
curl -L -o nimby https://github.com/treeform/nimby/releases/download/0.2.4/nimby-Linux-X64
chmod +x nimby
./nimby use 2.4.0
./nimby create
./nimby install libraryA libraryB libraryC
./nimby lock library > library/nimby.lock
./nimby sync library/nimby.lock
```

## Why Nimby exists

When I added Nim to our company CI, our builds suddenly became very slow. Nimble installs took almost two minutes for Fidget2. That felt wrong, so I started digging.

I tried replacing Nimble with a few simple shell scripts that just cloned the repos with git. It built fine, and was way, way faster! So then I wrote Nimby as a tool to clone everything in parallel:

* Nimble: 2 minutes
* Nimby: 3 seconds

At its core, Nimby runs `git clone` and updates `nim.cfg` in the workspace folder.

After that, Nimby grew from a few basic ideas:

* Have a single workspace folder.
* Download Nim packages using git.
* Do not resolve dependencies.
* Always grab `#HEAD`.
* Do everything in…

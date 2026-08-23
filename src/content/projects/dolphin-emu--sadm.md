---
repo: "dolphin-emu/sadm"
name: "sadm"
description: "Scripts and configurations for the Dolphin Emulator infrastructure"
readmeQualityOk: true
url: "https://github.com/dolphin-emu/sadm"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [59, 36]
stars: 50
forks: 43
openIssues: 2
closedIssues: 21
watchers: 12
contributors: 34
recentReleases: 0
createdAt: "2013-07-19T22:07:05Z"
lastCommitAt: "2026-08-22T21:29:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 51
maintainers: ["OatmealDome", "JoshuaVandaele", "JosJuice"]
openGraphImageUrl: "https://opengraph.githubassets.com/86e0a55174aa2b5f9dd2b55a6780f7ed2800bbe5f1f88be8444333602ada6cd2/dolphin-emu/sadm"
---

# Dolphin infrastructure configuration

This repository contains the configuration for Dolphin's various infrastructure
services -- some user facing, some developer facing.

Almost everything is configured using the Nix / NixOS ecosystem (exception:
build workers that have to run on specific Linux distribution environments).
The `roles` directory contains configuration for each individual service
running on Dolphin's infrastructure. The `machines` directory contains
configuration specific to each machine that Dolphin currently operates and what
roles map to it.

## How to build

```shell
$ colmena build
```

## How to deploy

```shell
$ colmena apply
```

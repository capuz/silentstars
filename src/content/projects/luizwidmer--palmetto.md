---
repo: "luizwidmer/palmetto"
name: "palmetto"
description: "Palmetto: a clean-room runtime that runs an Xbox Series GTA VI build natively on Windows from your own copy. Continuation of ItsNotRexed/Leonida (upstream now private)."
readmeQualityOk: true
url: "https://github.com/luizwidmer/palmetto"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [68, 28]
stars: 60
forks: 35
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 584
recentReleases: 0
createdAt: "2026-11-23T22:56:30Z"
lastCommitAt: "2026-11-24T01:54:40Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 36
maintainers: ["ItsNotRexed", "luizwidmer", "sanchaton"]
openGraphImageUrl: "https://opengraph.githubassets.com/de5b0085c0c0406611fc18b40c9746930d7cd6190046712fac8e1df64dd2247d/luizwidmer/palmetto"
---

# Palmetto

**A clean-room runtime that runs an Xbox Series GTA VI build natively on Windows, built on your own PC from your own copy of the game.**

Palmetto is the local continuation of **[ItsNotRexed/Leonida](https://github.com/ItsNotRexed/Leonida)**. That project's
upstream repository went private, so this fork carries the work forward in the open: the same runtime, the same
clean-room approach, plus the boot fixes measured on this machine.

> **Important**
>
> This repository contains **no game, no keys and no executable**, and it does not explain how to obtain them. You
> need your own copy, with its files already readable on disk. Nothing here decrypts or works around any protection.
> Everything a build creates — translated shaders, extracted assets, the runtime folder, your saves — comes from your
> game and stays on your PC. Never share those files.

## Status

The runtime maps the title's PE image, resolves its imports through shims, reimplements the console's D3D12 layer on
Vulkan, and translates the console's shader corpus to SPIR-V. All of that works. The boot is not yet a frame.

---
repo: "dxcently/dxflake"
name: "dxflake"
description: "my private nixos configurations, always will be a WIP"
readmeQualityOk: true
url: "https://github.com/dxcently/dxflake"
language: "Nix"
languages: ["Nix"]
languagePcts: [89]
stars: 29
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-03-05T07:33:41Z"
lastCommitAt: "2026-08-21T04:09:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["dxcently"]
openGraphImageUrl: "https://opengraph.githubassets.com/71d9b79b6899ffe37118d78923201323165332b562141da796fb98bb8299ff06/dxcently/dxflake"
---

<h2 align="center">dxflake</h2>

</p>

---

## Architecture overview

A composable, scalable, and natural architecture

> _Nyaa._ A snowflake does not _decide_ to become a snowflake ❄︎ no more than I decided to become a cat! (I did not. I am Chiyo-chan's father.) It begins at one frozen point — the **nucleus** — and from there it grows arms it never planned. This flake is the same. Do not be afraid. …Won't you stay for dinner? There will be red things. ฅ^•ﻌ•^ฅ

Modules split by *scope*, not by host — a floor everyone gets, opt-in features, and roles that bundle them. `flake.nix` finds every module by itself; a host just *flips the flags* it wants — no import lists, no `if hostname ==` ladders.

```
dxflake/
├── flake.nix                 # the registry. discovers every module, summons a machine in one line.
├── hosts/
│   ├── chiyo/                # laptop · Intel iGPU
│   ├── osaka/                # workstation · AMD GPU
│   └── sakaki/               # headless server
├── modules/                  # ← flake.nix imports EVERY .nix in here, into every host
│   ├── nucleus/              # the floor. no flag — so it applies always, everywhere.
│   │   ├── system.nix · networking.nix ·…

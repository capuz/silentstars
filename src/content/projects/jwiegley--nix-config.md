---
repo: "jwiegley/nix-config"
name: "nix-config"
description: "My local Nix configuration"
readmeQualityOk: true
url: "https://github.com/jwiegley/nix-config"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [41, 34]
stars: 458
forks: 55
openIssues: 1
closedIssues: 128
watchers: 21
contributors: 3
recentReleases: 0
createdAt: "2014-05-13T05:39:49Z"
lastCommitAt: "2026-08-17T04:19:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 36
maintainers: ["jwiegley"]
openGraphImageUrl: "https://opengraph.githubassets.com/92d520b2b6dbc89f6dcfef11e067817b08255ffe12c75dadbeb5ddd7ef2196b6/jwiegley/nix-config"
fundingLinks: ["GITHUB:https://github.com/jwiegley", "PATREON:https://patreon.com/jwiegley", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jwiegley"]
---

# nix-config

This repository is the configuration and package authority for John's Darwin
systems, external Home Manager and NixOS consumers, and portable AI tooling. It
defines shared policy once, exposes a separately lockable AI boundary, and leaves
each host in control of its own lock, activation, rollback, and mutable state.

## Architecture

The repository is arranged as a sequence of explicit authorities:

```text
sources/*.json
    -> packages/source-catalog.nix
    -> packages/* and overlays/*
    -> flake/ai.nix
       |-> config/ai/flake.nix        portable package boundary
       `-> flake.nix                  root systems, modules, checks, and apps
             |-> Hera and Clio        direct nix-darwin consumers
             `-> exported modules     external NixOS and Home Manager consumers

config/ai/catalog.nix and renderers
    -> config/ai.nix                  Home Manager AI policy and generated leaves
    -> direct and external consumers
```

The layers have distinct responsibilities:

| Layer | Authority |
| --- | --- |
| Source catalogs | Updateable source coordinates, versions, and dependent hashes |
| Packages and overlays | Reusable derivations, package…

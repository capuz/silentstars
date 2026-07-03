---
repo: "matko/swipl-nix"
name: "swipl-nix"
description: "a flake and overlay for SWI-Prolog versions"
url: "https://github.com/matko/swipl-nix"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [60, 38]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-07T22:34:50Z"
lastCommitAt: "2026-07-03T12:39:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 71
maintainers: ["swipl-nix-update-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cd85245a72007182e79897f189635bb1342dd028ec8f9e0fd5cccfd4c5d09d0/matko/swipl-nix"
---

# swipl-nix - manage swipl versions using Nix
SWI-Prolog (swipl for short) is a prolog environment that has had a
lot of versions over the years. It is useful to be able to quickly
fetch and run one such version, for example for testing code against
different versions.

This project allows you to do so using Nix. It also allows Nix code to
depend on specific versions of swipl easily.

## Basic usage
Commands below assume a Nix install with flakes enabled. Instructions
for this can be found on the [NixOS wiki](https://nixos.wiki/wiki/Flakes).

None of these commands require that you clone this repository. In
fact, there should never be a need to do so manually, unless you want
to contribute to the way things are packaged here.

### Run the latest stable
```
nix run github:matko/swipl-nix
```
or more explicitely,
```
nix run github:matko/swipl-nix#latest
```

### Run the latest devel
```
nix run github:matko/swipl-nix#latest-devel
```
or
```
nix run github:matko/swipl-nix#devel
```

### Run a specific version
```
nix run github:matko/swipl-nix#9_2_3
```
```
nix run github:matko/swipl-nix#9_2
```
```
nix run github:matko/swipl-nix#9
```
```
nix run github:matko/swipl-nix#9-devel
```…

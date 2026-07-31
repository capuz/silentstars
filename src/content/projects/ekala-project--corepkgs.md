---
repo: "ekala-project/corepkgs"
name: "corepkgs"
description: "Core packages and NixOS modules for a poly-repo nixpkgs fork"
readmeQualityOk: true
url: "https://github.com/ekala-project/corepkgs"
language: "Nix"
languages: ["Nix"]
languagePcts: [90]
stars: 69
forks: 6
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-09-08T21:56:21Z"
lastCommitAt: "2026-07-31T06:29:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 44
maintainers: ["jonringer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f00b72ef42fec04af4c7bbf9f39edcea0f5308813abfe2bc8c1c6f545b0024b5/ekala-project/corepkgs"
---

# Core-pkgs (WIP)

This repository is meant to be the provider of most common
development concerns for a nixpkgs fork. There should
be a high degree of scrutiny and quality put into the nix
expressions in this repository, as it will impact the most
use cases.

## Major differences from Nixpkgs

See [Major differences document](https://github.com/ekala-project/corepkgs/blob/HEAD/docs/major-differences-nixpkgs.md).

## Package criteria

At a very high level, corepkgs is intended to include:
- Stdenv
- Compilers, interpreters, and toolchains
  - Common language ecosystem tools (e.g. popular linters, package managers) are included as well
- Logic around using overlays and most package scopes
- Ecosystems necessary system creation (e.g. systemd)
- And their dependencies

The goal is to allow for corepkgs to be a viable platform for people wanting
to do development and software deployments without the breadth of user tools
and other nicities. This reduced scope should allow for updates to be applied
more frequently and cause less rebuild churn than something the size of nixpkgs.

## Guiding design principles

These are a set of guiding principles when making packaging or process…

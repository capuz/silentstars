---
repo: "sudosubin/agents.nix"
name: "agents.nix"
description: "Nixpkgs overlay for AI agent skills from skills.sh and skillsdirectory.com"
readmeQualityOk: true
url: "https://github.com/sudosubin/agents.nix"
homepage: "https://sudosubin.github.io/agents.nix/"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-04T00:56:31Z"
lastCommitAt: "2026-11-07T22:50:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["agents-nix-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a4125439c621856f7d33b6bc5a630b9c89f71070d5b5fc33d437aafcf14bbf/sudosubin/agents.nix"
---

# agents.nix

Nix expressions for AI agent skills, plugins, marketplaces, and Kiro powers.

Each package is sourced from a GitHub repository, pinned to a specific revision, and available through a nixpkgs overlay.

## Prerequisites

### (Optional) Enable flakes

Read about [Nix flakes](https://wiki.nixos.org/wiki/Flakes) and [set them up](https://wiki.nixos.org/wiki/Flakes#Setup).

## Overlay

Read about [Overlays](https://wiki.nixos.org/wiki/Overlays#Using_overlays).

### With flakes

Add `agents.nix` to your flake inputs:

```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    agents-nix.url = "github:sudosubin/agents.nix";
  };

  outputs = { nixpkgs, agents-nix, ... }:
    let
      pkgs = import nixpkgs {
        system = "aarch64-darwin"; # or "x86_64-linux", etc.
        overlays = [ agents-nix.overlays.default ];
      };
    in
    {
      # pkgs.agent-skills.github.<owner>.<repo>.<skill-name>
    };
}
```

### Without flakes

```nix
let
  agents-nix = import (builtins.fetchGit {
    url = "https://github.com/sudosubin/agents.nix";
    ref = "refs/heads/main";
  });

  pkgs = import <nixpkgs> {
    overlays = [ agents-nix.overlays.default ];…

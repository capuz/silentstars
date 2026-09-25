---
repo: "sudosubin/agents.nix"
name: "agents.nix"
description: "Nixpkgs overlay for AI agent skills from skills.sh and skillsdirectory.com"
readmeQualityOk: true
url: "https://github.com/sudosubin/agents.nix"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-04T00:56:31Z"
lastCommitAt: "2026-09-25T09:04:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["agents-nix-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2352935f1152fa199e2c556e125e3069fcfb111ebec60fd657ff8e874b69b834/sudosubin/agents.nix"
---

# agents.nix

Nix expressions for AI agent skills from [skills.sh](https://skills.sh) and [skillsdirectory.com](https://www.skillsdirectory.com).

As of September 2026, this flake provides Nix derivations for over 145,000 skills sourced from more than 21,000 GitHub repositories. Each skill is individually packaged, pinned to a specific revision, and made available through a nixpkgs overlay.

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
  agents-nix = import…

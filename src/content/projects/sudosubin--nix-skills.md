---
repo: "sudosubin/nix-skills"
name: "nix-skills"
description: "Nixpkgs overlay for AI agent skills from skills.sh and skillsdirectory.com"
url: "https://github.com/sudosubin/nix-skills"
language: "TypeScript"
languages: ["TypeScript", "Nix"]
languagePcts: [74, 26]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-04T00:56:31Z"
lastCommitAt: "2026-06-28T01:44:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9335bc2e2f150a78c94499d78a68654026a0bf014bdd353eac34c5f50b7e4cd4/sudosubin/nix-skills"
---

# nix-skills

Nix expressions for AI agent skills from [skills.sh](https://skills.sh) and [skillsdirectory.com](https://www.skillsdirectory.com). Two independent GitHub Actions workflows keep the data fresh: [Fetch Sources](https://github.com/sudosubin/nix-skills/actions/workflows/fetch-sources.yml) and [Update Skills](https://github.com/sudosubin/nix-skills/actions/workflows/update-skills.yml), each running every 3 hours.

As of March 2026, this flake provides Nix derivations for over **480,000** skills sourced from nearly **13,000** GitHub repositories. Each **skill** is individually packaged, pinned to a specific revision, and made available through a nixpkgs overlay.

## Prerequisites

### (Optional) Enable flakes

Read about [Nix flakes](https://wiki.nixos.org/wiki/Flakes) and [set them up](https://wiki.nixos.org/wiki/Flakes#Setup).

## Overlay

Read about [Overlays](https://wiki.nixos.org/wiki/Overlays#Using_overlays).

### With flakes

Add `nix-skills` to your flake inputs:

```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    nix-skills.url = "github:sudosubin/nix-skills";
  };

  outputs = { nixpkgs, nix-skills, ... }:
    let
      pkgs =…

---
repo: "kiriwalawren/dotnix"
name: "dotnix"
description: "NixOS, HomeManager, and Nixvim Configurations"
readmeQualityOk: true
url: "https://github.com/kiriwalawren/dotnix"
language: "Nix"
languages: ["Nix"]
languagePcts: [95]
stars: 18
forks: 1
openIssues: 5
closedIssues: 114
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-05T02:32:15Z"
lastCommitAt: "2026-11-08T10:41:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 65
maintainers: ["kiriwalawren", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6243282aceacde294633d31e56de155730a44d12ce189de0e7ceac01672385b7/kiriwalawren/dotnix"
fundingLinks: ["GITHUB:https://github.com/kiriwalawren", "BUY_ME_A_COFFEE:https://buymeacoffee.com/kiriwalawren"]
---

Kiri's NixOS Flake

## Prequisites

- [Flakes](https://nixos-and-flakes.thiscute.world/nixos-with-flakes/nixos-with-flakes-enabled) enabled

## Developing

Enter the development shell with `nix develop`. Run `nix fmt` to format the repo.

## Origin of the dendritic pattern

This repository follows [the dendritic pattern](https://github.com/mightyiam/dendritic).

## Automatic import

Nix files (they're all flake-parts modules) are automatically imported.
Nix files prefixed with an underscore are ignored.
No literal path imports are used.
This means files can be moved around and nested in directories freely.

## Installation

The `bootstrap-nixos` application performs a one-shot NixOS install on a remote machine using [nixos-anywhere](https://github.com/nix-community/nixos-anywhere).

### Usage

In `nix develop`:

```bash
bootstrap-nixos -n <hostname> -d <ip-or-domain> -k <ssh_key> [OPTIONS]
```

### Required arguments

| Flag | Description |
|------|-------------|
| `-n <hostname>` | Hostname as defined in the flake (e.g. `homelab`) |
| `-d <destination>` | IP or DNS of the target machine |
| `-k <ssh_key>` | Path to the private SSH key used for install |

### Options

| Flag |…

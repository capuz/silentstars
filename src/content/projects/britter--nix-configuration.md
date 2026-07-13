---
repo: "britter/nix-configuration"
name: "nix-configuration"
description: "Flake based Nix configuration for my machines."
readmeQualityOk: true
url: "https://github.com/britter/nix-configuration"
language: "Nix"
languages: ["Nix"]
languagePcts: [98]
topics: ["home-manager", "nix", "nix-configuration", "nix-flake", "nixos"]
stars: 20
forks: 1
openIssues: 2
closedIssues: 53
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-30T18:31:28Z"
lastCommitAt: "2026-07-13T06:37:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["britter", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/89833a5711edd73c6a05686a1b903244d1579d26a946c598a5e687edb528673b/britter/nix-configuration"
---

# nix-configuration

Flake based Nix configuration for my machines.

## Useful commands

### General

**Show store location of a module**

```shell
nix build <package> --print-out-paths --no-link
```

Where `<package>` would be something like `nixpkgs#cowsay`

**Run command without installing or nix-shell**

```shell
nix run <package> -- <args>
```

Where

- `<package>` would be something like `nixpkgs#exa`
- `<args>` would be something like `--tree --level 4` (in the case of exa).

Note that the `<package>` and `<args>` need to be separated by `--`

**Getting a package hash**

From URL:

```shell
nix run nixpkgs#nix-prefetch fetchurl --url <url>
```

From git/GitHub:

```shell
nix run nixpkgs#nix-prefetch-git <url>
nix run nixpkgs#nix-prefetch-github <owner> <repo>
```

This will download the URL/git repository to the store and print the resulting hash.

### Flakes

**Switch to a machine configuration by host name**

```shell
sudo nixos switch --flake ".#<host>"
```

**Retrieve flake meta data**

```shell
nix flake metadata <flake url>
```

Flake url can be something like

- `.` (flake in CWD)
- `github:nixos/nixpkgs/nixos-unstable`

**Initialize a new flake**

```shell
nix flake…

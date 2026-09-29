---
repo: "andreoss/kernel-overlay"
name: "kernel-overlay"
description: "linux kernel overlay"
readmeQualityOk: true
url: "https://github.com/andreoss/kernel-overlay"
language: "Rust"
languages: ["Rust", "Nix"]
languagePcts: [76, 24]
topics: ["kernel", "nix", "nixos"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-12T23:27:14Z"
lastCommitAt: "2026-09-29T08:11:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 65
maintainers: ["andreoss"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccfecce8680360ce80a6752c483325b975abcccad245afd9bcd3eebb35ceff69/andreoss/kernel-overlay"
---

# Kernel overlay

Builds of the vanilla Linux kernel for Nix.

Current releases are regularly pulled from https://kernel.org.
Run the following command to see the exact versions:

```sh
nix flake show github:andreoss/kernel-overlay
``` 

- `linuxPackages` is an alias for the latest **stable** release.  
- `linuxPackages_testing` is an alias for the latest **mainline** release.

## Available releases

|Version|Package|Date|
|---|---|---|
|7.1.13.0|7_1|2026-09-02|
|7.3.0-rc5|mainline|2026-09-27|
|7.2.8|stable|2026-09-25|
|6.18.54|6_18|2026-09-25|
|6.12.111|6_12|2026-09-21|
|6.6.157|6_6|2026-09-14|
|6.1.188|6_1|2026-09-14|
|5.15.221|5_15|2026-09-14|
|5.10.270|5_10|2026-09-14|

## Installation

(Optional) Enable cachix substitutions in `nix.settings`.

https://app.cachix.org/cache/kernel-overlay

NOTE: This change will only have effect after a `nix-daemon' restart.

```
  nix.settings = {
    experimental-features = [ "nix-command" "flakes" ];
    substituters = [ "https://kernel-overlay.cachix.org" ];
    trusted-public-keys = [
      "kernel-overlay.cachix.org-1:rUvSa2sHn0a7RmwJDqZvijlzZHKeGvmTQfOUr2kaxr4="
    ];
  };
```

Add as an input to a flake

```
{
  description = "OS…

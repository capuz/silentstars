---
repo: "MidAutumnMoon/TaysiTsuki"
name: "TaysiTsuki"
description: "The teapot and the system configurations."
readmeQualityOk: true
url: "https://github.com/MidAutumnMoon/TaysiTsuki"
language: "Nix"
languages: ["Nix", "QML"]
languagePcts: [37, 35]
topics: ["monorepo", "nix", "nixos", "flakes"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-11-04T11:48:46Z"
lastCommitAt: "2026-08-24T04:22:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: ["MidAutumnMoon", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffc6ec5c5eeb4098d45abe9262cebf552b17665ebce2a46658e49fefefe635fb/MidAutumnMoon/TaysiTsuki"
---

# TäysiTsuki

<sub>P</sub>i<sup>v</sup>o<sub>t </sub>A<sub>w</sub>a<sup>y</sup>

## Use Binary Cache

The binary cache is hosted using [Cachix](https://www.cachix.org/),

1. Add `https://nuirrce.cachix.org` to substituter list
2. Add pubkey `nuirrce.cachix.org-1:KQWa6ZfDkMPXeDiUpmyDhNw4CmgybPyeVklmi/1Rtqk=`

## Notes on Setup GitHub Actions

### Necessary Permission
1. Find `Actions/General` in Settings.
2. Select `Read and write permissions` under Workflow permissions.
3. Enable `Allow Github Actions to create...pull requests`.

### Setup Cachix
1. Obtain the token from Cachix dashboard.
2. Put the token in a secret named `CACHIX_AUTH_TOKEN`.

## Notes on Spinning Up New Machine
1.

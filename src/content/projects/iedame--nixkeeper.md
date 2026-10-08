---
repo: "iedame/nixkeeper"
name: "nixkeeper"
description: "Health dashboard for the nixpkgs packages you maintain: new releases, build and update failures, and vulnerabilities, in one place."
readmeQualityOk: true
url: "https://github.com/iedame/nixkeeper"
homepage: "https://nixkeeper.com"
language: "Python"
languages: ["Python"]
languagePcts: [66]
topics: ["maintainer", "nix", "nixos", "package-manager", "dashboard", "monitoring", "hydra", "nixpkgs", "linux"]
stars: 6
forks: 1
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-27T20:14:17Z"
lastCommitAt: "2026-10-08T10:52:35Z"
lastReleaseAt: "2026-10-04T05:25:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 56
maintainers: ["iedame"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1391367762/678a77b1-dd9c-418d-bf92-883d8450d6c6"
---

# <picture><source media="(prefers-color-scheme: dark)" srcset="assets/brand/nixkeeper-lockup-dark.svg"><img src="assets/brand/nixkeeper-lockup.svg" alt="nixkeeper" height="80"></picture>

Health dashboard for the nixpkgs packages you maintain: new releases, build
and update failures, and vulnerabilities, in one place.

Pick it in the page's Theme menu, or make it your page's default with
`page.theme = "catppuccin";` in your package lists.

For each package it tracks, nixkeeper shows on one static page (`page/`):

- **New releases**: whether nixpkgs unstable is behind, per
  [Repology](https://repology.org) and nixkeeper's own update checks (a
  project's tags, worked out from nixpkgs for those it fetches from GitHub,
  or a release page, or for unstable versions its branch;
  about hourly for the ones marked frequent)
- **Build failures**: [Hydra](https://hydra.nixos.org)'s latest builds on
  x86_64-linux, aarch64-linux and aarch64-darwin, and where nixpkgs marks it
  broken
- **Update failures**: the latest attempt of the
  [nixpkgs-update](https://nixpkgs-update-logs.nixos.org) bot (r-ryantm)
- **Vulnerabilities**: versions Repology flags, with their known CVEs
- **Open PRs and…

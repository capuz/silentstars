---
repo: "NixOS/nix-security-tracker"
name: "nix-security-tracker"
description: "Web service for managing information on vulnerabilities in software distributed through Nixpkgs"
readmeQualityOk: true
url: "https://github.com/NixOS/nix-security-tracker"
homepage: "https://tracker.security.nixos.org"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["nixpkgs", "security", "vulnerabilities"]
stars: 118
forks: 41
openIssues: 94
closedIssues: 270
watchers: 6
contributors: 35
recentReleases: 0
createdAt: "2023-08-31T16:49:45Z"
lastCommitAt: "2026-10-05T10:35:01Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 48
maintainers: ["fricklerhandwerk", "florentc", "DarshanCode2005"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8b074b6813c0289ad7d57063690c01164e03900480789643c7797c39065189a/NixOS/nix-security-tracker"
fundingLinks: ["GITHUB:https://github.com/NixOS", "OPEN_COLLECTIVE:https://opencollective.com/nixos"]
---

# Nixpkgs security tracker

The **Nixpkgs security tracker** is a web service for managing information on vulnerabilities in software distributed through [Nixpkgs and NixOS](https://github.com/nixos/nixpkgs).

It is intended to help with solving the [record linkage](https://en.wikipedia.org/wiki/Record_linkage) problem of matching packages in the [CVE database](https://www.cve.org/) and [Nixpkgs](https://search.nixos.org/packages).

It is deployed at <https://tracker.security.nixos.org>.

The tool serves three audiences:

- [**NixOS security team**](https://nixos.org/community/teams/security/): review incoming CVEs and link them to affected packages
- [**Nixpkgs maintainers**](https://github.com/NixOS/nixpkgs/blob/master/maintainers/README.md): get notified when their packages have vulnerabilities
- **Nixpkgs users**: subscribe to notifications for packages they care about

## Contributing

Please see the [contributing guide](https://github.com/NixOS/nix-security-tracker/blob/HEAD/CONTRIBUTING.md) for more information on how to get started.

Maintainers can be reached in the [Nixpkgs security tracker Matrix room](https://matrix.to/#/!XyujTzhebudBVCpRiF:matrix.org), which is the…

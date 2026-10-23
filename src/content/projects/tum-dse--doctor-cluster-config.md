---
repo: "TUM-DSE/doctor-cluster-config"
name: "doctor-cluster-config"
description: "The servers configurations of https://dse.in.tum.de/"
readmeQualityOk: true
url: "https://github.com/TUM-DSE/doctor-cluster-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [78]
topics: ["buildbot-tum-dse"]
stars: 53
forks: 23
openIssues: 5
closedIssues: 29
watchers: 3
contributors: 64
recentReleases: 0
createdAt: "2024-03-25T16:49:56Z"
lastCommitAt: "2026-10-23T12:03:50Z"
lastReleaseAt: "2025-01-07T10:26:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["Mic92", "martin-fink", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f639b0a7933588f995449c9bc70e0595206a2a5eeafc5924cc0800bcca81a08c/TUM-DSE/doctor-cluster-config"
---

The documenation for all hosts lives in [docs/](https://github.com/TUM-DSE/doctor-cluster-config/blob/HEAD/docs/). The corresponding nixos configuration is in [hosts/](https://github.com/TUM-DSE/doctor-cluster-config/blob/HEAD/hosts/).

Live cluster monitoring is at [grafana.dos.cit.tum.de](https://grafana.dos.cit.tum.de):

- **DSE-Monitoring** — host reachability & backups
- **DSE-FPGA** — FPGA cards status
- **DSE-Switch** — ToR switch port state

# New to NixOS?

Check out our [tutorial](https://github.com/TUM-DSE/doctor-cluster-config/blob/HEAD/docs/nix-getting-started.md).

# New admins: Onboarding

1. Install [nix](https://nixos.org/download.html#download-nix) (the recommended Multi-user installation is not NixOS, but only a package manager)
2. [Enable flake support in nix](https://nixos.wiki/wiki/Flakes#Permanent). This effectively adds the following flags to all your `nix <flags> develop`-like commands: `--extra-experimental-features nix-command --extra-experimental-features flakes`
3. Clone the `doctor-cluster-config` repo, `cd` into it and run: `nix develop`. This opens a shell with additional packages available such as `inv --list`, `sops` and `age`.
4. To generate new…

---
repo: "spigell/pulumi-talos-cluster"
name: "pulumi-talos-cluster"
description: "Create a talos cluster with pulumi!"
readmeQualityOk: true
url: "https://github.com/spigell/pulumi-talos-cluster"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [61, 21]
stars: 10
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2024-11-11T01:51:17Z"
lastCommitAt: "2026-10-10T10:04:44Z"
lastReleaseAt: "2026-07-14T11:12:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 73
maintainers: ["spigell-renovate[bot]", "ik-gemini-bot", "spigell"]
openGraphImageUrl: "https://opengraph.githubassets.com/44f33d48b25e8a91fc69887e0aba3778c23f81169489d5c5430c365d4d4845af/spigell/pulumi-talos-cluster"
---

# pulumi-talos-cluster (WIP)

`pulumi-talos-cluster` is a Pulumi component designed to simplify the creation and management of Talos clusters. This component abstracts the complexities of setting up and managing Talos-based Kubernetes clusters, allowing for streamlined deployment and configuration.

This component can be used for bare-metal and cloud installations. Direct access to `apid` on nodes is required.

*Note: This project is in active development, and not all features are complete.*

## Requirements

Only Linux is supported as the runner operating system. The following tools must be available:

- `bash` (must be available at `/bin/bash`)
- `printf`
- `talosctl` (version `v1.12.0` or compatible recommended to match the default Talos image version)

## Quick Start

1. Install `bash` (at `/bin/bash`), `printf`, and `talosctl` on a Linux machine.
2. Clone this repository.
3. Run an example program, such as those under `integration-tests/testdata`, using `pulumi up`. The provider plugin installs automatically.

Existing stacks that use the Pulumiverse Talos provider must follow the [migration…

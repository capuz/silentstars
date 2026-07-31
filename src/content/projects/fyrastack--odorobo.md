---
repo: "FyraStack/odorobo"
name: "odorobo"
description: "Stack Virtualization Platform - Powered by Cloud Hypervisor"
readmeQualityOk: true
url: "https://github.com/FyraStack/odorobo"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 14
closedIssues: 8
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-25T05:47:18Z"
lastCommitAt: "2026-07-31T06:29:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 81
undervaluedScore: 51
maintainers: ["halfcyan", "dependabot[bot]", "TheHeroBrine422"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcb2016d7b70c3bf5cfb50f3954db7bbb7c9913e69a602a1126a5674f9c7c86c/FyraStack/odorobo"
---

# Odorobo

> [Umicha - Odorobo](https://youtu.be/D_UC0WJmLnc)

Stack Virtualization Platform - Powered by Cloud Hypervisor

Odorobo<sup>(robot dance)</sup> is a hypervisor platform built on top of
[Cloud Hypervisor](https://www.cloudhypervisor.org/), a lightweight
VMM built on rust-vmm, with a focus on providing lightweight,
stateful, and portable virtual machines.

VM configuration is persisted by the gateway and portable across nodes;
disk images can be backed by distributed storage for full portability, or kept node-local for simplicity.

## Components

- **Agent**: A lightweight agent that handles VM lifecycle management, including creation, deletion, and state management.
- **Gateway**: A central controller that orchestrates the deployment and management of VMs, reconciling and handling migration across nodes (unimplemented).
- **CLI**: Debugging and management command-line interface for interacting with the platform, not intended for end-users but useful for developers and operators.

The Gateway orchestrates across nodes;
Agents run on each node and manage Cloud Hypervisor instances directly via systemd.

## Usage

Odorobo Agent is meant to be run as a system agent on each…

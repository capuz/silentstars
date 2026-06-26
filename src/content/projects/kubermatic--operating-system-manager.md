---
repo: "kubermatic/operating-system-manager"
name: "operating-system-manager"
description: "Operating System Manager is responsible for creating and managing the configuration that are needed to configure worker nodes "
url: "https://github.com/kubermatic/operating-system-manager"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 52
forks: 43
openIssues: 13
closedIssues: 119
watchers: 9
contributors: 77
recentReleases: 0
createdAt: "2021-02-03T16:44:01Z"
lastCommitAt: "2026-06-26T06:46:35Z"
lastReleaseAt: "2022-01-13T10:48:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 52
maintainers: ["rajaSahil", "archups", "kron4eg"]
openGraphImageUrl: "https://opengraph.githubassets.com/fda7e5b3835dc3cec788d3937f949ea6a61c589e09d1c592b96202a2a04bdb78/kubermatic/operating-system-manager"
---

# Kubermatic operating-system-manager

Operating System Manager is responsible for creating and managing the required configurations for worker nodes in a Kubernetes cluster. It decouples operating system configurations into dedicated and isolable resources for better modularity and maintainability.

These isolated and extensible resources allow a high degree of customization. This is useful for hybrid, edge, and air-gapped environments.

Configurations for worker nodes comprise of set of scripts used to prepare the node, install packages, configure networking, storage etc. These configurations prepare the nodes for running `kubelet`.

## Overview

### Problem Statement

[Machine-Controller](https://github.com/kubermatic/machine-controller) is used to manage the worker nodes in KubeOne clusters. It depends on user-data plugins to generate the required configurations for worker nodes. Each operating system requires its own user-data plugin. These configs are then injected into the worker nodes using provisioning utilities such as [cloud-init](https://cloud-init.io) or [ignition](https://coreos.github.io/ignition). Eventually the nodes are bootstrapped.

Over time, it has been…

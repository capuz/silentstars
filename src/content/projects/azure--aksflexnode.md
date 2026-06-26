---
repo: "Azure/AKSFlexNode"
name: "AKSFlexNode"
description: "Connecting a node to AKS cluster from anywhere"
url: "https://github.com/Azure/AKSFlexNode"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [66, 28]
stars: 10
forks: 19
openIssues: 14
closedIssues: 35
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2025-10-24T18:16:57Z"
lastCommitAt: "2026-06-26T23:42:38Z"
lastReleaseAt: "2026-02-18T22:58:57Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 66
maintainers: ["bcho", "wenxuan0923", "anson627"]
openGraphImageUrl: "https://opengraph.githubassets.com/cebf834dc2d105e9ea78ed3c762be891747da77453981bbf397567d32bb0e09d/Azure/AKSFlexNode"
---

# AKS Flex Node

## Overview

AKS Flex Node extends Azure Kubernetes Service (AKS) to customer-managed virtual machines and bare metal hosts, enabling them to run as AKS worker nodes outside standard AKS node pools. It is built on top of [Azure Unbounded](https://github.com/Azure/unbounded), which provides the host-side foundation for running and reconciling isolated Kubernetes node environments.

> **Status:** AKS Flex Node is currently alpha software.

## Key Features And Scenarios

- Bootstrap and join virtual machines or bare metal hosts for both amd64 and arm64 as AKS worker nodes.
- Support hybrid, lab, and specialized hardware scenarios.
- Use flexible authentication modes, including Azure Arc, managed identity (MSI), and Kubernetes bootstrap token.
- Automatically detect NVIDIA GPU devices and configure the container runtime for accelerated workloads.
- Run blue-green in-place updates and upgrades while retaining the existing host.
- Manage your Flex Node fleet through AKS management APIs for upgrade, repair, reset, and related lifecycle operations.
- Remediate and repair agent and node state through first-class lifecycle operations.

## Getting Started

Before you begin,…

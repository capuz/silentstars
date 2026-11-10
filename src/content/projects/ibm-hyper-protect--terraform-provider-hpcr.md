---
repo: "ibm-hyper-protect/terraform-provider-hpcr"
name: "terraform-provider-hpcr"
description: "A Terraform provider to automate generating and managing IBM Confidential Computing (Previously Hyper Protect) contracts and related resources via Infrastructure-as-Code."
readmeQualityOk: true
url: "https://github.com/ibm-hyper-protect/terraform-provider-hpcr"
homepage: "https://registry.terraform.io/providers/ibm-hyper-protect/hpcr/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["confidential-computing", "hpcr-rhvs", "hpcr4rhvs", "hpvs", "hyper-protect", "hyper-protect-services", "ibm", "ibm-confidential-computing", "peer-pod", "peerpod"]
stars: 6
forks: 9
openIssues: 5
closedIssues: 4
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2022-07-12T23:38:55Z"
lastCommitAt: "2026-11-10T11:38:24Z"
lastReleaseAt: "2023-07-06T12:02:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 88
maintainers: ["renovate[bot]", "semantic-release-bot", "Sashwat-K"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c0546fcbc50c4cf7d5665a1c8d745cbe2a4f3630b2cf0e9c46bbd96ee09106/ibm-hyper-protect/terraform-provider-hpcr"
---

# Terraform Provider HPCR

Terraform provider to automate generating workloads for IBM Hyper Protect confidential computing platforms.

## Table of Contents

- [Overview](#overview)
- [Who Is This For?](#who-is-this-for)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Supported Platforms](#supported-platforms)
- [Examples](#examples)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

This Terraform provider is built on top of the **[contract-go library](https://github.com/ibm-hyper-protect/contract-go)**, which provides the core functionality for IBM Hyper Protect contract operations.

The contract-go library automates IBM Hyper Protect confidential computing workloads across IBM Confidential Computing Container Runtime, IBM Confidential Computing Container Runtime for Red Hat Virtualization Solutions, and IBM Confidential Computing Containers for Red Hat OpenShift Container Platform, providing capabilities for:

- **Contract Generation**: Create signed and encrypted contracts for the platforms
- **Certificate Operations**:…

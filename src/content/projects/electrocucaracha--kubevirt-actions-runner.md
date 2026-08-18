---
repo: "electrocucaracha/kubevirt-actions-runner"
name: "kubevirt-actions-runner"
description: "GitHub self-host actions project for creation of KubeVirt runners"
readmeQualityOk: true
url: "https://github.com/electrocucaracha/kubevirt-actions-runner"
homepage: "https://electrocucaracha.github.io/kubevirt-actions-runner/"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["github-actions", "kubernetes", "kubevirt"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 65
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-12-18T02:11:51Z"
lastCommitAt: "2026-08-18T04:07:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 68
maintainers: ["electrocucaracha", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/905020588/37f98bf3-5ad4-4616-bb21-9ee901469108"
---

# KubeVirt Actions Runner

## Overview

The `kubevirt-actions-runner` project provides a robust solution for running GitHub Actions
workflows in isolated, ephemeral virtual machines using [KubeVirt](https://kubevirt.io/).
By integrating with [Actions Runner Controller (ARC)](https://github.com/actions/actions-runner-controller),
this project enables you to execute CI/CD jobs in highly customizable VM environments with
enhanced security and flexibility.

This project acts as a bridge between Kubernetes and GitHub Actions, automatically provisioning dedicated VMs for each workflow job and cleaning them up after completion.

## Reasons to Use KubeVirt Actions Runner

While GitHub-hosted runners work well for standard workflows, they have limitations. This project addresses these limitations by offering:

- **Custom Environments**: Run jobs requiring specific kernel modules, system services, or custom OS configurations.
- **Enhanced Isolation**: Execute untrusted code or security-sensitive workflows in fully isolated VMs.
- **OS Flexibility**: Support for Windows VMs and other operating systems beyond standard Linux containers.
- **Ephemeral Instances**: Fresh, clean VM for every job…

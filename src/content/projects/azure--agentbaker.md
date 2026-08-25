---
repo: "Azure/AgentBaker"
name: "AgentBaker"
description: "Agent Baker is aiming to provide a centralized, portable k8s agent node provisioning lib as well as rich support on different OS image with optimized k8s binaries."
readmeQualityOk: true
url: "https://github.com/Azure/AgentBaker"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [45, 35]
topics: ["k8s", "agent", "vhd", "os", "cloud-init"]
stars: 155
forks: 275
openIssues: 19
closedIssues: 68
watchers: 31
contributors: 10000
recentReleases: 0
createdAt: "2020-02-07T18:57:33Z"
lastCommitAt: "2026-08-25T04:11:01Z"
lastReleaseAt: "2022-12-06T17:20:09Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 48
maintainers: ["renovate[bot]", "timmy-wright", "aks-node-assistant[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/21949b140c297ad1d836047712a0e9611ad3286c7ce4cfacd73a44847b7156be/Azure/AgentBaker"
---

# AgentBaker

AgentBaker provides components that build VM images and provision Kubernetes nodes in Azure.

AgentBaker includes:

- A VHD builder that creates Linux and Windows node images.
- Tools and scripts that provision VMs as Kubernetes nodes.

The primary consumer of AgentBaker is Azure Kubernetes Service (AKS).

AKS uses AgentBaker to provision Linux and Windows Kubernetes nodes.

## Style

We use [golangci-lint](https://golangci-lint.run/) to enforce style.

Run `make -C hack/tools install` to install the linter.

Pull request titles must follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) because pull requests are squashed during merge.

## Tests

### Shell scripts

For ShellSpec unit test instructions, see the [ShellSpec README](https://github.com/Azure/AgentBaker/blob/HEAD/spec/README.md).

### E2E

The E2E suite creates VM scale sets, provisions Kubernetes nodes with AgentBaker output, and validates them against AKS clusters.

See the [E2E directory](https://github.com/Azure/AgentBaker/blob/HEAD/e2e/).

## Contributor License Agreement (CLA)

This project welcomes contributions and suggestions. Most contributions require you to agree to a…

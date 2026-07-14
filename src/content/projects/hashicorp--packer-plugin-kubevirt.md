---
repo: "hashicorp/packer-plugin-kubevirt"
name: "packer-plugin-kubevirt"
description: "Packer plugin for building KubeVirt images"
readmeQualityOk: true
url: "https://github.com/hashicorp/packer-plugin-kubevirt"
homepage: "https://developer.hashicorp.com/packer/integrations/hashicorp/kubevirt"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["doormat-managed", "kubevirt", "packer", "packer-plugin"]
stars: 14
forks: 14
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 59
recentReleases: 0
createdAt: "2025-08-25T15:19:46Z"
lastCommitAt: "2026-07-14T05:53:09Z"
lastReleaseAt: "2025-09-12T05:36:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 64
undervaluedScore: 44
maintainers: ["anurag5sh", "hashicorp-copywrite[bot]", "cullenmcdermott"]
openGraphImageUrl: "https://opengraph.githubassets.com/1af07050b1b18fc61c9441839f1529f8e185c0c4750c97ae0d3095cef61593b2/hashicorp/packer-plugin-kubevirt"
---

# Packer Plugin KubeVirt

The `KubeVirt` plugin can be used with [HashiCorp Packer](https://www.packer.io) to create KubeVirt images.

## Packer

[Packer](https://developer.hashicorp.com/packer) is a tool for creating identical machine images from a single source template.

To get started, see the [Packer installation guide](https://developer.hashicorp.com/packer/install).

## Prerequisites

- [Packer](https://packer.io)
- [Kubernetes](https://kubernetes.io) with [KubeVirt](https://kubevirt.io) installed

## Plugin Features

- **HCL Templating** – Use HashiCorp Configuration Language (HCL2) for defining infrastructure as code.
- **ISO Installation** – Build VM golden images from ISO using the `kubevirt-iso` builder.
- **ISO Media Files** – Embed additional files into installation process (e.g. `ks.cfg` or `unattend.xml`).
- **Boot Command** – Automate the VM boot process using a set of commands (via a VNC connection).
- **Integrated SSH/WinRM Access** – Allows VM provisioning and customization via SSH or WinRM.

## Components

- `kubevirt-iso` - This builder starts from a ISO file and builds virtual machine image on a KubeVirt cluster.

### Design

## Installation

### Automatic…

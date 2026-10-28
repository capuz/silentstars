---
repo: "nutanix/docker-machine"
name: "docker-machine"
description: "Rancher Node Driver for Nutanix AHV"
readmeQualityOk: true
url: "https://github.com/nutanix/docker-machine"
homepage: "https://www.nutanix.com/products/acropolis/virtualization"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["nutanix", "docker", "kubernetes", "rancher", "driver"]
stars: 14
forks: 17
openIssues: 2
closedIssues: 27
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2020-03-11T14:52:22Z"
lastCommitAt: "2026-10-28T09:58:01Z"
lastReleaseAt: "2023-09-26T15:20:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 58
maintainers: ["dependabot[bot]", "tuxtof"]
openGraphImageUrl: "https://opengraph.githubassets.com/9084adb962984f872578f1dd7df653a54d6f0d52039adaa19378e8daaa6fa465/nutanix/docker-machine"
---

# Nutanix Rancher Node Driver

This repository contains the Rancher Node Driver for Nutanix. Nutanix Node driver are used to provision hosts on Nutanix Enterprise Cloud, which Rancher uses to launch and manage Kubernetes clusters.

---

---

## Features

- Configure Prism Central and corresponding user to talk to Nutanix platform
- Define target cluster to deploy VM
- Ability to set a custom name for the newly created VM
- Ability to select VM's Main Memory in Megabytes
- Ability to select VM's vCPU count
- Ability to set the number of cores per vCPU
- Ability to specify the network(s) of the VM (Classic or VPC)
- Ability to specify the template disk in the VM by image name and modify his size (increase only)
- Ability to specify categories to applied to the VM ( flow, leap, ...)
- Ability to add one additional disk by specifying disk-size and storage-container
- Enable passthrough the host's CPU features to the newly created VM
- Define a Cloud-init user-data to send to the newly created VM
- Project support
- Serial Port support
- Boot type selection : Legacy or UEFI 
- GPU support
- Prism Central Service Accounts support

## Installation

If you want to use Nutanix Node Driver,…

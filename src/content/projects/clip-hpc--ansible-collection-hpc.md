---
repo: "CLIP-HPC/ansible-collection-hpc"
name: "ansible-collection-hpc"
description: "Ansible collection for HPC payload deployment"
readmeQualityOk: true
url: "https://github.com/CLIP-HPC/ansible-collection-hpc"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [54, 34]
topics: ["ansible", "hpc", "slurm", "clip-operations"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2021-08-25T12:10:21Z"
lastCommitAt: "2026-09-02T08:01:44Z"
lastReleaseAt: "2023-01-13T10:58:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 68
maintainers: ["timeu", "Swarsel", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/244e227d534901ee9e408a218a3ff6e4f661ec3795e36443e6ddb2116b92ad93/CLIP-HPC/ansible-collection-hpc"
---

# Ansible Collection: clip.hpc

This repo hosts the `clip.hpc` Ansible Collection.

The collection includes the roles to deploy the CBE HPC cluster.

## Installation and Usage

Before using the `clip.hpc` collection, you need to install the collection with the `ansible-galaxy` CLI:

`ansible-galaxy collection install clip.hpc`

You can also include it in a `requirements.yml` file and install it through `ansible-galaxy collection install -r requirements.yml` using the format:

```yaml
collections:
- name: clip.hpc
```

## Roles

Roles in this collection:

- [roles/doca](https://github.com/CLIP-HPC/ansible-collection-hpc/blob/HEAD/roles/doca): Installs and configures NVIDIA DOCA drivers for Mellanox NICs.
- [roles/multirail](https://github.com/CLIP-HPC/ansible-collection-hpc/blob/HEAD/roles/multirail): Sets up NetworkManager multirail for dual-interface hosts.
- [roles/rocev2](https://github.com/CLIP-HPC/ansible-collection-hpc/blob/HEAD/roles/rocev2): Tunes Mellanox NIC firmware for RoCEv2 with DSCP-based QoS.
- [roles/slurm](https://github.com/CLIP-HPC/ansible-collection-hpc/blob/HEAD/roles/slurm): Deploys and configures a functional SLURM cluster.
-…

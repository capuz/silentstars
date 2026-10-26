---
repo: "coreweave/slurm-containers"
name: "slurm-containers"
description: "Containers for running Slurm on K8s"
readmeQualityOk: true
url: "https://github.com/coreweave/slurm-containers"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [65, 35]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 19
recentReleases: 0
createdAt: "2025-03-12T20:12:00Z"
lastCommitAt: "2026-10-26T18:06:15Z"
lastReleaseAt: "2026-06-22T23:49:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 59
maintainers: ["bradbeam", "gaurab15", "shiv2909"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa1eac669d524036bbcfb85608754003cc61524757ee62d40b5c980b5f2939a3/coreweave/slurm-containers"
---

# Slurm Containers

This repository contains files for building the SUNK Slurm container image, which is the core container image used for deploying Slurm on Kubernetes with SUNK.

## Overview

The Slurm container image builds in multiple stages, and creates a fully functional Slurm installation along with supporting tools needed for integrating Slurm with Kubernetes. The image includes:

- Slurm workload manager (from source, with custom patches)
- NVIDIA Pyxis plugin for container execution inside Slurm jobs
- NVIDIA Enroot for unprivileged container execution
- MUNGE authentication system
- SSSD for directory service integration (LDAP/AD)
- S6 overlay for process supervision
- Bash and Zsh login shells with a shared set of SUNK aliases (`images/shellrc`)
- Various utilities and tools for cluster management

## Key Components

### Base Configuration

The default image is built from Ubuntu 22.04 with Slurm 25.11.8. The image supports multiple user IDs:

- MUNGE runs as UID/GID 400
- Slurm runs as UID/GID 401

### Custom Patches

Several patches are applied to Slurm to enhance functionality for Kubernetes integration.
See the…

---
repo: "ngodat0103/dev-oops"
name: "dev-oops"
description: "Enterprise-grade infrastructure for a user base of one. Powered by 56 cores and anxiety"
readmeQualityOk: true
url: "https://github.com/ngodat0103/dev-oops"
homepage: "https://stats.uptimerobot.com/R1PeUeBhJM"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [62, 20]
topics: ["ansible", "docker", "kvm", "terraform", "traefik", "prometheus", "kubernetes", "proxmox-ve", "homelab"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-15T11:46:41Z"
lastCommitAt: "2026-09-12T08:03:57Z"
lastReleaseAt: "2026-04-11T16:11:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 78
maintainers: ["ngodat0103"]
openGraphImageUrl: "https://opengraph.githubassets.com/d026a7ccfb6b08fede4a632fc4bc04d755a460303dc7c0fafe8257de56e9d89f/ngodat0103/dev-oops"
---

# Home Lab Infrastructure

> *"Move fast and break things"* -- Mark Zuckerberg
> *"I moved fast. Things are broken."* -- Me, at 3 AM

Private infrastructure repository managing a single-node Proxmox environment that somehow runs production services, a Kubernetes cluster held together by optimism, and more YAML than any human should write in one lifetime.

**Domain:** `datrollout.dev`

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Hardware](#hardware)
- [Network Topology](#network-topology)
- [Compute Inventory](#compute-inventory)
- [Platform Tooling](#platform-tooling)
- [Deployed Services](#deployed-services)
- [The Kubernetes Situation](#the-kubernetes-situation)
- [War Stories (Incidents)](#war-stories-incidents)
- [Storage Architecture](#storage-architecture)
- [Security](#security)
- [Observability](#observability)
- [Backup and Disaster Recovery](#backup-and-disaster-recovery)
- [CI/CD](#cicd)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)

---

## Architecture Overview

The infrastructure follows a hybrid model in active transition: services are being migrated from Docker on ubuntu-server to…

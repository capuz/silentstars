---
repo: "LucaDev/Home"
name: "Home"
description: "This repo is the heart of my home-server setup. It contains all data necessary to recreate it from scratch."
readmeQualityOk: true
url: "https://github.com/LucaDev/Home"
language: "Nix"
languages: ["Nix", "HTML"]
languagePcts: [44, 31]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-06-17T07:26:45Z"
lastCommitAt: "2026-10-26T09:17:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 62
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9600d6cd58bd1780515195a10e7a765bbf41ef6751059d80d33ad8912b358956/LucaDev/Home"
---

# Home

This repository contains the configuration files and scripts for my personal homelab setup.

I use k3s as my lightweight Kubernetes distribution for running containerized applications. FluxCD is employed for continuous deployment and GitOps workflows, while Renovate Bot helps in automating dependency updates.

## Core Components

1. k3s: Lightweight Kubernetes distribution optimized for edge and IoT devices.
2. FluxCD: GitOps operator for Kubernetes.
3. Renovate Bot: Automated dependency update tool.

## Current Applications

```
> tree -d -L 2 apps/
apps/
├── databases
│   ├── barman-cloud-plugin
│   ├── cloudnative-pg
│   ├── mck
│   ├── redis
│   └── shared-pg
├── downloads
│   ├── jellyseerr
│   ├── prowlarr
│   ├── radarr
│   ├── sabnzbd
│   ├── shelfmark
│   └── sonarr
├── flux-system
│   ├── flux-instance
│   ├── flux-operator
│   └── konflate
├── home-automation
│   ├── esphome
│   ├── homeassistant
│   ├── homeassistant-maria
│   ├── homepage
│   ├── matter-server
│   ├── mosquitto
│   ├── n8n
│   ├── whisper
│   └── zigbee2mqtt
├── kube-system
│   ├── amd-k8s-plugin
│   ├── cilium
│   ├── hermes-agent
│   └── reloader
├── media
│   ├── aerofoil
│   ├── bento-pdf…

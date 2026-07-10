---
repo: "nklmilojevic/home"
name: "home"
description: "My home setup with all things needed for managing media, home automation and more."
readmeQualityOk: true
url: "https://github.com/nklmilojevic/home"
language: "Just"
languages: ["Just"]
languagePcts: [91]
topics: ["gitops", "k8s-at-home", "kubernetes"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-21T19:58:03Z"
lastCommitAt: "2026-07-10T07:02:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 69
maintainers: ["nklmilojevic", "homelab-crafter[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/032866ebea0051d71b11e424970fce4e2e870952cc3373bb6000dac890b24ce2/nklmilojevic/home"
---

# home

My homelab, as code. Everything I need to run media, home automation, storage and a pile of self-hosted apps - set up so I can rebuild the whole thing from a git clone and a few `just` recipes.

It's a [Talos Linux](https://www.talos.dev/) Kubernetes cluster driven by [Flux](https://fluxcd.io/). I push to `main`, Flux applies it. That's the whole workflow.

## What's running

Around 40 apps across ~15 namespaces. The parts I actually care about:

- **home** - Home Assistant, Zigbee2MQTT, ESPHome, go2rtc, mosquitto - the whole home automation side
- **media** - Plex, Sonarr, Radarr, SABnzbd, qBittorrent, the usual suspects
- **monitoring** - VictoriaMetrics, VictoriaLogs, Vector, Grafana, gatus
- **misc** - Paperless, Forgejo, n8n, Manyfold, Stirling-PDF and a few others

Networking, storage, secrets and backups all run in-cluster too - see below.

## How it works

- **OS** - Talos Linux. Immutable, API-driven, no SSH to babysit.
- **GitOps** - Flux v2 (Flux Operator + FluxInstance). Git is the source of truth, full stop.
- **Apps** - bjw-s [app-template](https://github.com/bjw-s-labs/helm-charts) charts, one OCIRepository per app, Renovate keeps the versions current.
-…

---
repo: "nklmilojevic/home"
name: "home"
description: "My home setup with all things needed for managing media, home automation and more."
readmeQualityOk: true
url: "https://github.com/nklmilojevic/home"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["gitops", "k8s-at-home", "kubernetes", "renovate"]
stars: 16
forks: 0
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-21T19:58:03Z"
lastCommitAt: "2026-10-23T12:04:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["homelab-crafter[bot]", "nklmilojevic"]
openGraphImageUrl: "https://opengraph.githubassets.com/9548f2f3cdd7f08b989c11777f4201505d459672e7bc1a870e868612022c1798/nklmilojevic/home"
---

# home

My homelab, as code. Everything I need to run media, home automation, storage and a pile of self-hosted apps - set up so I can rebuild the whole thing from a git clone and a few `just` recipes.

It's a [Talos Linux](https://www.talos.dev/) Kubernetes cluster driven by [Flux](https://fluxcd.io/). I push to `main`, Flux applies it. That's the whole workflow.

## What's running

Around 40 apps across ~15 namespaces. The parts I actually care about:

- **home** - Home Assistant, Zigbee2MQTT, ESPHome, go2rtc, mosquitto - the whole home automation side
- **media** - Plex, Sonarr, Radarr, SABnzbd, qBittorrent, the usual suspects
- **o11y** - VictoriaMetrics, VictoriaLogs, Vector, Grafana, gatus
- **misc** - Paperless, Forgejo, n8n, Stirling-PDF and a few others

Networking, storage, secrets and backups all run in-cluster too - see below.

## How it works

- **OS** - Talos Linux. Immutable, API-driven, no SSH to babysit.
- **GitOps** - Flux v2 (Flux Operator + FluxInstance). Git is the source of truth, full stop.
- **Apps** - bjw-s [app-template](https://github.com/bjw-s-labs/helm-charts) charts, one OCIRepository per app, Renovate keeps the versions current.
- **Networking** -…

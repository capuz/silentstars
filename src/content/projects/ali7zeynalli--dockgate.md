---
repo: "Ali7Zeynalli/dockgate"
name: "dockgate"
description: "Self-hosted Docker control panel for your local daemon and remote hosts over SSH — manage containers, build & deploy, provision servers, monitor hosts, and get Telegram/email alerts."
readmeQualityOk: true
url: "https://github.com/Ali7Zeynalli/dockgate"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["container-management", "developer-tools", "devops-tools", "docker", "docker-compose", "docker-dashboard", "docker-management", "docker-ui", "homelab", "monitoring"]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-04-02T20:15:33Z"
lastCommitAt: "2026-11-16T11:54:06Z"
lastReleaseAt: "2026-11-09T21:34:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["Ali7Zeynalli"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ac274609b0f2584d72fb79d4a3dd22a3ff7b9a9c64b9f78c84eaf6ddea766c6/Ali7Zeynalli/dockgate"
discussionCount: 0
---

One container, one admin login, every host — local and over SSH.

---

## What is DockGate?

- **Docker** — containers, images, volumes, networks and builds, with logs, a terminal and file editing inside containers.
- **Compose** — create, edit and deploy projects locally or on a remote server, with deploy history and image updates. Replicas, auto-heal, Auto Scaling and updates without downtime — **without Swarm**, your compose files untouched.
- **Docker Swarm** — set up a cluster and move Compose projects and containers to it and back, as well protected as before. Each service gets its own page; published ports are firewalled on every server at once.
- **Servers** — provision, secure (SSH, users, firewall, fail2ban) and monitor any number of hosts over SSH.
- **Alerts** — Telegram, email and webhook, plus an optional Edge agent that keeps alerting — and keeps replicas, healing and Auto Scaling running — when DockGate is offline.
- **Light** — at most 256 MB RAM and 0.5 CPU; plain JavaScript, no build step, works offline.

> DockGate is **single-admin**: one password, full control, no user roles.

---

## Quick Start

```bash
mkdir dockgate && cd dockgate
curl -O…

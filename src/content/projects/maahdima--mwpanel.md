---
repo: "Maahdima/MWPanel"
name: "MWPanel"
description: "mikrotik-wireguard-panel"
readmeQualityOk: true
url: "https://github.com/Maahdima/MWPanel"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [62, 36]
stars: 21
forks: 3
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-06-29T16:05:17Z"
lastCommitAt: "2026-09-10T08:21:11Z"
lastReleaseAt: "2026-08-23T06:00:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 46
maintainers: ["Maahdima"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5c1fafc9ca34b279e20345d06dc583e5453e08821223aee7d186e426261e163/Maahdima/MWPanel"
---

# MWP — MikroTik WireGuard Panel

A self-hosted admin panel for MikroTik WireGuard. Create peers, enforce traffic and bandwidth limits, share configs with QR codes, and watch usage in real time — from a single binary that embeds both the Go API and the React UI.

---

## Table of contents

- [Highlights](#highlights)
- [Screenshots](#screenshots)
- [How it works](#how-it-works)
- [Requirements](#requirements)
- [Getting started](#getting-started)
  - [Binary releases](#binary-releases)
  - [Docker](#docker)
  - [Docker Compose](#docker-compose)
- [Build from source](#build-from-source)
- [Configuration](#configuration)
- [Usage](#usage)
- [Telegram bot](#telegram-bot)
- [TLS and reverse proxies](#tls-and-reverse-proxies)
- [Data and persistence](#data-and-persistence)
- [Background jobs](#background-jobs)
- [API overview](#api-overview)
- [Project structure](#project-structure)
- [Security](#security)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Highlights

- **Peer lifecycle** — create, update, disable, and delete WireGuard peers on MikroTik
- **Keys and configs** — generate key pairs, download `.conf`…

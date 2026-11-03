---
repo: "njordium/npm-native"
name: "npm-native"
description: "Native Bash installer for Nginx Proxy Manager on Debian and Ubuntu — no Docker, no LXC container required. Runs natively with systemd, SQLite, and Let's Encrypt SSL via certbot. The clean community alternative to the official Docker image and the Proxmox Community LXC script. One script, interactive menus, healthcheck dashboard and full test suite."
readmeQualityOk: true
url: "https://github.com/njordium/npm-native"
homepage: "https://nginxproxymanager.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["bash", "certbot", "debian", "installer", "letsencrypt", "nginx-proxy-manager", "reverse-proxy", "selfhosted", "sqlite", "systemd"]
stars: 28
forks: 2
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-03-30T13:39:33Z"
lastCommitAt: "2026-11-03T12:47:29Z"
lastReleaseAt: "2026-11-03T12:47:35Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 36
maintainers: ["khnjrdm", "tjnjrdm", "latent-9"]
openGraphImageUrl: "https://opengraph.githubassets.com/530eaae78fe44c04264110cdbdc1d254f27c2fc23a66a6dfa8fe49ad65d6c5da/njordium/npm-native"
discussionCount: 2
---

**A native Bash installer for [Nginx Proxy Manager](https://nginxproxymanager.com/) on Debian, Ubuntu and Alpine -- no Docker required.**

## Why this exists

Most Nginx Proxy Manager installation guides assume Docker. The official project ships as a Docker image, and the popular [Proxmox Community Scripts](https://community-scripts.github.io/ProxmoxVE/) LXC installer still pulls a Docker image inside the container. If you want NPM running natively on bare Debian or Ubuntu -- managed by systemd, backed by SQLite, with no container layer -- there was no clean, maintained path to get there.

This script fills that gap.

## What it does

- Installs **Nginx Proxy Manager v2.x** (latest release auto-detected) natively on the host OS
- Manages everything with **systemd** (OpenRC on Alpine) -- auto-starts on boot, restarts on failure
- Uses **SQLite** via `better-sqlite3` -- no external database required
- Builds the frontend from source with **pnpm** (v10 and v11 supported) -- no Docker, no pre-built image
- Supports **Debian 12 (Bookworm)**, **Debian 13 (Trixie)**, **Ubuntu 22.04**, **Ubuntu 24.04**, **Ubuntu 25.10**, **Ubuntu 26.04**, **Alpine 3.24**
- Installs and configures…

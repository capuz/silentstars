---
repo: "0x10debug/vps-bootstrap"
name: "vps-bootstrap"
description: "Secure Your VPS in One Command — initialization and security hardening"
readmeQualityOk: true
url: "https://github.com/0x10debug/vps-bootstrap"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:20:30Z"
lastCommitAt: "2026-08-27T05:11:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 14
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c522d2aae6cc0ae7856bea7660b43f616a4dca55ab78e3dc3f0c11aba7afeef/0x10debug/vps-bootstrap"
---

# Secure Your VPS in One Command

A single command to initialize a fresh VPS and harden it for production. Updates the system, creates a non-root user with SSH keys, hardens SSH, configures a firewall, installs CrowdSec intrusion prevention, tunes kernel parameters, enables automatic security updates, and installs Docker — all in one run. Built for Ubuntu, Debian, and Alpine servers.

> **New to VPS security?** This tool applies industry-standard hardening automatically. No need to read a 50-page guide — just run `mb init` and your server goes from bare OS to production-ready in minutes.

## Why This Exists

When you get a fresh VPS, you need to do several things before it's safe to run production services:

1. **Update the system** — patch known vulnerabilities
2. **Create a non-root user** — don't run everything as root
3. **Harden SSH** — disable root login, disable password auth, change the port
4. **Enable a firewall** — only expose ports you actually need
5. **Install intrusion prevention** — block brute-force attacks automatically
6. **Tune the kernel** — optimize for server workloads (BBR, file descriptors, network)
7. **Enable auto-updates** — get security patches…

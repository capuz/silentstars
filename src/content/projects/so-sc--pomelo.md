---
repo: "so-sc/pomelo"
name: "pomelo"
description: "Contest hosting and management platform"
readmeQualityOk: true
url: "https://github.com/so-sc/pomelo"
homepage: "https://pomelo.sosc.org.in/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["contest", "open-source", "programming", "self-hosting"]
stars: 14
forks: 26
openIssues: 3
closedIssues: 38
watchers: 3
contributors: 44
recentReleases: 4
createdAt: "2025-02-22T10:32:14Z"
lastCommitAt: "2026-11-01T10:43:22Z"
lastReleaseAt: "2026-08-28T16:18:54Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 90
maintainers: ["JustModo", "Rajaykumar12", "mrkushalsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/95118d3cfa9d8106bedaf127a30fc3be005a6a4bef4436b3c35d1df498863dfe/so-sc/pomelo"
---

## Description
Pomelo is a self-hosted platform designed to manage programming contests, technical assessments, and hackathons. It integrates a Next.js frontend, an Express backend, and the Citron sandboxed code execution engine to provide a complete environment for coding events. The platform is designed for privacy and control, allowing organizers to retain full data sovereignty while operating their own infrastructure.

The system utilizes an automated deployment model via a custom daemon and CLI, simplifying the provisioning of underlying services such as Docker containers and reverse proxies. It provides an administrative interface for managing application state, environment configurations, and container health.

## Installation

Run the following command to download and execute the installation script with root privileges:

```bash
curl -fsSL pomelo.sosc.org.in/install.sh | sudo bash
```

## Usage

Interact with the platform using the global command-line interface.

```bash
pomelo start
pomelo stop
pomelo status
pomelo logs
pomelo ui
```

The administrative interface is accessible via a web browser on port 8462.

## Candidate feedback

After submitting a test, candidates can…

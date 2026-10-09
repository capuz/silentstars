---
repo: "constructorfabric/studio-web"
name: "studio-web"
description: "Studio web server - backend, frontend, installer"
readmeQualityOk: true
url: "https://github.com/constructorfabric/studio-web"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 28]
stars: 25
forks: 6
openIssues: 127
closedIssues: 37
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-07-28T10:23:29Z"
lastCommitAt: "2026-10-09T10:51:13Z"
lastReleaseAt: "2026-08-11T20:13:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 42
maintainers: ["AndrejK666", "MarinaLitueva", "vasylcf"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9a2c39695eda25e6fde0a452bf3161bc84a1e8445635cf26e78731346c97d77/constructorfabric/studio-web"
---

# Constructor Studio Web

> The server side of Constructor Studio — portal, backend, login and IDE sessions.

**Constructor Studio Web** is the runtime that hosts
[Constructor Studio](https://github.com/constructorfabric/studio) for a team:
a web portal where people organise their projects and repositories, a Rust
backend assembled from [Constructor Gears](https://github.com/constructorfabric/gears-rust),
Keycloak-based sign-in, and a Theia IDE session per workspace where the work
itself happens, with AI agents alongside. The same IDE also ships as a desktop
application that signs in to a Studio Web deployment.

This repository holds every component of that stack, the Docker Compose file
that runs it on one machine, and the Helm chart and pipeline that deploy it to
Kubernetes.

- [What it provides](#what-it-provides)
- [Architecture](#architecture)
- [Repository structure](#repository-structure)
- [Quick start](#quick-start)
- [Deployment](#deployment)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)
- [Contributing](#contributing) · [Security](#security) · [License](#license)

---

## What it provides

| For | What they get |…

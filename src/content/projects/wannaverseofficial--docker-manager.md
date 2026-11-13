---
repo: "WannaverseOfficial/docker-manager"
name: "docker-manager"
description: "Free open-source web management software for Docker"
readmeQualityOk: true
url: "https://github.com/WannaverseOfficial/docker-manager"
homepage: "https://wannaverseofficial.github.io/docker-manager/"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [70, 23]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-08T19:45:23Z"
lastCommitAt: "2026-11-13T18:34:13Z"
lastReleaseAt: "2026-06-04T21:06:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 55
maintainers: ["surajkumar", "ankitsmt211"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9589b1bdf2de05fa74e44a75e8cc65f7e807c36dda991f8e596c907d5a58e3f/WannaverseOfficial/docker-manager"
---

# Wannaverse Docker Manager

A free, open-source, self-hosted web interface for running Docker servers: containers, Compose stacks, HTTPS
ingress, PostgreSQL databases, a Grafana observability stack, a private image registry and security scanning, in
one container.

Built for developers, homelab owners and small teams who want a complete tool without subscriptions, licence
fees or feature gates.

## Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Quick start](#quick-start)
- [Signing in](#signing-in)
- [Configuration](#configuration)
- [Configuration as code](#configuration-as-code)
- [Rollouts: blue/green and canary](#rollouts-bluegreen-and-canary)
- [Databases](#databases)
- [DNS](#dns)
- [Observability](#observability)
- [Private registry](#private-registry)
- [Security scanning](#security-scanning)
- [Remote hosts](#remote-hosts)
- [Upgrading from 1.x](#upgrading-from-1x)
- [Development](#development)
- [License](#license)

## Features

**Run**

- Containers: start, stop, restart, logs, a shell, stats, and editing that keeps volumes and puts the original
  back if the new container doesn't start.
- Compose stacks: create, edit and redeploy, with every deploy…

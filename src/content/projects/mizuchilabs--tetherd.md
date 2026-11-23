---
repo: "MizuchiLabs/tetherd"
name: "tetherd"
description: "Docker agent for Tether. Reads Traefik labels on a worker server and reports routes to the hub."
readmeQualityOk: true
url: "https://github.com/MizuchiLabs/tetherd"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent", "traefik", "golang", "docker", "homelab", "reverse-proxy", "self-hosted", "service-discovery"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-04-20T20:27:07Z"
lastCommitAt: "2026-11-23T10:27:08Z"
lastReleaseAt: "2026-09-11T08:22:02Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 64
maintainers: ["renovate[bot]", "d34dscene"]
openGraphImageUrl: "https://opengraph.githubassets.com/eef86ac738fe1f5939fb1e46ba48163f3f80f11136f8e28e8fcf78507fb972b8/MizuchiLabs/tetherd"
fundingLinks: ["KO_FI:https://ko-fi.com/d34dscene"]
---

# Tetherd

**Tetherd** is the lightweight agent that runs on your worker servers. It watches your Docker containers and tells the central [Tether](https://github.com/MizuchiLabs/tether) server where they are so Traefik can find them.

## How it Works

1. You run Tetherd on every server where you have Docker containers.
2. Tetherd looks at your containers' labels (like `traefik.http.routers.myapp.rule`).
3. It automatically detects the server's IP address.
4. It sends this information to your central **Tether** server.

This allows a single Traefik instance on a different machine to route traffic to these containers seamlessly.

## Quick Start

Run Tetherd on your worker server:

```yaml
services:
  tetherd:
    image: ghcr.io/mizuchilabs/tetherd:latest
    network_mode: host # Highly recommended for IP detection
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    environment:
      - TETHERD_SERVER=http://<TETHER_SERVER_IP>:3000
      - TETHERD_TOKEN=your-secret-password
    restart: unless-stopped
```

## Deploying an App

When you deploy an app on this worker server, just add standard Traefik labels. Tetherd handles the rest:

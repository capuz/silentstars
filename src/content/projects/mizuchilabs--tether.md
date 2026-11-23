---
repo: "MizuchiLabs/tether"
name: "tether"
description: "One Traefik config for many servers. Agents report their Docker apps, Traefik routes to all of them."
readmeQualityOk: true
url: "https://github.com/MizuchiLabs/tether"
language: "Svelte"
languages: ["Svelte", "Go"]
languagePcts: [57, 30]
topics: ["homelab", "reverse-proxy", "traefik", "docker", "golang", "self-hosted", "service-discovery", "svelte"]
stars: 42
forks: 0
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-26T21:56:31Z"
lastCommitAt: "2026-11-23T10:27:05Z"
lastReleaseAt: "2026-08-21T04:24:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 32
maintainers: ["renovate[bot]", "d34dscene"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e937b2b259265808f1733e88a02d98333a9ba1b636b8158c1567712483b269e/MizuchiLabs/tether"
fundingLinks: ["KO_FI:https://ko-fi.com/d34dscene"]
---

# Tether

**Tether** is the central hub for your distributed Traefik setup. It gathers information from all your servers and tells Traefik exactly how to route traffic to your apps.

Think of it as a **central operator**: multiple servers (running [Tetherd](https://github.com/MizuchiLabs/tetherd)) tell Tether which apps are running, and Tether gives Traefik a single, master list of all of them.

## Why use Tether?

If you have multiple physical servers or VPS instances but don't want the complexity of Kubernetes or Docker Swarm, Tether is for you.

- **One Public IP:** Point your router/firewall (Port 443) to just **one** server running Traefik.
- **Auto-Discovery:** Apps on other servers are automatically found and added to Traefik.
- **Simple:** No complex networking, no KV stores (Consul/Redis). Each agent keeps one WebSocket connection to Tether and pushes changes over it.

## The "One IP, Many Servers" Setup

Imagine you have 3 servers, but only one public WAN connection.

---
repo: "syhlion/gusher.cluster"
name: "gusher.cluster"
description: "gusher plus version, support cluster"
url: "https://github.com/syhlion/gusher.cluster"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["websocket-server", "support-cluster", "docker", "websocket", "golang-application"]
stars: 10
forks: 0
openIssues: 4
closedIssues: 7
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2016-07-15T06:57:05Z"
lastCommitAt: "2026-06-25T01:37:17Z"
lastReleaseAt: "2018-03-15T07:58:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 57
maintainers: ["syhlion"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e6275b1045ce1ecd1917e9537dd4d7a408288d1493e452cc6985df0dc8a500/syhlion/gusher.cluster"
---

# Gusher.Cluster

Self-hosted realtime push service (Pusher-style). Browsers hold a **WebSocket**
and subscribe to channels; backends **POST** to push a message into a channel.
Horizontally scalable, **backed by NATS — no Redis**.

📐 **Architecture**: [English](docs/ARCHITECTURE.md) · [繁體中文](docs/ARCHITECTURE.zh-TW.md)

## How it works

- **slave** — holds the WebSocket connections, verifies the JWT locally, and
  fans out messages to subscribers.
- **master** — a stateless REST API to **push** messages and **query** presence.
- **NATS** — carries messages between nodes (bus) and answers presence queries
  (request/reply). No Redis, no token store, no decode service.

```
client ──ws──▶ slave ──subscribe──▶  NATS  ◀──publish── master ◀──POST── backend
```

## Requirements

- **NATS** (the only backend) — `nats-server` 2.10+
- An **RSA key pair** — master/slave verify the JWT with the **public key**;
  your own auth service signs JWTs with the private key.

## Run

### docker-compose (quickest)

Put your `public.pem` next to the compose file, then:

```sh
docker compose -f docker-compose/docker-compose.yml up --build
```

Brings up `nats` + `gusher-master` (`:7777`) +…

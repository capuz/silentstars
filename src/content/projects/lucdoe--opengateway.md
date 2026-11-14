---
repo: "lucdoe/opengateway"
name: "opengateway"
description: "API Gateway written in Go for small to mid-sized projects. Easy setup, extendable with plugins, and fully customisable."
readmeQualityOk: true
url: "https://github.com/lucdoe/opengateway"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["api-gateway", "go", "lightweight", "yaml-configuration"]
stars: 6
forks: 0
openIssues: 4
closedIssues: 30
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-05-05T21:56:05Z"
lastCommitAt: "2026-11-14T22:01:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 69
maintainers: ["lucdoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dfe1ba1133716ef9d223206020ea2fce9c2c98aa367b70b85d268ca6d550134/lucdoe/opengateway"
discussionCount: 1
---

# OpenGateway

A lightweight, open-source API gateway written in Go for small to mid-sized projects. You describe your services and the plugins they need in one YAML file; the gateway routes requests to them. No vendor lock-in, no control plane.

See the [architecture overview](https://github.com/lucdoe/opengateway/blob/HEAD/docs/README.md) for how it is built.

## Quick start

```bash
git clone https://github.com/lucdoe/opengateway.git
cd opengateway
```

Over SSH, clone `git@github.com:lucdoe/opengateway.git` instead.

Edit [`cmd/opengateway/config.yaml`](https://github.com/lucdoe/opengateway/blob/HEAD/cmd/opengateway/config.yaml) to describe your services, then start the gateway on port 4000 in one of two ways.

**Docker** (needs Docker with Compose, for example [Docker Desktop](https://www.docker.com/products/docker-desktop/)). Starts the gateway and Redis, and sets `STORE_TYPE=redis`:

```bash
docker compose up --build
```

The config file is copied into the image, so rebuild after changing it.

**Go** (needs Go 1.22 or newer; nothing else unless you choose the `redis` store):

```bash
go run ./cmd/opengateway
```

## Configuration

Everything is configured in `config.yaml`.…

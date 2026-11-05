---
repo: "Knuckles-Team/container-manager-mcp"
name: "container-manager-mcp"
description: "Manage containers on docker, podman, compose, and docker swarm through an MCP Server for Agentic AI"
readmeQualityOk: true
url: "https://github.com/Knuckles-Team/container-manager-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "ai", "compose", "container", "docker", "dockers-compose", "dockerswarm", "mcp-server", "podman", "podman-compose"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-09-09T22:25:57Z"
lastCommitAt: "2026-11-05T14:05:26Z"
lastReleaseAt: "2025-09-10T03:08:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 83
maintainers: ["Knucklessg1", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/046c05ed9db626a95fa8360ec3ac4b55a5cf4070a93116ad1973243977bb7dda/Knuckles-Team/container-manager-mcp"
---

# Container Manager Mcp
## CLI or API | MCP

> **Documentation** — Installation, deployment, usage across the API, CLI, MCP, and
> A2A agent interfaces, and the multi-host control plane are maintained in the
> [official documentation](https://knuckles-team.github.io/container-manager-mcp/).

---

## Overview

**Container Manager Mcp** is a production-grade Agent and Model Context Protocol (MCP) server designed to interface directly with Container Manager - manage Docker, Docker Swarm, Podman, **and Kubernetes** containers and workloads. MCP+A2A Servers By default!.

**Full coverage across all three engines:** Docker (incl. Swarm/service/stack/config/secret/node
operations via `cm_docker_swarm`), Podman (incl. pod/kube operations, `generate`/`play kube`, checkpoint/restore
via `cm_podman`), and a **complete Kubernetes surface** (RKE2 / k3s / vanilla) spanning workloads,
config, networking, storage, RBAC, cluster admin, governance, and observability through 8 themed `cm_k8s_*`
tools built on the official `kubernetes` Python client. A `cm_multi_context` tool lets an agent fan out
operations across multiple Docker/Podman/Swarm/Kubernetes contexts in parallel, and `cm_ingest_inventory`…

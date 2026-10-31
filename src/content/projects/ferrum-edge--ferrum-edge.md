---
repo: "ferrum-edge/ferrum-edge"
name: "ferrum-edge"
description: "Ferrum Edge - API Gateway / AI Gateway / Mesh"
readmeQualityOk: true
url: "https://github.com/ferrum-edge/ferrum-edge"
homepage: "https://ferrumedge.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-gateway", "api", "api-gateway", "loadbalancing", "mesh", "networking", "security"]
stars: 8
forks: 4
openIssues: 3
closedIssues: 2613
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-03-08T00:36:44Z"
lastCommitAt: "2026-10-31T07:46:00Z"
lastReleaseAt: "2026-10-06T17:04:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 78
maintainers: ["jeremyjpj0916", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f2970be642a2ce275f03c8a8748c45446ab55a9f0fb348fa9e8cf90c30299b9/ferrum-edge/ferrum-edge"
discussionCount: 0
---

> **Active build-out:** Breaking changes are expected. Core database changes
> are folded into the initial schema; recreate development databases when it
> changes. See the [build-out policy](https://github.com/ferrum-edge/ferrum-edge/blob/HEAD/docs/migrations.md#build-out-schema-policy).

## Overview

Ferrum Edge is a lightweight, extensible edge proxy designed for modern microservice architectures. It provides dynamic routing, multi-protocol support, a robust plugin system, and multiple deployment topologies — from single-node file-based setups to distributed Control Plane / Data Plane architectures.

**Key highlights:**

- **Multi-protocol**: HTTP/1.1, HTTP/2, HTTP/3 (QUIC), WebSocket, gRPC, raw TCP/UDP with TLS/DTLS
- **Built-in plugin system**: Authentication, authorization, OPA policy decisions, adaptive concurrency, WAF content threat detection, OpenAPI contract validation, rate limiting, fault injection, compression, response security headers, SSE stream handling, transformation, response mocking, spec exposure, serverless functions, AI/LLM-specific plugins (including AI federation for multi-provider routing), MCP / Agent Tool Gateway routing, A2A agent gateway…

---
repo: "SaaSy-Solutions/mockforge"
name: "mockforge"
description: "Open-source API mock server for REST, gRPC, GraphQL, WebSocket, Kafka, MQTT and more"
readmeQualityOk: true
url: "https://github.com/SaaSy-Solutions/mockforge"
homepage: "https://mockforge.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["api-mocking", "api-testing", "contract-testing", "graphql", "grpc", "http", "kafka", "mock-server", "mocking", "mqtt"]
stars: 12
forks: 3
openIssues: 45
closedIssues: 381
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-09T02:23:23Z"
lastCommitAt: "2026-10-26T03:02:27Z"
lastReleaseAt: "2026-01-04T23:13:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 77
maintainers: ["rclanan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df05c783012e1822f0e20d9acdbd894bdacd3581855452f399ef5adcf3a218c/SaaSy-Solutions/mockforge"
discussionCount: 3
---

# MockForge

MockForge is a comprehensive mocking framework for APIs, gRPC services, and WebSockets. It provides a unified interface for creating, managing, and deploying mock servers across different protocols with advanced data generation capabilities.

## Your first HTTP mock

With Docker installed, this one command starts the bundled OpenAPI example:

```bash
docker run --rm -p 3000:3000 ghcr.io/saasy-solutions/mockforge:latest serve --spec examples/openapi-demo.json --http-port 3000
```

In another terminal, run `curl http://localhost:3000/users` to receive a JSON users array.
Use your own spec with `mockforge serve --spec api.yaml`, or scaffold a runnable example with `mockforge init my-api`.

**Measured: 9.2 seconds from an uncached image pull to the first verified response** in a fresh Linux Docker environment. Docker installation and daemon preparation are excluded. [Measurement and reproducible check](https://github.com/SaaSy-Solutions/mockforge/blob/HEAD/book/src/getting-started/first-mock-benchmark.md).

## 🏛️ The Five Pillars of MockForge

MockForge is built on five foundational pillars that guide every feature: **[Reality]**, **[Contracts]**, **[DevX]**,…

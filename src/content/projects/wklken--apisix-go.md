---
repo: "wklken/apisix-go"
name: "apisix-go"
description: "An open-source, Go-native data plane compatible with Apache APISIX, designed for simple distribution, operations, and edge gateway deployments."
readmeQualityOk: true
url: "https://github.com/wklken/apisix-go"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["apisix", "ai-gateway", "api", "api-gateway", "api-management", "cloud-native", "llm-gateway", "microservice", "openapi", "reverse-proxy"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-03-06T13:44:40Z"
lastCommitAt: "2026-08-30T00:45:09Z"
lastReleaseAt: "2026-08-19T00:18:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 64
maintainers: ["wklken"]
openGraphImageUrl: "https://opengraph.githubassets.com/905d9a4223a477f6576d0b7dc0ca19c6a46b87bb4f46b0399598d327de45f999/wklken/apisix-go"
---

# apisix-go

[English](https://github.com/wklken/apisix-go/blob/HEAD/README.md) | [简体中文](https://github.com/wklken/apisix-go/blob/HEAD/README.zh-CN.md)

**apisix-go is an open-source, Go-native implementation of the [Apache APISIX](https://github.com/apache/apisix) data plane.** It targets APISIX 3.17 compatibility and is designed for straightforward distribution, operation, and extension across API and edge gateway deployments.

> [!WARNING]
> apisix-go is under active development and is not ready for production use.

## Why apisix-go?

- **Simple delivery:** build and distribute a single Go binary or container image.
- **Compact artifacts:** reference Linux/arm64 builds produce a roughly 45 MiB stripped binary and a 60 MiB Alpine runtime image.
- **Flexible configuration:** use etcd for traditional deployments or local YAML/JSON files for standalone data-plane deployments.
- **Familiar APISIX model:** configure routes, services, upstreams, consumers, SSL, stream routes, and plugins with APISIX resource shapes.
- **Go-native ecosystem:** extend traffic handling with Go middleware and plugins, with built-in logging, metrics, and tracing integrations.

## Quick start

From the…

---
repo: "reshaprio/reshapr-helm-charts"
name: "reshapr-helm-charts"
description: "Helm Charts for installing reShapr components on Kubernetes"
readmeQualityOk: true
url: "https://github.com/reshaprio/reshapr-helm-charts"
homepage: "https://reshapr.io"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [52, 48]
topics: ["agent-tools", "agentic-ai", "ai-agents", "ai-gateway", "ai-infrastructure", "ai-integration", "ai-native", "context-optimization", "context-window", "context-window-optimization"]
stars: 6
forks: 3
openIssues: 2
closedIssues: 37
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2026-03-04T10:44:21Z"
lastCommitAt: "2026-09-03T08:13:50Z"
lastReleaseAt: "2026-08-25T13:55:26Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 71
maintainers: ["lbroudoux", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2472af1dbc8a9635387fff393fcf8e3a146267ee35154636a4be44692be2a6f6/reshaprio/reshapr-helm-charts"
---

# reShapr Helm Charts

Helm Charts for installing reShapr components on Kubernetes

## Build Status

Latest released version is `0.0.10`.

Current development version is `0.0.11`.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [How to use them?](#how-to-use-them)
  - [reShapr control plane](#reshapr-control-plane)
  - [reShapr proxy](#reshapr-proxy)
  - [reShapr UI](#reshapr-ui)
  - [reShapr controllers](#reshapr-controllers)
- [Verifying chart signatures](#verifying-chart-signatures)
- [Upgrading](#upgrading)
- [Uninstalling](#uninstalling)

## Overview

These charts install the runtime components of [reShapr](https://github.com/reshaprio/reshapr), a
no-code MCP (Model Context Protocol) server that turns REST/GraphQL/gRPC APIs into LLM-friendly
tools. Each component ships as its own chart so you can install only what you need.

```mermaid
flowchart LR
    Client[MCP Client / LLM] --> PROXY[reShapr Proxy<br/>data plane]
    UI[reShapr Web UI] --> CP[reShapr Control Plane]
    CTRL[reShapr Controllers<br/>Operator + Admission Webhook] --> CP
    PROXY --> CP
    CP --> DB[(PostgreSQL)]
    PROXY --> API[Backend REST / GraphQL / gRPC APIs]
```…

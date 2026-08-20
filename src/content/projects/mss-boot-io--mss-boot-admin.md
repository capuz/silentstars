---
repo: "mss-boot-io/mss-boot-admin"
name: "mss-boot-admin"
description: "Governance-first Go admin backend with RBAC, API registry, configuration, i18n, operations, and AI-assisted OSS maintenance."
readmeQualityOk: true
url: "https://github.com/mss-boot-io/mss-boot-admin"
homepage: "https://docs.mss-boot-io.top"
language: "Go"
languages: ["Go"]
languagePcts: [72]
topics: ["antd", "go-admin", "mss-boot", "mss-boot-admin", "ant-design", "ant-design-pro", "admin", "go", "configuration", "governance"]
stars: 72
forks: 14
openIssues: 16
closedIssues: 38
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-05-01T11:39:10Z"
lastCommitAt: "2026-08-20T04:08:10Z"
lastReleaseAt: "2024-05-15T13:33:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["SullivanPrime", "dependabot[bot]", "lwnmengjing"]
openGraphImageUrl: "https://opengraph.githubassets.com/55f499f206d6454f486a6c84f800163ceb58b0dbf3b49f6ffaa79a5264a44884/mss-boot-io/mss-boot-admin"
discussionCount: 10
---

# mss-boot-admin

English | [简体中文](https://github.com/mss-boot-io/mss-boot-admin/blob/HEAD/README.zh-CN.md)

## Introduction

> `mss-boot-admin` is an Agent-native management-system development foundation. It combines a production-oriented Gin + React + Ant Design reference application with machine-readable project contracts, Feature and AdminModule specifications, deterministic full-stack generation, repository Skills, a project MCP server, reproducible setup, change-aware verification, Agent Evals, versioned application Blueprints, and conflict-aware downstream upgrades.

> The runtime admin platform still provides identity, RBAC, organization, configuration, audit, notification, task, internationalization, storage, WebSocket, and observability capabilities. Runtime dynamic models, virtual CRUD, and browser-facing code generation have been removed; new business modules use development-time specifications, the offline deterministic `cmd/mss` generator, and compiled vertical modules.

## Agent-native workflow

```text
business intent
  → Feature and Acceptance contract
  → AdminModule contract
  → deterministic generation
  → Agent implements non-template business rules
  →…

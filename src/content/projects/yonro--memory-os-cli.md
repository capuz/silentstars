---
repo: "yonro/memory-os-cli"
name: "memory-os-cli"
description: "Memory OS CLI and npm package"
readmeQualityOk: true
url: "https://github.com/yonro/memory-os-cli"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["ai-memory", "mcp", "mcp-server", "model-context-protocol", "streamable-http"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-06T06:09:59Z"
lastCommitAt: "2026-09-24T08:40:58Z"
lastReleaseAt: "2026-06-01T17:32:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["yunze7373", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/1631e8c475633326a0f164530e82db5e1a1f6cb1e55b1a2f3b2284e4a173ef5e/yonro/memory-os-cli"
---

# XMemo CLI

**One private memory layer for every AI agent.**

Install, authenticate, diagnose, and connect XMemo across editors,
CLIs, and autonomous agents from one production-ready command line.

[English](https://github.com/yonro/memory-os-cli/blob/HEAD/README.md) · [简体中文](https://github.com/yonro/memory-os-cli/blob/HEAD/README_CN.md)

[Quick start](#quick-start) · [Integrations](#supported-integrations) · [Connection modes](#connection-modes) · [Commands](#command-reference) · [Security](#security-by-default)

---

`@xmemo/client` is the official control plane for connecting AI tools to
[XMemo](https://xmemo.dev). It makes setup repeatable, keeps credentials out of
project files, and gives every supported client a consistent path to durable,
user-owned memory.

The package is deliberately small: the CLI runtime, safe client configuration,
behavior profiles, XMemo skills, and marketplace metadata. Server code,
databases, deployment files, logs, and internal operations remain outside the
npm distribution.

## Architecture

| | |
| --- | --- |
| **Package** | [`@xmemo/client`](https://www.npmjs.com/package/@xmemo/client) |
| **Primary command** | `xmemo` |
| **Local MCP…

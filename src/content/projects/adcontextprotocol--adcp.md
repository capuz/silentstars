---
repo: "adcontextprotocol/adcp"
name: "adcp"
description: "Docs and reference implementation for the Ad Context Protocol"
readmeQualityOk: true
url: "https://github.com/adcontextprotocol/adcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 261
forks: 91
openIssues: 456
closedIssues: 2283
watchers: 13
contributors: 44
recentReleases: 0
createdAt: "2025-07-19T12:56:11Z"
lastCommitAt: "2026-11-06T13:20:13Z"
lastReleaseAt: "2026-04-28T12:44:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 40
maintainers: ["bokelley", "aao-release-bot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1022611643/181a6f3b-0e8a-44f3-9bfd-8d8e7dc0751e"
discussionCount: 7
---

# AdCP - Advertising Context Protocol

**Open standard for advertising automation across negotiation and serve-time decisioning**

AdCP is an open standard that enables AI agents to discover inventory, buy media, build creatives, activate audiences, manage accounts, and activate pre-negotiated packages at serve time across advertising platforms. Planning-time tasks use [MCP](https://modelcontextprotocol.io) and [A2A](https://a2a-protocol.org/) transports; serve-time decisions use the Trusted Match HTTP profile where the latency budget is impression-time.

## Documentation

**[docs.adcontextprotocol.org](https://docs.adcontextprotocol.org)** — Full protocol specification, integration guides, and task reference.

## Protocol layers

AdCP is one protocol spanning two layers:

| Layer | Protocol surfaces | Purpose |
|-------|-------------------|---------|
| **Negotiation layer** | Media Buy, Creative, Signals, Accounts, Governance, Brand, Sponsored Intelligence | Discovery, planning, commercial setup, creative preparation, audience activation, governance, and reporting |
| **Decisioning and serving layer** | Trusted Match Protocol (Context Match, Identity Match) | Serve-time…

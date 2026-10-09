---
repo: "agentclientprotocol/kotlin-sdk"
name: "kotlin-sdk"
description: "Agent Client Protocol Kotlin SDK"
readmeQualityOk: true
url: "https://github.com/agentclientprotocol/kotlin-sdk"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 95
forks: 29
openIssues: 16
closedIssues: 20
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2025-09-30T12:11:14Z"
lastCommitAt: "2026-10-09T10:51:28Z"
lastReleaseAt: "2025-11-10T16:07:35Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 44
maintainers: ["anna239", "EugeneTheDev", "Rizzen"]
openGraphImageUrl: "https://opengraph.githubassets.com/add0eddef1aaa1f1f0ebf6153ac2da4b2ff1e01a1201922c995bee51ef848472/agentclientprotocol/kotlin-sdk"
---

# ACP Kotlin SDK

Modern Kotlin toolkit for building software that speaks the [Agent Client Protocol (ACP)](https://agentclientprotocol.com). Ship ACP-compliant agents, clients, and transports for IDE plugins, CLIs, backend services, or any JVM host—all with one cohesive SDK.

## What is ACP Kotlin SDK?

ACP standardises how AI agents and clients exchange messages, negotiate capabilities, and move files. This SDK provides a Kotlin implementation of that spec:

- Type-safe models for every ACP message and capability
- Agent and client connection stacks (JSON-RPC over STDIO)
- Ktor utilities for HTTP/WebSocket transports (optional modules)
- Comprehensive samples demonstrating end-to-end sessions and tool calls

### Common scenarios

- Embed an ACP client in your IDE/plugin to talk to external agents
- Build a headless automation agent that serves ACP prompts and tools
- Prototype new transports with the connection layer and model modules
- Validate your ACP integration using the supplied test utilities

## Modules at a glance

| Module                              | Description                                               | Main packages                              |…

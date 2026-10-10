---
repo: "code-rabi/toolception"
name: "toolception"
description: "Dynamic MCP server toolkit for runtime toolset management with Fastify transport and meta-tools"
readmeQualityOk: true
url: "https://github.com/code-rabi/toolception"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-08-09T09:10:07Z"
lastCommitAt: "2026-10-10T10:04:31Z"
lastReleaseAt: "2026-01-15T09:01:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["claude", "imbenrabi"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd08561a1aaa1b7edf83bf3fcf75fb0aa61618286f673460b3bc64d1f4c5d643/code-rabi/toolception"
---

# Toolception – Dynamic MCP Tooling Library

## Table of Contents

- [When and why to use Toolception](#when-and-why-to-use-toolception)
- [Starter guide](#starter-guide)
- [Static startup](#static-startup)
- [Permission-based starter guide](#permission-based-starter-guide)
- [Permission configuration approaches](#permission-configuration-approaches)
- [Custom HTTP endpoints](#custom-http-endpoints)
- [Per-session context](#per-session-context)
- [API](#api)
  - [createMcpServer](#createmcpserveroptions)
  - [createPermissionBasedMcpServer](#createpermissionbasedmcpserveroptions)
- [Permission-based client integration](#permission-based-client-integration)
- [Permission-based security best practices](#permission-based-security-best-practices)
- [Permission-based common patterns](#permission-based-common-patterns)
- [Client ID lifecycle](#client-id-lifecycle)
- [Session ID lifecycle](#session-id-lifecycle)
- [Tool types](#tool-types)
- [Startup modes](#startup-modes)
- [License](#license)

## When and why to use Toolception

Building MCP servers with dozens or hundreds of tools often harms LLM performance and developer experience:

- **Too many tools overwhelm selection**: Larger…

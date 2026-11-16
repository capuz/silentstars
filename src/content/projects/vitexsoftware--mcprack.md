---
repo: "VitexSoftware/mcprack"
name: "mcprack"
description: "Self-hosted MCP server catalog with credential management via Vaultwarden and per-user config generation."
readmeQualityOk: true
url: "https://github.com/VitexSoftware/mcprack"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2026-07-25T08:28:03Z"
lastCommitAt: "2026-11-16T11:56:05Z"
lastReleaseAt: "2026-11-08T19:30:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Vitexus"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1311812343/3eb3b68b-d1d1-4327-8794-82a98d89df65"
---

# mcprack

**Model Context Protocol (MCP) Self-Service Catalog & Config Generator**

mcprack is a centralized platform for managing and distributing MCP (Model Context Protocol) server configurations across your organization. It solves the problem of how to securely provision AI clients (Claude Desktop, GitHub Copilot, and other MCP-compatible tools) with access to multiple backend services — without hardcoding secrets or requiring manual configuration on each machine.

🔗 **[Try the live demo](https://mcprack.vitexsoftware.com/login?username=demo&password=demo)** (username/password prefilled: `demo` / `demo`)

## What mcprack Does

### The Problem
You have multiple MCP servers (tools that connect AI clients to your services: databases, APIs, knowledge bases, etc.). You want users to:
- Easily discover which servers are available
- Self-serve which ones they need
- Get a ready-to-use config file for their client
- Have credentials managed securely without access to raw secrets

### The Solution
mcprack provides:

1. **Admin UI** — Register MCP servers once, define environment variables and defaults, store secrets in Vaultwarden
2. **User Catalog** — See one aggregate MCP URL and…

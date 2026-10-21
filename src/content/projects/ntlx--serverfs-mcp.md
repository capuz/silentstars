---
repo: "NTLx/ServerFS_MCP"
name: "ServerFS_MCP"
description: "Secure, scoped filesystem MCP server for ChatGPT and other MCP clients — read-only by default, with controlled mutations, binary transfer, native Codex/Claude/Qoder runtimes, generic ACP v1 profiles, and Agent Skills."
originalDescription: "Secure, scoped filesystem MCP server for ChatGPT and other MCP clients — read-only by default, with controlled mutations, binary transfer, native Codex/Claude/Qoder runtimes, generic ACP v1 profiles, and Agent Skills."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NTLx/ServerFS_MCP"
homepage: "https://ntlx.github.io/ServerFS_MCP/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agents", "chatgpt", "docker", "filesystem", "mcp", "mcp-server", "model-context-protocol", "openai", "python", "security"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-18T00:32:07Z"
lastCommitAt: "2026-10-21T23:35:46Z"
lastReleaseAt: "2026-09-25T19:19:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 69
maintainers: ["NTLx"]
openGraphImageUrl: "https://opengraph.githubassets.com/fef8f6be510dab9f43289b56970a65d693498d323020ad8783c8519cacf934f3/NTLx/ServerFS_MCP"
---

# ServerFS MCP

**Simplified Chinese** · [English](https://github.com/NTLx/ServerFS_MCP/blob/HEAD/README_EN.md)

**A secure, standards-first, scope-authorized MCP filesystem server, with optional support for native AI Agent delegation.**

It exposes only the directories you explicitly choose, and stays read-only by default. Restricted file modification, revision-based concurrency protection, bounded binary transfer, and structured Codex / Claude Code / Qoder native runtime or operator-configured ACP Agent delegation can be enabled on demand, only where needed.

**Current stable version: v0.19.0**

**v0.20.0: Implemented release candidate, not yet released.** Linux Streamable HTTP uses a single stateful endpoint, supporting both the legacy `2025-11-25` session lifecycle and modern `2026-07-28` per-request metadata. The pinned-source MCP conformance gate has been integrated. Linux OCI `server.json` / Registry metadata is in preview; OCI + Streamable HTTP installer interoperability is **not yet verified**. The Registry is not a prerequisite for running or installing ServerFS. See [v0.20.0 acceptance…

---
repo: "VarunGore36/toolcage"
name: "toolcage"
description: "Local-first runtime for securely executing AI agent tools, with capability-based authorization, credential isolation, controlled network egress, and tamper-evident audit logs."
readmeQualityOk: true
url: "https://github.com/VarunGore36/toolcage"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-16T12:25:54Z"
lastCommitAt: "2026-11-13T18:38:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["VarunGore36", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1717d90ffbe4f50f45e244fcea144a8ccc4eef73e7105de08d52ff16781a049/VarunGore36/toolcage"
---

**A local-first security runtime for AI agents.** It puts policy enforcement, host-held credentials, controlled egress, isolation, and tamper-evident audit records between an agent and the systems it can affect.

[Quickstart](#quickstart) · [Why toolcage](#why-toolcage) · [Architecture](#architecture) · [Isolation tiers](#isolation-tiers) · [Security invariants](#the-seven-invariants) · [Policy](#policy) · [CLI reference](#cli-reference) · [MCP front door](#mcp-front-door) · [Tests](#tests) · [Status & limits](#status-and-known-limits)

---

## Why toolcage

A sandbox that only stops escapes misses what actually goes wrong with agents. Agents read untrusted content, call third-party tools, and install packages. toolcage is the **control plane** for those actions: it makes each action explicitly allowed, bounded, attributable, and fail-closed when its requirements cannot be enforced.

The failure modes toolcage addresses:

| Risk | What toolcage does about it |
|---|---|
| 🔑 Prompt injection says "send me the key" | The guest **never holds the key**. A host-side broker injects it into requests to allowed destinations only, and strips it from responses. |
| 📦 Poisoned MCP server…

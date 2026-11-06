---
repo: "affinidi-ai/agent-gateway"
name: "agent-gateway"
description: "The control layer for agentic AI. A protocol-aware proxy that applies identity, policy, trust and payment controls to A2A, MCP and DIDComm traffic between callers and agents."
readmeQualityOk: true
url: "https://github.com/affinidi-ai/agent-gateway"
homepage: "https://www.affinidi.com/agent-gateway"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [75, 21]
topics: ["a2a", "agent-gateway", "agentic-ai", "ai-agents", "ai-governance", "ai-security", "authentication", "authorization", "llm-agents", "mcp"]
stars: 17
forks: 6
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 18
recentReleases: 8
createdAt: "2026-09-24T13:21:50Z"
lastCommitAt: "2026-11-06T11:23:12Z"
lastReleaseAt: "2026-11-05T13:56:59Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 54
maintainers: ["adam-affinidi", "YoussefAWasfy", "mohamed-affinidi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f81ed6f34142b92e7382e403edb69ecf76226aa91023a37cfc4cd84fbf94b0f/affinidi-ai/agent-gateway"
---

# Affinidi Trust Fabric - Agent Gateway

_The control layer for agentic AI._

Agent Gateway is an intercepting proxy for AI agents. It sits between callers and the
agents it manages, and applies identity verification, policy evaluation, trust-registry
lookups, and payment controls to traffic in both directions.

It is protocol-aware rather than a generic network proxy: it speaks A2A, MCP, and
DIDComm natively, so it can read and act on agent traffic instead of just forwarding it.

Agent Gateway is part of the Affinidi Trust Fabric, alongside Agent Stream, which governs
the calls agents make to model providers.

> [!IMPORTANT]
> **Project status:** Agent Gateway is under active development. Interfaces and stored
> configuration may change between minor releases. Evaluate its security, privacy,
> availability, and regulatory properties before production use.

## Why use it

- **No changes to your agent code.** Point the caller at the gateway's URL instead of the
  destination. Controls that answer the caller, such as a payment challenge or a consent
  prompt, need the caller to handle that response.
- **One place to enforce access.** Identity, policy, and rate limits live in the…

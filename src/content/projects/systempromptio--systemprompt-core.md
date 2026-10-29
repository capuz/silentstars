---
repo: "systempromptio/systemprompt-core"
name: "systemprompt-core"
description: "AI governance infrastructure for agentic systems. Rust library behind systemprompt.io — MCP, A2A, OAuth2, audit trails, compile-time extensions. Evaluate with systemprompt-template."
readmeQualityOk: true
url: "https://github.com/systempromptio/systemprompt-core"
homepage: "https://systemprompt.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["agent-orchestration", "ai-agents", "llm", "mcp", "oauth2", "rust", "rust-crate", "ai-infrastructure", "a2a", "ai-governance"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-22T19:06:01Z"
lastCommitAt: "2026-10-29T12:25:47Z"
lastReleaseAt: "2026-06-02T09:41:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 77
maintainers: ["Ejb503"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e48707679de73f1eb03b0d298e9b738ce0c62217048ec2c36d8568c8cce9d21/systempromptio/systemprompt-core"
discussionCount: 1
---

# SystemPrompt Core

SystemPrompt Core is the Rust library for a control plane you operate: identity, model access, MCP tool execution, policy and audit, with your domain capabilities compiled alongside them.

[Evaluate](https://github.com/systempromptio/systemprompt-template) · [API docs](https://docs.rs/systemprompt) · [Architecture](https://github.com/systempromptio/systemprompt-core/blob/HEAD/documentation/overview.md) · [Security](https://github.com/systempromptio/systemprompt-core/blob/HEAD/SECURITY.md)

## Capabilities

Connect supported AI clients to your gateway and expose governed MCP tools. Core binds requests to identity, evaluates access and records decisions and usage in PostgreSQL. You operate the runtime, choose the upstream providers and retain the audit data.

| Capability | Interface |
|---|---|
| Identity | OAuth2/OIDC, authenticated sessions and access rules for users and resources. |
| Model gateway | Anthropic-compatible `/v1/messages`, model discovery and configurable upstream routing. |
| MCP and agents | Governed tool access and hosted agents with A2A transport. |
| Enforcement | Scope checks, credential-pattern detection, blocklists and rate limits on…

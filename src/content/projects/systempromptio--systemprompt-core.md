---
repo: "systempromptio/systemprompt-core"
name: "systemprompt-core"
description: "AI governance infrastructure for agentic systems. Rust library behind systemprompt.io — MCP, A2A, OAuth2, audit trails, compile-time extensions. Evaluate with systemprompt-template."
readmeQualityOk: true
url: "https://github.com/systempromptio/systemprompt-core"
homepage: "https://systemprompt.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["agent-orchestration", "ai-agents", "llm", "mcp", "oauth2", "rust", "rust-crate", "ai-infrastructure", "a2a", "ai-governance"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2025-10-22T19:06:01Z"
lastCommitAt: "2026-08-30T00:42:34Z"
lastReleaseAt: "2026-06-02T09:41:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 82
maintainers: ["Ejb503"]
openGraphImageUrl: "https://opengraph.githubassets.com/e84867a20ac14c133a73d7502e62b0b5b84c8307cdb73b7d3df374fc87f037bf/systempromptio/systemprompt-core"
discussionCount: 1
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://systemprompt.io/files/images/logo.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://systemprompt.io/files/images/logo-dark.svg">
</picture>

# systemprompt-core

The governance engine behind the only AI infrastructure you actually own. One Rust binary, one PostgreSQL, every agent and tool call through one audited path.

[**Website**](https://systemprompt.io) · [**Documentation**](https://github.com/systempromptio/systemprompt-core/blob/HEAD/documentation/overview.md) · [**Evaluation template**](https://github.com/systempromptio/systemprompt-template) · [**Discord**](https://discord.gg/wkAbSuPWpr)

</div>

---

## Why this exists

Most teams govern AI one of two ways. They rent a dashboard, and someone else's infrastructure holds their prompts, their keys, and their audit trail. Or they build it themselves, and eighteen months later they are maintaining a distributed system instead of shipping.

This is the third option. systemprompt-core compiles to a single Rust binary you run on your own infrastructure, backed by the only state it has: a PostgreSQL database you own. Every agent, MCP tool…

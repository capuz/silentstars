---
repo: "bitrouter/bitrouter"
name: "bitrouter"
description: "The minimal interpretable model router that learns & adapts to your agent workflows"
readmeQualityOk: true
url: "https://github.com/bitrouter/bitrouter"
homepage: "https://bitrouter.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai-agent", "rust", "agent-guardrails", "agent-harness", "agent-observability", "llm-gateway", "openclaw", "mcp", "claude-code", "openai-compatible"]
stars: 236
forks: 20
openIssues: 23
closedIssues: 181
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-06T20:04:01Z"
lastCommitAt: "2026-10-12T11:15:11Z"
lastReleaseAt: "2026-03-13T22:54:00Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 31
maintainers: ["FrozenArcher404", "SPIKESPIGEL404", "bitrouter-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db5281a15ed6db8894ee01c0105b218db56f41cbf4e888c325abfd6114a075ea/bitrouter/bitrouter"
discussionCount: 1
---

# BitRouter

**The minimal interpretable model router that learns & adapts to your agent workflows.**

Point any OpenAI-compatible agent at your local BitRouter instance, choose `bitrouter/auto`, and keep working.

```diff
- OPENAI_BASE_URL=https://api.openai.com/v1
+ OPENAI_BASE_URL=http://localhost:4356/v1
```

Then set the request model to:

```text
bitrouter/auto
```

BitRouter runs locally and exposes an OpenAI-compatible API, so existing agents and tools can switch over with minimal changes.

You can also give your coding agent the `/bitrouter` skill to install, configure, migrate to, and troubleshoot BitRouter for you:

```bash
npx skills add bitrouter/bitrouter
```

> **[Try BitRouter Cloud →](https://cloud.bitrouter.ai):** Don’t want to run the router locally? Use `https://api.bitrouter.ai/v1` as your base URL instead.

## Core features

### Minimal core. Lightweight & extensible.

One Rust router sits between your agents and every model provider. Extend it
with providers, routing policies, tools, skills, and sub-agents without
rebuilding your workflow around a new agent runtime.

### Interpretable decisions. Under your control.

Routing policy lives in files you own.…

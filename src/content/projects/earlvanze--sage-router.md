---
repo: "earlvanze/sage-router"
name: "sage-router"
description: "Local-first AI model router for serious agents. One endpoint for OpenClaw, Codex, Claude Code, Cursor, Ollama, NVIDIA NIM, and authorized provider fallback."
readmeQualityOk: true
url: "https://github.com/earlvanze/sage-router"
homepage: "https://sagerouter.dev"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [46, 23]
topics: ["ai-agents", "ai-router", "anthropic-compatible", "byok", "llm-router", "local-first", "model-routing", "ollama", "openai-compatible", "sage-router"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-04-11T15:59:19Z"
lastCommitAt: "2026-07-28T14:56:51Z"
lastReleaseAt: "2026-06-04T15:38:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/69ebce4047ee896cc28402f2359c457cdea5d25c05e06e76108fccb0d36c4c9a/earlvanze/sage-router"
---

# Sage Router

**A local-first, OpenAI-compatible router for AI agents.**

Use one endpoint for the model access you authorize: local Ollama, provider
accounts, and hosted Sage Router capacity. The router selects eligible routes,
keeps failures scoped to the affected credential or model, and exposes what
happened.

[Hosted API](https://app.sagerouter.dev/account.html?plan=pro&start=create_key&utm_source=github&utm_medium=readme)
| [Quickstart](https://sagerouter.dev/quickstart?utm_source=github&utm_medium=readme)
| [Getting started](https://github.com/earlvanze/sage-router/blob/HEAD/docs/getting-started.md)
| [Integrations](https://github.com/earlvanze/sage-router/blob/HEAD/docs/integrations/README.md)

## Start here

- **Hosted:** Check [live capacity](https://app.sagerouter.dev/status.html),
  then create an `sk_sage_*` key from the
  [hosted quickstart](https://sagerouter.dev/quickstart). When no hosted
  profile is live, use the self-hosted/BYOK route instead.
- **Self-hosted:** Run the router locally or in Docker with the
  [self-hosted guide](https://github.com/earlvanze/sage-router/blob/HEAD/docs/getting-started.md#self-hosted-router).
- **Agent harnesses:** Configure…

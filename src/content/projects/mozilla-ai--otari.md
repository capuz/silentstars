---
repo: "mozilla-ai/otari"
name: "otari"
description: "Open-source, OpenAI-compatible LLM gateway you run yourself. One endpoint for 40+ providers, with virtual keys, budgets, and usage tracking."
readmeQualityOk: true
url: "https://github.com/mozilla-ai/otari"
homepage: "https://otari.ai/docs/gateway"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 38]
topics: ["ai", "gateway", "llm", "ai-gateway", "anthropic", "api-key-management", "budgets", "cost-tracking", "litellm-alternative", "llm-gateway"]
stars: 481
forks: 56
openIssues: 186
closedIssues: 369
watchers: 4
contributors: 35
recentReleases: 10
createdAt: "2026-04-02T09:42:10Z"
lastCommitAt: "2026-09-21T09:14:47Z"
lastReleaseAt: "2026-09-17T14:14:30Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 92
undervaluedScore: 28
maintainers: ["khaledosman", "peteski22", "tbille"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1199379933/3fab2474-bec2-48b7-a275-86d2646109f5"
discussionCount: 2
---

</p>

**An OpenAI-compatible LLM gateway you own and run.**

Route one endpoint to 40+ providers, issue virtual keys, enforce budgets, and
track usage.

[Docs](https://github.com/mozilla-ai/otari/blob/HEAD/docs/index.md) · [otari.ai](https://otari.ai) ·
[Launch blog](https://blog.mozilla.ai/otari-own-your-ai-stack/) ·
[Discord](https://discord.gg/ZfZPfTdtSe)

</div>

</p>

Otari sits between your applications and model providers. It authenticates
requests, resolves provider credentials, enforces budgets before dispatch, and
records usage afterwards. Provider calls go through
[any-llm](https://github.com/mozilla-ai/any-llm).

Run Otari standalone with your own database and provider keys, or connect a data
plane to [otari.ai](https://otari.ai).

## Why Otari

- One OpenAI and Anthropic-compatible endpoint for many providers
- Provider credentials stay behind the gateway
- Revocable API keys with user, workspace, and model scope
- Budget checks before spend and usage records after settlement
- Local routing policies for failover, weighting, and learned selection
- Optional code execution, web search, MCP, guardrails, and file understanding

## Quickstart

Run an ephemeral standalone…

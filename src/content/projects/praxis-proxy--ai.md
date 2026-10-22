---
repo: "praxis-proxy/ai"
name: "ai"
description: "AI Gateway"
readmeQualityOk: true
url: "https://github.com/praxis-proxy/ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agentic", "ai", "inference", "networking", "proxy", "rust", "anthropic", "anthropic-api", "anthropic-claude", "openai-api"]
stars: 34
forks: 64
openIssues: 376
closedIssues: 545
watchers: 1
contributors: 52
recentReleases: 8
createdAt: "2026-06-30T20:28:45Z"
lastCommitAt: "2026-10-22T08:51:48Z"
lastReleaseAt: "2026-10-16T14:03:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 91
undervaluedScore: 53
maintainers: ["leseb", "shaneutt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/348440e017364c6538715a4f7b188b4a6307e273d8d00d4ec5a7495132fb43a4/praxis-proxy/ai"
---

**Praxis AI is an AI gateway built on
[Praxis](https://github.com/praxis-proxy/praxis).** It brings provider-aware
routing, protocol translation, stateful OpenAI APIs, and agent traffic into a
configurable proxy. Clients keep their API shape while the gateway selects
backends and applies policy.

## What can it do?

- **Route by what a request contains.** Classify OpenAI Responses, Chat
  Completions, and Anthropic Messages traffic; select backends by API format,
  model, or MCP tool name. See the
  [unified gateway](https://github.com/praxis-proxy/ai/blob/HEAD/examples/configs/anthropic/unified-gateway.yaml) and
  [intelligent routing](https://github.com/praxis-proxy/ai/blob/HEAD/examples/configs/intelligent-route-all-capabilities.yaml)
  examples.
- **Proxy or translate provider APIs.** Forward native provider traffic or
  serve Anthropic Messages and OpenAI Responses clients from Chat
  Completions-compatible backends, including streaming responses. See the
  [Anthropic](https://github.com/praxis-proxy/ai/blob/HEAD/examples/configs/anthropic/messages-to-openai.yaml)
  and…

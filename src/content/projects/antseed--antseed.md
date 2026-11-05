---
repo: "Antseed/antseed"
name: "antseed"
description: "AntSeed P2P AI Network - An open market for AI inference. No gatekeepers."
readmeQualityOk: true
url: "https://github.com/Antseed/antseed"
homepage: "https://antseed.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["inference", "llm", "p2p", "privacy", "decentralized", "dht"]
stars: 133
forks: 51
openIssues: 76
closedIssues: 199
watchers: 0
contributors: 33
recentReleases: 0
createdAt: "2026-02-24T09:01:29Z"
lastCommitAt: "2026-11-05T14:05:15Z"
lastReleaseAt: "2026-03-17T21:59:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 94
undervaluedScore: 38
maintainers: ["kotevcode", "alexanderludwig", "pranit-garg"]
openGraphImageUrl: "https://opengraph.githubassets.com/73901e4274886273fcf0baf88d85417032c2fee5a2a3f74692cea8a4aeadd6a8/Antseed/antseed"
discussionCount: 3
---

# Antseed

A peer-to-peer AI services network. Providers offer AI services, buyers discover providers via DHT and route requests through encrypted P2P connections.

**Live pricing:** see [PRICING.md](https://github.com/Antseed/antseed/blob/HEAD/PRICING.md) or `https://network.antseed.com/stats` (public JSON, no auth).

## How It Works

**Providers** run a provider plugin that connects to an upstream LLM API (Anthropic, OpenAI-compatible APIs, local Ollama, etc.) and announce capacity on the DHT network.

**Buyers** run a router plugin that discovers providers, scores them on price/latency/reputation, and proxies requests through a local HTTP endpoint that drop-in replaces `ANTHROPIC_BASE_URL` or `OPENAI_BASE_URL`.

## Terms of Use

Antseed is infrastructure for building differentiated AI services — not for raw resale of API keys or subscription access. Providers are expected to add value through domain-specific skills, agent workflows, Trusted Execution Environments (TEEs), fine-tuned models, or other product differentiation. Reselling personal subscription credentials (e.g., Claude Pro/Team plans) violates the upstream provider's terms of service and is not permitted. Always…

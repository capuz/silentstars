---
repo: "soapbucket/sbproxy"
name: "sbproxy"
description: "AI Governance Engine. One self-hostable gateway for AI traffic, APIs, MCP, and AI crawlers."
readmeQualityOk: true
url: "https://github.com/soapbucket/sbproxy"
homepage: "https://sbproxy.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-gateway", "anthropic", "api-gateway", "llm-proxy", "load-balancer", "openai", "rate-limiting", "reverse-proxy", "waf", "governance-engine"]
stars: 42
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-08T21:29:07Z"
lastCommitAt: "2026-07-06T07:03:54Z"
lastReleaseAt: "2026-06-26T05:55:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["rickcrawford"]
openGraphImageUrl: "https://opengraph.githubassets.com/45f18d8d1264eb19b3ecf692da3fcdc1bfaa97278533f4230ead10396ee61b60/soapbucket/sbproxy"
discussionCount: 0
---

</p>

<h1 align="center">SBproxy</h1>

*Last modified: 2026-06-25*

<h3 align="center">Govern the AI you call and the AI that calls you.</h3>

</p>

</p>

</p>

---

## Why SBproxy

SBproxy governs AI traffic in both directions: the calls your apps and agents make out to models and MCP tools, and the calls AI agents and crawlers make in to your APIs and content. It is a real reverse proxy built on Pingora, so the same runtime also handles the rest of your API traffic, as one binary in your VPC. Most teams stitch this together from an LLM proxy, an API gateway, a key store, a guardrail service, and a dashboard they have to trust for spend. This is one process.

- **The AI you call.** 200+ models behind one OpenAI-compatible API, with fallback chains, outcome-aware routing, predictive budgets, and per-error retry policies. Guardrails screen the prompt and the model's response, blocking or redacting a streaming completion mid-flight. A local semantic cache replays near-duplicate prompts with no per-call cost, and the prompt never leaves your network.
- **The AI that calls you.** Charge AI crawlers per request with Pay Per Crawl (x402 or Stripe), verify signed agents with Web Bot Auth…

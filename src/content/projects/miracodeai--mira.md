---
repo: "miracodeai/mira"
name: "mira"
description: "Self-hosted AI code reviewer with indexed PR reviews, walkthroughs, vulnerability scanning, dependency graphs, custom rules, and a learning loop."
readmeQualityOk: true
url: "https://github.com/miracodeai/mira"
homepage: "https://docs.miracode.ai"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["ai", "ai-agent", "ai-agents", "ai-code-review", "ai-coding-tools", "ai-reviewer", "code-review", "code-reviews", "coding-assistant", "codereview"]
stars: 395
forks: 80
openIssues: 23
closedIssues: 34
watchers: 3
contributors: 23
recentReleases: 0
createdAt: "2026-02-10T19:44:41Z"
lastCommitAt: "2026-11-09T11:59:18Z"
lastReleaseAt: "2026-02-15T18:22:33Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 30
maintainers: ["JJMira", "teuteuguy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/929f2985ef51f5873af4424a5ff54a199c12ae45d39672a0b86cbf4cd16ad98c/miracodeai/mira"
---

Self-host every feature: full review engine, codebase indexing, vulnerability scanning, custom rules, org-wide package search, dashboard, learning loop. No paid tier, no license key, no SaaS upsell.

Mira reviews your pull requests using your choice of LLM (via [OpenRouter](https://openrouter.ai), which fronts Anthropic, OpenAI, Google, DeepSeek, and more) and posts concise, actionable feedback. The noise filter, confidence clamping, and learning loop ensure you only see comments that matter. See [`FEATURES.md`](https://github.com/miracodeai/mira/blob/HEAD/FEATURES.md) for the full surface.

## Why Teams Choose Mira

- **Model agnostic** — Run Claude, GPT, Gemini, DeepSeek, Llama, or any OpenAI-compatible endpoint: OpenRouter, vLLM, Ollama, Together, Groq, Fireworks, or AWS Bedrock direct. Per-provider quirks are config, not code, so adding a provider is a one-line entry.
- **Zero markup on LLM costs** — Bring your own key. You pay the model provider directly; Mira never proxies your spend or adds a multiplier. The dashboard shows real per-repo, per-model cost — not estimates.
- **Learns from your context** — Mira synthesizes rules from your merged PRs: rejected comments and human…

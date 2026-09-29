---
repo: "Parithosh-Varma/pool-anything"
name: "pool-anything"
description: "Pool free-tier API keys from any provider and rotate through them — round-robin key selection, per-key usage/quota tracking, and a drop-in HTTP proxy with a built-in web UI. TypeScript + SQLite, zero runtime dependencies."
readmeQualityOk: true
url: "https://github.com/Parithosh-Varma/pool-anything"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["api-gateway", "api-key-pool", "api-proxy", "free-tier", "key-rotation", "llm-gateway", "openai-compatible", "quota", "rate-limit", "round-robin"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-24T09:43:40Z"
lastCommitAt: "2026-09-29T08:10:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["Parithosh-Varma"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f1d10ec9f30f7471e8ac2aa68c7f6a5b44bd93fe9daf03de4918480c41fc88/Parithosh-Varma/pool-anything"
---

</p>

<h1 align="center">pool-anything</h1>

</p>

  🖥️ <a href="https://pool-anything-tools.pages.dev"><b>Live demo: tools UI</b></a>
  ·
  📖 <a href="https://pool-anything.pages.dev/docs"><b>Docs</b></a>
</p>

<hr />

Most AI/API providers hand you a free tier: a rate limit, a daily quota, a handful of trial tokens. One key's worth is small — but *several* keys, rotated, adds up. **pool-anything** lets you gather N keys for the same provider into a pool, then serves them through a single endpoint that round-robins across them and tracks usage per key.

- 🔁 **Round-robin rotation** — every request draws the next key in the pool
- 📊 **Usage & quota tracking** — per-key and per-pool token counts in SQLite
- 🌐 **Drop-in HTTP proxy** — point your client at pool-anything; it forwards with the right key, header, and auth scheme
- 🔌 **36 providers preconfigured** — Groq, OpenRouter, Gemini, OpenAI, Anthropic, and more (plus any custom provider)
- 🖥️ **Built-in web UI** — search providers, gather keys, watch usage on the Analytics dashboard
- 🧰 **Dependency-free server core** — the proxy, API, and web UI run on Node built-ins + `node:sqlite` only; the interactive shell adds Ink +…

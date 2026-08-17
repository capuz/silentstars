---
repo: "trefeon/freebuff-proxy"
name: "freebuff-proxy"
description: "OpenAI-compatible gateway for FreeBuff coding models. Token pool, session lifecycle, TLS stealth, embedded admin dashboard. No ads, no CLI, just /v1/chat/completions."
readmeQualityOk: true
url: "https://github.com/trefeon/freebuff-proxy"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["llm", "openai", "proxy", "openai-compatible", "golang", "llm-router", "token-pool", "coding-assistant", "freebuff", "api-gateway"]
stars: 92
forks: 26
openIssues: 28
closedIssues: 35
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-11T07:06:43Z"
lastCommitAt: "2026-08-17T04:19:47Z"
lastReleaseAt: "2026-08-12T13:17:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 36
maintainers: ["trefeon", "pttcho"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fd1e456f934b99e0feb0a248292d31c430b07ea26e854061351c1199f2bb695/trefeon/freebuff-proxy"
---

# freebuff-proxy: No ads, no CLI, just /v1/chat/completions

`freebuff-proxy` is a local gateway that makes the AI coding models behind Codebuff/FreeBuff available to **any** tool that speaks the OpenAI API: OpenCode, pi, 9router, LiteLLM, or your own scripts.

Your coding tools expect an OpenAI-style endpoint (`/v1/chat/completions`). The upstream service is not OpenAI-shaped: it is a CLI coding agent with its own session protocol, and its free-tier access is tied to per-account tokens that carry individual daily quotas and can be rate-limited or banned. `freebuff-proxy` sits between the two and absorbs that friction:

- **Translates**: rewrites standard OpenAI requests into the upstream session protocol (CLI request envelope, model-bound agent runs, tool-schema normalization) and streams the SSE response back as OpenAI `chat.completion.chunk` events.
- **Pools**: routes requests across multiple tokens (hot-session-first with round-robin start and failover), so a busy client or router rides out per-account quotas instead of failing.
- **Stealths**: makes egress look like a real browser (TLS fingerprints, header sanitization, request jitter) so upstream abuse detection is less…

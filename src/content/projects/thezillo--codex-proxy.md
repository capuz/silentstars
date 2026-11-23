---
repo: "thezillo/codex-proxy"
name: "codex-proxy"
description: "OpenAI-compatible proxy for the Codex (ChatGPT subscription) Responses API"
readmeQualityOk: true
url: "https://github.com/thezillo/codex-proxy"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["chatgpt", "codex", "llm", "openai", "proxy", "reverse-proxy", "rust"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-06-16T14:28:36Z"
lastCommitAt: "2026-11-23T13:31:40Z"
lastReleaseAt: "2026-09-22T17:57:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 54
maintainers: ["thezillo"]
openGraphImageUrl: "https://opengraph.githubassets.com/aac8358ff561c6831d6de9180d65467d7443f3e44cc29a49eca9cf9807062a73/thezillo/codex-proxy"
---

# codex-proxy

OpenAI-compatible proxy for the Codex (ChatGPT subscription) Responses API.
Point any OpenAI client at it; it forwards requests to `chatgpt.com` using the
credentials from `codex login`, refreshing the token as needed. Rust, single
binary, no database. Request format and TLS fingerprint match the official
Codex client.

What a running instance gives you:

- `http://<host>:8787/v1` — an OpenAI-compatible endpoint (chat completions +
  raw Responses passthrough), guarded by your own client API keys.
- `http://127.0.0.1:9090/metrics` — Prometheus counters, on a separate port so
  it stays private even when the API is public.
- A data directory holding `auth.json` — the ChatGPT credentials and the
  rotated refresh token. **Keep it**; it's the only stateful thing here.
- A **~3 MiB** resident footprint. Measured on the container over a week of
  production traffic: 2.9 MiB min, 3.2 MiB mean, 6.1 MiB peak. It's a static
  musl binary — no interpreter, no GC, no database behind it — so it fits on
  the smallest instance any host will sell you.

## Quick start (Docker)

Needs `~/.codex/auth.json` from `codex login` (the official CLI), once.

---
repo: "LeenHawk/gproxy"
name: "gproxy"
description: "gproxy is a Rust-based multi-channel LLM proxy that exposes OpenAI / Claude / Gemini-style APIs through a unified gateway, with a built-in admin console, user/key management, and request/usage auditing."
readmeQualityOk: true
url: "https://github.com/LeenHawk/gproxy"
homepage: "https://gproxy.leenhawk.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["claude", "gemini", "gpt", "llm-proxy"]
stars: 184
forks: 31
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-01T09:42:21Z"
lastCommitAt: "2026-07-18T05:32:54Z"
lastReleaseAt: "2026-02-08T15:47:11Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 32
maintainers: ["LeenHawk"]
openGraphImageUrl: "https://opengraph.githubassets.com/9509e29a3a2f69ac6fa27dc8a169a62a783657482f758d179a5d905c29626054/LeenHawk/gproxy"
fundingLinks: ["GITHUB:https://github.com/LeenHawk"]
---

# GPROXY

Run OpenAI, Anthropic, and Gemini-compatible clients through one gateway.
GPROXY handles provider routing, protocol conversion, credentials, quotas, and
observability, with an embedded console for day-to-day administration. Deploy it
as a native binary, a Docker container, or a serverless edge function.

English · [简体中文](https://github.com/LeenHawk/gproxy/blob/HEAD/README.zh_CN.md)

- 🪪 **License:** AGPL-3.0-or-later · 🐳 **Image:** `ghcr.io/leenhawk/gproxy`
- 🦀 **Targets:** native binary · Docker · edge wasm (Cloudflare / Deno / Netlify)
- 🖥️ **Console:** built in, served at `/console`

---

## What it does

GPROXY gives your applications one stable API while letting you choose and
combine upstream providers behind it:

- **Multi-provider routing** — OpenAI, Anthropic, Gemini/Vertex, DeepSeek, Groq,
  OpenRouter, NVIDIA, Vercel AI Gateway, Claude Code, Codex, Grok Build, and any
  OpenAI-compatible custom endpoint.
- **Two routing modes** — aggregated `/v1/...` (provider in the model name) and
  scoped `/{provider}/v1/...` (provider in the URL).
- **Cross-protocol translation** — an OpenAI client can use a Claude or Gemini
  upstream, and responses are converted back…

---
repo: "quangdang46/openproxy"
name: "openproxy"
description: "Smart AI proxy router that connects Claude Code, Cursor, Codex, Copilot, and 50+ coding tools to 40+ AI providers with 100+ models. Saves 20-40% tokens via RTK compression, auto-fallback from subscription to cheap to free providers, multi-account round-robin, and a local dashboard."
readmeQualityOk: true
url: "https://github.com/quangdang46/openproxy"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [75, 20]
topics: ["ai-agents", "ai-providers", "ai-router", "api-gateway", "claude-code", "cli-tools", "codex", "copilot", "cursor", "developer-tools"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 208
watchers: 0
contributors: 69
recentReleases: 3
createdAt: "2026-05-08T05:22:41Z"
lastCommitAt: "2026-08-19T04:08:23Z"
lastReleaseAt: "2026-07-12T07:21:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 56
maintainers: ["quangdang46", "dependabot[bot]", "atheerium"]
openGraphImageUrl: "https://opengraph.githubassets.com/07e2fbad460d31f28e4bcc7efa523a4348097ee769c13607b94bb825509b27df/quangdang46/openproxy"
---

# OpenProxy

</div>

</div>

**Single-binary AI router for AI coding tools.**  
Routes to 40+ providers with auto-fallback combos. Embedded dashboard, OpenAI-compatible API, RTK compression. Run on `127.0.0.1:4623` — no cloud required.

</p>

```bash
# Start locally (auto-opens dashboard)
curl -fsSL "https://raw.githubusercontent.com/quangdang46/openproxy/main/install.sh" | bash
openproxy
```

</div>

---

## 🤖 Agent Quickstart (API / Robot Mode)

Point your coding agent CLI at `http://127.0.0.1:4623`:

```bash
# Claude Code
claude config set proxyUrl http://127.0.0.1:4623

# Codex CLI
codex --proxy http://127.0.0.1:4623

# Any OpenAI-compatible tool
curl http://127.0.0.1:4623/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"claude/claude-opus-4-8","messages":[{"role":"user","content":"hi"}]}'
```

**Dashboard** — open `http://127.0.0.1:4623/` in browser for provider config, combo chains, quota tracking, and request logs.

---

## What it does

OpenProxy runs as one binary on `127.0.0.1:4623`. Point any tool that speaks the OpenAI Chat Completions API at it (Claude Code, Codex, Cursor, Cline, OpenClaw, Copilot, ...) and OpenProxy:

- routes the…

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
stars: 19
forks: 3
openIssues: 0
closedIssues: 207
watchers: 0
contributors: 69
recentReleases: 4
createdAt: "2026-05-08T05:22:41Z"
lastCommitAt: "2026-09-03T08:12:43Z"
lastReleaseAt: "2026-08-24T15:00:20Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 53
maintainers: ["quangdang46", "atheerium", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e046f7b3413ddc7b3d7ea0bf5fec2ec37fb293f15f4937e9e7886f78cdab7554/quangdang46/openproxy"
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

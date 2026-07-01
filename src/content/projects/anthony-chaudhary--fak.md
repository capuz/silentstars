---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel: treat the model like an untrusted program and the tool call like a syscall. One Go binary — a default-deny capability gate the model can't talk past, plus an addressable, bit-exact KV cache."
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [70, 26]
topics: ["agent-security", "agentic-ai", "ai-agents", "ai-safety", "capability-security", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving"]
stars: 8
forks: 5
openIssues: 419
closedIssues: 1409
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-07-01T07:06:40Z"
lastReleaseAt: "2026-06-30T12:55:17Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 70
maintainers: ["anthony-chaudhary"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

# fak — the **F**used **A**gent **K**ernel

**fak in one line:** fak is a fused agent kernel: one Go binary that sits in front of an
agent's tool calls, checks each call, and reuses the stable work in long sessions so the same
agent loop is safer, cheaper, and faster.

**Put one binary in front of the agent you already run — Claude Code, Codex, Cursor, or any OpenAI / Anthropic / MCP client — and the same long session gets cheaper and faster, with nothing else changed.**

`fak guard -- claude` wraps your normal agent in one command. It keeps your model, your IDE,
and your keys exactly as they are. You get back the parts of the agent loop that got
expensive. `fak` points one base URL at itself for you; nothing else in your setup changes.

**What you get, in numbers.** Every figure traces to
[BENCHMARK-AUTHORITY.md](BENCHMARK-AUTHORITY.md), and the honesty ledger is
[CLAIMS.md](CLAIMS.md):

- **~4.1× less work than a tuned warm-cache stack** on a 50-turn × 5-agent run. `fak` reuses
  the shared prompt prefix across agents (the system prompt + tools, the *KV cache* of the
  work so far) instead of re-paying for it. That reuse factor climbs to **6.95×** across the
  model ladder.…

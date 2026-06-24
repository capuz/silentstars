---
repo: "wesleysimplicio/simplicio-loop"
name: "simplicio-loop"
description: "🔁 Finishes your entire backlog while you sleep. The AI orchestrator that DOES the work end-to-end on ANY LLM — discover → implement → verify → merge → 24/7 — behind safety gates, at up to 96% fewer tokens. 43 extension points. Not a chatbot. A worker."
url: "https://github.com/wesleysimplicio/simplicio-loop"
homepage: "https://simpleti.com.br/simplicio"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agent", "autonomous-agents", "claude-code", "codex", "gemini", "llm", "orchestrator", "skill", "token-optimization", "agentic-ai"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-18T17:40:17Z"
lastCommitAt: "2026-06-24T00:19:54Z"
lastReleaseAt: "2026-06-23T20:52:47Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["wesleysimplicio"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bf136b58180d4b71097efbd030e5dbdb95c0c1f73cf483a699357e287b9eb2d/wesleysimplicio/simplicio-loop"
---

# 🔁 simplicio-loop — The Universal Looping AI Orchestrator

</p>

</p>

</p>

  <strong>🌍 Languages:</strong><br>
</p>

---

## ⚡ TL;DR

**simplicio-loop** is a runtime-agnostic **super-plugin** — one autonomous looping
orchestrator (invoked as **`/simplicio-tasks`**) plus **five satellite skills** — that turns any
strong LLM (Claude, Codex, Copilot, Gemini, Cursor, local models) into a self-driving worker. You
point it at a body of work — *"finish all the open issues"*, *"clear the CI queue"*, *"drain the Jira board"* — and it
runs the whole lifecycle on its own:

> **discover → understand → decide → act → verify → correct → record → repeat**

It discovers work from any source (GitHub Issues, Jira, Azure DevOps, agentsview sessions, and
more), dedups, auto-scales an agent fleet to your machine, implements each item through a quality
loop that **runs the code (not just compiles it)**, opens PRs, resolves CI/review feedback, merges,
and keeps watching **24/7** for new work — all behind safety gates and a hard cost kill-switch.

```text
/simplicio-tasks termine as issues abertas
→ identity + pre-flight (kill-switch, auth, watcher)
→ discover 50 issues · dedup · build dependency…

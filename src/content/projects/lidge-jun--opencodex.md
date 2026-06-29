---
repo: "lidge-jun/opencodex"
name: "opencodex"
description: "Universal provider proxy for OpenAI Codex — use any LLM with Codex CLI, App, and SDK"
url: "https://github.com/lidge-jun/opencodex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 164
forks: 14
openIssues: 6
closedIssues: 8
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-06-18T23:03:18Z"
lastCommitAt: "2026-06-29T07:22:59Z"
lastReleaseAt: "2026-06-20T09:09:07Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["lidge-jun", "0disoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3da3ce4adb5453dd33e3d4c5aa6cf6430ff55d16e02912e2296416a7eb374ee/lidge-jun/opencodex"
---

<h3 align="center">make codex open!</h3>

</p>

</p>

</p>

Use Claude, Gemini, Grok, GLM, DeepSeek, Kimi, Qwen, Ollama, or any other LLM with Codex — without waiting for OpenAI to add support.

opencodex is a lightweight local proxy that translates Codex's Responses API into whatever your provider speaks. Streaming, tool calls, reasoning tokens, images — everything works, in both directions.

It can also manage a **ChatGPT account pool** for Codex auth. Add multiple ChatGPT / Codex accounts,
refresh their 5h / weekly / 30d quota in the dashboard, and let new sessions auto-route to the
lowest-usage healthy account. Existing Codex threads stay pinned to the account that started them,
so long SSH, tmux, or mobile-connected sessions do not jump accounts mid-conversation.

```
Codex CLI / App / SDK ──/v1/responses──▶ opencodex ──▶ Any provider
                                              │
              Anthropic · Google · xAI · Kimi · Ollama Cloud · Groq
              OpenRouter · Azure · DeepSeek · GLM · …and OpenAI itself
```

```mermaid
flowchart LR
  codex[Codex session<br/>CLI, App, SSH, mobile] --> proxy[opencodex]
  proxy --> existing{Existing thread?}
  existing -->|yes|…

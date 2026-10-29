---
repo: "lkarlslund/koder"
name: "koder"
description: "Web based coding and computer use agent. Multi session. Voice chat. Browser use."
readmeQualityOk: true
url: "https://github.com/lkarlslund/koder"
language: "Go"
languages: ["Go"]
languagePcts: [75]
stars: 22
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-04-19T15:33:04Z"
lastCommitAt: "2026-10-29T12:25:53Z"
lastReleaseAt: "2026-08-06T02:14:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["lkarlslund"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a434bb68743bc44ee21030e64c1f7ce752aab93c612916ecae5ace3e0eadf42/lkarlslund/koder"
---

# <img src="internal/webui/assets/koder-logo.svg" alt="koder logo" width="36" height="36"> koder

Local-first coding and computer use agent. It runs as a single local Go process, serves multiple sessions via browser UI, and connects to your choice of OpenAI-compatible model providers.

Nice features from being browser based: multiple live sessions, rich chat rendering, visual file browsing, planning boards, model settings, permissions, TTS controls, approvals, debug traces, and repo state all stay visible and inspectable.

Author's current setup: Linux, local `llama.cpp`, Qwen 3.6 27B Q8 for 256K-token chat sessions, and a Qwen 3.5 4B summarizer model for compaction.

## Use Cases

- **Software development in real repositories.** Let the agent inspect code, search with structured tools, make targeted edits, run checks, explain failures, and keep a persistent trail of what changed.
- **Long-running investigations.** Keep multiple chats open for hypotheses, experiments, review, and follow-up while the session preserves tool output, approvals, summaries, and context usage.
- **Reverse engineering and security research.** Use repo tools, command execution, notes, file browsing, image…

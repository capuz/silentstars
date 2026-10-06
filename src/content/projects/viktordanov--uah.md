---
repo: "viktordanov/uah"
name: "uah"
description: "A terminal coding agent that works like Codex, running on unreal-agent"
readmeQualityOk: true
url: "https://github.com/viktordanov/uah"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai-agents", "bubbletea", "codex", "coding-agent", "go", "llm", "mcp", "terminal", "tui"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-23T22:18:59Z"
lastCommitAt: "2026-10-06T10:41:21Z"
lastReleaseAt: "2026-09-30T23:48:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["viktordanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/82ff9c746dc5df3ba400d48a1d2ec934089a43230fc0d3bcd9fc51fd43303514/viktordanov/uah"
---

# uah

uah is a terminal coding agent that works like Codex, running on [uah-core](https://github.com/viktordanov/uah-core), its own runtime ([derived from unreal-agent](https://github.com/viktordanov/uah/blob/HEAD/internal/engine/README.md#uah-core)), through [uagent](https://github.com/viktordanov/uagent).

```sh
brew install viktordanov/tap/uah
```

- [Sessions](#resume-a-session) you can resume, search, and [take back to an earlier message](#go-back-to-an-earlier-message), [prompt history](#reuse-an-earlier-prompt) with ↑ and ctrl+r, and a headless [`uah exec`](#headless-mode)
- [Subagents](#subagents-and-agent-files) that run in parallel, defined in Markdown or TOML agent files
- [Questions with options](#answer-the-agents-questions): the agent stops to ask, you pick an answer or type your own, as with Codex's `request_user_input`
- [Goals](#goals): `/goal <objective>` keeps the agent working, run after run, until it marks the goal complete, as Codex's `/goal`, with a budget and guards against a loop that makes no progress
- [Context preparation](#context-preparation): each session starts knowing its shell, sandbox, git state, and instruction files, from Markdown modules you…

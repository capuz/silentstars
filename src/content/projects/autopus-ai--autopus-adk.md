---
repo: "autopus-ai/autopus-adk"
name: "autopus-adk"
description: "Autopus-ADK is of the agents, by the agents. for the agents. Multi-model orchestration (consensus/pipeline/debate/fastest). Architecture-as-Code, Lore decision tracking, SPEC/EARS engine."
readmeQualityOk: true
url: "https://github.com/autopus-ai/autopus-adk"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["agent-framework", "agentic-ai", "ai-agents", "automation", "claude-code", "cli", "codex", "coding-agents", "developer-tools", "gemini-cli"]
stars: 109
forks: 73
openIssues: 0
closedIssues: 60
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T05:20:25Z"
lastCommitAt: "2026-11-13T11:22:58Z"
lastReleaseAt: "2026-03-23T07:04:39Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 100
undervaluedScore: 42
maintainers: ["Insajin"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddfad38150327711799f0cd6b05b06f573288090989ad8834bab58cb1591d19b/autopus-ai/autopus-adk"
---

# 🐙 Autopus-ADK

### Verify what your AI agent changed by running it.

Autopus-ADK installs a verification harness into your AI coding CLI (Claude Code, Codex,
Antigravity CLI, OpenCode, Oh My Pi). Your agent still plans and writes the code. Autopus
builds it, tests it, reviews the diff, and has a separate QA agent run the product to look for bugs
before the session ends.

```bash
# macOS / Linux
curl -sSfL https://raw.githubusercontent.com/autopus-ai/autopus-adk/main/install.sh | sh

# Windows (CMD or PowerShell)
powershell -c "irm https://raw.githubusercontent.com/autopus-ai/autopus-adk/main/install.ps1 | iex"
```

[Why](#why-verification-and-not-a-workflow) · [Stop hook](#the-stop-hook-build-and-test-before-the-session-ends) · [QA bug hunt](#qa-bug-hunt) · [Routes](#routes) · [Install](#install) · [Configuration](#configuration) · [Security](#security)

[🇰🇷 한국어](https://github.com/autopus-ai/autopus-adk/blob/HEAD/docs/README.ko.md)

---

## Why verification and not a workflow

Up to v0.50.x, Autopus shipped a full implementation harness: plan/SPEC documents, `/auto go`,
`/auto fix`, `/auto idea`, 17 agents, and a set of discipline rules. Frontier models (Opus-class)
now plan…

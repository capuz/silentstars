---
repo: "bottomless/agent-duel"
name: "agent-duel"
description: "Blinded battles between coding agents: two agents, one prompt, you pick the winner. Desktop app, runs locally."
readmeQualityOk: true
url: "https://github.com/bottomless/agent-duel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "benchmark", "coding-agents", "desktop-app", "developer-tools", "electron", "llm"]
stars: 23
forks: 2
openIssues: 10
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-10-05T09:16:33Z"
lastCommitAt: "2026-10-23T09:32:43Z"
lastReleaseAt: "2026-10-22T17:57:05Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 73
undervaluedScore: 39
maintainers: ["lokicik", "boudra", "micjm"]
openGraphImageUrl: "https://opengraph.githubassets.com/083034c5a97cbd5a559c13627e18085a576e266df5c8b62461031addd804b851/bottomless/agent-duel"
---

Agent Duel runs two blinded coding agents against one prompt in isolated local
worktrees. You compare their results, choose A, B, or Tie, and continue from the
selected result as ordinary chat history.

Each contestant is a model drawn at random [from a pool](#current-models) and run
through the bundled engine. You only see which models they were after you vote.

The shipped product is the Electron desktop app. `packages/app` can run in a
browser during development and automated QA, but there is no hosted browser
product.

## Download

[Download for macOS (Apple silicon)](https://github.com/bottomless/agent-duel/releases)

E-mail signup required for use. No cost for unlimited inference with frontier models.

## Current models

The hosted version draws from:

- Claude Fable 5.1
- Claude Opus 5.5
- GPT-6 Astra
- GPT-6.1 Sol
- Kimi K3
- Muse Wonder
- Grok 4.7
- Qwen 3.8 Max
- Gemini 4 Argon
- DeepSeek V4.1 Flash 1017
- MiMo-V2.6 Flash

## Architecture

Execution stays on your machine:

```text
Electron UI -> local daemon -> local Arena runtime -> local repositories and agents
                                       |
                                       |-> Agent Duel cloud ->…

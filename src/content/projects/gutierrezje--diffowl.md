---
repo: "gutierrezje/diffowl"
name: "diffowl"
description: "Local AI code review from your terminal. DiffOwl inspects your changes, understands the repo, and catches issues before you push."
url: "https://github.com/gutierrezje/diffowl"
homepage: "https://gutierrezje.github.io/diffowl/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ai", "cli", "code-review", "developer-tools", "git", "git-hooks", "opencode"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-28T05:26:05Z"
lastCommitAt: "2026-06-26T05:21:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["gutierrezje", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2f993ebaf162171afd03a7538987598e959f090e7666d0ed8d037cff58144e8/gutierrezje/diffowl"
---

# DiffOwl

```text
,___,
(O,O)
/)_)
" "
```

> **The verification layer for agent-written code.**
>
> An independent reviewer that runs locally on every commit — on the model you already use, no matter which agent (or human) wrote the code.

Coding agents now write much of the code, but the agent that wrote a patch shouldn't be its only reviewer. DiffOwl is a separate, independent review pass: it builds bounded local context from your diff and asks a model for structured, durable findings. It works the same whether the change came from Claude Code, Cursor, OpenCode, or your own hands.

Under the hood it drives a headless [OpenCode](https://opencode.ai/docs/server/) session for model execution, so you bring your own provider and pay no one but them — no DiffOwl account, no service in the loop.

---

## Features

- **Agent-Agnostic**: Reviews code from any source — Claude Code, Cursor, OpenCode, or a human. The reviewer stays independent from whoever wrote the patch.
- **Provider-Neutral**: Runs on whatever model and provider you have configured in OpenCode (Copilot, OpenAI, local, and more). No separate keys, no DiffOwl account, no per-seat bill.
- **First-Class TypeScript…

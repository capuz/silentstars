---
repo: "conorbronsdon/claude-context-os"
name: "claude-context-os"
description: "A Git-backed context and workflow layer for Claude Code, Codex, and compatible coding agents. "
readmeQualityOk: true
url: "https://github.com/conorbronsdon/claude-context-os"
homepage: "https://x.com/ConorBronsdon/status/2053886891557364118"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [80, 20]
topics: ["ai", "ai-context", "claude-code", "context-management", "developer-tools", "productivity", "template", "agents", "dotfiles", "llm"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T22:18:44Z"
lastCommitAt: "2026-08-19T04:07:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 46
maintainers: ["conorbronsdon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1174829830/616222ce-3fe5-4dbc-a73e-f17e8d252922"
fundingLinks: ["GITHUB:https://github.com/conorbronsdon", "BUY_ME_A_COFFEE:https://buymeacoffee.com/conorbronsdon"]
---

# Context OS

A Git-backed context and workflow layer for Claude Code and Codex.

</div>

Chat history, project instructions, and copied prompts drift apart. Context OS puts the durable parts in plain Markdown: who you are, what you are working on, decisions already made, and the workflows you want an agent to follow.

Claude Code and Codex read the same repository state. Git shows what changed. A reviewed start, checkpoint, and close loop keeps the context current without treating an assistant's private memory as the source of truth.

| What you need | How Context OS handles it |
|---|---|
| Bring useful context forward | A source-neutral [migration workflow](https://github.com/conorbronsdon/claude-context-os/blob/HEAD/docs/migration-guide.md) turns selected chats, project instructions, memory exports, and documents into reviewable files. |
| Work across coding agents | Provider-neutral state and skills live outside host adapters. Claude Code and Codex share the same lifecycle core. |
| Add the tools that fit | A generated [integration catalog](https://github.com/conorbronsdon/claude-context-os/blob/HEAD/references/integrations.md) documents install scope, data access, side…

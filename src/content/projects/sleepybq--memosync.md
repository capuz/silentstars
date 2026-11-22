---
repo: "SLEEPYBQ/MemoSync"
name: "MemoSync"
description: "Co-manage memory with your coding agent across sessions. A local workbench for Claude Code, Codex, Pi and OpenCode."
readmeQualityOk: true
url: "https://github.com/SLEEPYBQ/MemoSync"
homepage: "https://memosync.cc/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-memory", "claude-code", "coding-agents", "developer-tools", "hci", "human-ai-collaboration", "llm-agents", "memory-management", "agentic-coding", "ai-agents"]
stars: 411
forks: 27
openIssues: 12
closedIssues: 23
watchers: 13
contributors: 4
recentReleases: 5
createdAt: "2026-09-05T06:43:26Z"
lastCommitAt: "2026-11-22T11:53:11Z"
lastReleaseAt: "2026-11-14T18:02:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 28
maintainers: ["SLEEPYBQ"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1357906400/8c53478c-6099-431a-a977-6b8a59386b4f"
---

https://github.com/user-attachments/assets/488a1e41-5a01-4c01-ac76-5c37b8e764f0

---

Coding agents keep memory: `CLAUDE.md` files, notes they extract, lessons from earlier sessions. You rarely see what is in it, what the agent took into this task, or whether it followed it. MemoSync is a local workbench for Claude Code, Codex, Pi and OpenCode that puts that memory on screen.

- Every change to memory waits for your review.
- Before each turn, you confirm what goes in.
- While the agent works, its replies cite the memories they use.
- After the turn, a separate check reports what was followed and what was ignored.

When a turn doesn't need that much attention, switch to [Automatic](#automatic) and the agent handles memory on its own.

## A turn with memory

Memory is a set of short items. Each has a scope (**personal**, **project** or **session**), a version and a history. The same item shows up in four places during a turn.

### 1. Review what the agent learned

Before a turn starts, MemoSync shows the memory changes it proposes, in three groups. Accept, edit, rescope or dismiss each one. Nothing reaches the store until you do.

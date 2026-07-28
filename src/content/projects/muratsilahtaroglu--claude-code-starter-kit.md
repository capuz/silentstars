---
repo: "muratsilahtaroglu/claude-code-starter-kit"
name: "claude-code-starter-kit"
description: "Discipline + security starter kit that keeps Claude Code (or any LLM agent) on course across sessions: repo-based memory that survives compaction, enforced hooks & permissions, and a phased workflow — consistent, traceable, safe. Clone it or install as a plugin."
readmeQualityOk: true
url: "https://github.com/muratsilahtaroglu/claude-code-starter-kit"
language: "Shell"
languages: ["Shell"]
languagePcts: [83]
topics: ["ai-agents", "claude-code", "developer-tools", "developer-tools-ai-agent", "llm", "project-template", "starter-kit", "agent-memory", "ai-coding", "anthropic"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T12:25:08Z"
lastCommitAt: "2026-07-28T14:57:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 38
maintainers: ["muratsilahtaroglu"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa67f8c397e68d5bdfa979db644d3c55ddcd0b1b2eefa5777b37c2daa5bbdf1d/muratsilahtaroglu/claude-code-starter-kit"
---

# Keel — Claude Code Starter Kit

*Like a ship's keel keeps a vessel on course, **Keel** keeps Claude Code (or any LLM) on course:
a discipline + security starter kit that makes your project consistent, traceable, and safe —
no drift across sessions, from the very first one.*

       alt="Keel demo: clone the kit → Claude runs the bootstrap and prunes it to fit → builds in phases → updates HANDOVER.md">
</p>

**Requires:** [Claude Code](https://claude.com/claude-code). The `.claude/` layer (permissions, hooks,
skills) is Claude-Code-native; the docs and discipline (`rules.md`, ADRs, `HANDOVER.md`, security guide)
are tool-agnostic and useful with any agent.

## Quick start
```bash
# 1) clone Keel as your new project, then start your own git history
git clone https://github.com/muratsilahtaroglu/claude-code-starter-kit.git my-project
cd my-project && rm -rf .git && git init
# 2) in Claude Code, let it tailor the template to THIS project before coding:
#    "Read CLAUDE.md, then run the bootstrap: prune what this project doesn't need and plan."
```
Shell commands in this README are for **macOS/Linux** — on Windows use **Git Bash** (Claude Code uses it
there anyway); the PowerShell…

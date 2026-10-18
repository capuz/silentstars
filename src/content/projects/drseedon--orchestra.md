---
repo: "DrSeedon/orchestra"
name: "orchestra"
description: "ADE/harness where you manage a team of agents the way a CEO manages a company — agentic mail between workers, a built-in task manager with budgets, git worktree isolation per agent, and cross-model review before every squash merge. Claude Code, Codex, Grok and an OpenRouter harness behind one contract."
readmeQualityOk: true
url: "https://github.com/DrSeedon/orchestra"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["ade", "agent-harness", "agent-orchestration", "ai-agents", "autonomous-agents", "claude-code", "codex", "developer-tools", "fastapi", "llm"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-30T09:35:17Z"
lastCommitAt: "2026-10-18T08:16:24Z"
lastReleaseAt: "2026-10-15T10:19:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["DrSeedon"]
openGraphImageUrl: "https://opengraph.githubassets.com/7641bd82abe547101d63c4226e495dfbac2804a7289167b793842b9be013444a/DrSeedon/orchestra"
---

---

**Orchestra is a self-hosted platform for managing persistent AI agent teams.** You describe an outcome to a project orchestrator. It breaks the work into tasks, assigns workers, coordinates their progress, and brings code changes through review and merge checks. You stay in control of the goal and the approvals you choose to keep; the dashboard shows the work as it happens.

Workers run in separate Git worktrees and persist across turns. They can exchange messages directly, keep a durable checklist, and continue after idle time or a service restart. Orchestra is intended for work that needs planning, handoffs, and verification—not just one answer from one model.

**🎬 Product tour, with sound:**

https://github.com/user-attachments/assets/4e1cc784-9d47-4dd6-af51-d1f314b42506

## Quick Start

**Requirements:** Python 3.12+, [uv](https://docs.astral.sh/uv/), Git, and credentials for a supported agent runtime or provider. Node.js is optional for some CLI integrations.

```bash
git clone https://github.com/DrSeedon/orchestra.git
cd orchestra
cp .env.example .env
uv sync
```

Before starting, replace the placeholder dashboard password and internal token in `.env`, and configure…

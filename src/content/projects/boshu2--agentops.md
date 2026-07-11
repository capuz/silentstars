---
repo: "boshu2/agentops"
name: "agentops"
description: "Independent verification for coding agents. A change isn't done until a different model or a real test checks it, and the verdict is recorded in your repo."
readmeQualityOk: true
url: "https://github.com/boshu2/agentops"
homepage: "https://www.12factoragentops.com"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [64, 32]
topics: ["ai-agents", "claude-code", "claude-code-plugins", "claude-marketplace", "devops", "codex", "codex-plugin", "cursor", "opencode-plugin", "claude"]
stars: 408
forks: 40
openIssues: 1
closedIssues: 65
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2025-11-05T19:18:56Z"
lastCommitAt: "2026-07-11T05:52:11Z"
lastReleaseAt: "2026-02-01T17:20:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 31
maintainers: ["boshu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b4117fec98933d1ceb242ea2453e20505e708340494ded98f804819be83b1d9/boshu2/agentops"
discussionCount: 1
---

# AgentOps

### Autonomous code validation for coding agents

Coding agents declare "done" on code that is still wrong. AgentOps catches that. Before a change counts as done, something that didn't write it has to check it: a different model, or a test that actually runs. **No verdict = not done.** It sits on top of the agent you already use (Claude Code, Codex, Cursor, OpenCode).

</div>

---

## Install

Pick your runtime and install:

```bash
# Claude Code
claude plugin marketplace add boshu2/agentops
claude plugin install agentops@agentops-marketplace

# Codex CLI (macOS/Linux/WSL) — OpenCode: install-opencode.sh
curl -fsSL https://raw.githubusercontent.com/boshu2/agentops/main/scripts/install-codex.sh | bash
# Codex CLI (Windows):
irm https://raw.githubusercontent.com/boshu2/agentops/main/scripts/install-codex.ps1 | iex

# Gemini / Antigravity
curl -fsSL https://raw.githubusercontent.com/boshu2/agentops/main/scripts/install-agy.sh | bash

# Other skills-compatible agents (Cursor, etc.)
npx skills@latest add boshu2/agentops --cursor -g
```

The `ao` CLI is optional but recommended (bookkeeping, retrieval, the release gate):

```bash
brew tap boshu2/agentops…

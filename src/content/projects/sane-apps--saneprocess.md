---
repo: "sane-apps/SaneProcess"
name: "SaneProcess"
description: "Workflow guardrails for coding agents and LLM-assisted development: AGENTS.md, native hooks, MCP, SaneMaster, circuit breakers, and shared process checks."
url: "https://github.com/sane-apps/SaneProcess"
homepage: "https://saneapps.com"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [71]
topics: ["developer-tools", "macos", "ai-safety", "circuit-breaker", "linux", "process-management", "ruby", "ai-agents", "codex", "developer-productivity"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-02T21:28:32Z"
lastCommitAt: "2026-06-28T03:11:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 57
maintainers: ["MrSaneApps", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1126941849/774c80c1-5515-4345-a6e6-3423a4a6eb4c"
fundingLinks: ["GITHUB:https://github.com/MrSaneApps"]
discussionCount: 0
---

</p>

# SaneProcess

**Workflow guardrails for coding agents and LLM-assisted development.**

SaneProcess gives coding agents a shared operating system for development work: clear instructions, stop conditions, research gates, verification commands, and release checks that keep them from looping, skipping tests, or mutating the wrong files.
Codex is the primary SaneApps toolset. Claude Code gets the strongest native hook enforcement today, and other repo-aware agents can use the same SOP through `AGENTS.md`, reusable skills, MCP, `SaneMaster.rb`, and project scripts.
The source of truth stays client-neutral so switching tools does not create a second workflow.

MIT licensed. Ruby. macOS + Linux. Used across the SaneApps portfolio.

---

## Quick Start

Install into an existing project:

```bash
git clone https://github.com/sane-apps/SaneProcess.git
cd /path/to/your-project
/path/to/SaneProcess/scripts/init.sh --client generic
```

Choose the adapter you actually use:

| Setup | Command | Installs |
|-------|---------|----------|
| Generic agent | `scripts/init.sh --client generic` | `AGENTS.md` only |
| Codex-style | `scripts/init.sh --client codex` | `AGENTS.md` +…

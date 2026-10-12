---
repo: "398894496-arch/KRouter"
name: "KRouter"
description: "Your coding agents remember what you decided — and what you changed. Plain-Markdown memory in Obsidian, shared by Claude Code, Codex and Cursor over MCP. Every answer cites its page; when the vault does not know, it says so. Imports your past sessions on install."
readmeQualityOk: true
url: "https://github.com/398894496-arch/KRouter"
homepage: "https://github.com/398894496-arch/DSH-KRouter"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["dsh-plugin", "obsidian", "deepseek", "knowledge-base", "second-brain", "agent-memory", "ai-agents", "claude-code", "codex", "cursor"]
stars: 44
forks: 2
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-21T09:49:14Z"
lastCommitAt: "2026-10-12T11:14:40Z"
lastReleaseAt: "2026-10-10T15:14:31Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 43
maintainers: ["398894496-arch", "471277313qq-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/429634bb39c4710e59e5af9d6cab52a4845f419b96d4563e53d135769a9e7b79/398894496-arch/KRouter"
discussionCount: 0
---

# KRouter

**Your coding agents remember what you decided — and what you changed your mind about.**

Claude Code, Codex, Cursor and DeepSeek Harness share one memory: a folder of plain Markdown in [Obsidian](https://obsidian.md) that you can read and edit. Ask "how did we decide to ship?" and the agent answers with the page it came from. A correction replaces the old answer instead of competing with it. When the vault does not know, the agent is told so, rather than handed something close.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/398894496-arch/KRouter/main/scripts/bootstrap.sh | sh
```

Windows (PowerShell): `irm https://raw.githubusercontent.com/398894496-arch/KRouter/main/scripts/bootstrap.ps1 | iex` · Claude Code plugin: `/plugin install krouter --marketplace 398894496-arch/KRouter` (Claude Code 2.1.275 or later; from a shell, `claude plugin install krouter --marketplace 398894496-arch/KRouter` needs 2.1.292). Third-party marketplaces do not auto-update: run `claude plugin update krouter@krouter`, or turn it on in `/plugin` → Marketplaces → krouter → Enable auto-update.

Python 3 is the only requirement. The installer makes a vault (or uses yours with…

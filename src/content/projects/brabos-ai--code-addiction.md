---
repo: "brabos-ai/code-addiction"
name: "code-addiction"
description: "📋 The Spec-Driven Development framework. Define the what, AI handles the how."
readmeQualityOk: true
url: "https://github.com/brabos-ai/code-addiction"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["ai-coding", "claude-code", "codex", "copilot", "developer-tools", "engineering", "productivity", "spec", "spec-driven-development", "framework"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-02T14:55:04Z"
lastCommitAt: "2026-11-11T19:46:34Z"
lastReleaseAt: "2026-03-05T19:38:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["xmaiconx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aaf4968b62bdcdf2d5417637d9a18ab937371856206fe029394fdb0d07c78aa/brabos-ai/code-addiction"
discussionCount: 0
---

# Code Addiction (ADD)
 

AI-powered development workflows that make you addicted to shipping code. Production-ready commands, scripts, and skills for AI coding assistants, with a single CLI installer.

**Official Framework Site**: [code.brabos.ai](https://code.brabos.ai) — your complete development workflow guide and documentation.

## Why this project exists

Most AI coding setups are fragmented across custom prompts, scripts, and editor-specific conventions.

Code Addiction standardizes this with:
- A shared core in `.codeadd/` (commands, scripts, skills, templates)
- Provider-specific integrations (Claude, Codex, Antigravity, Cursor, OpenCode, ZCode)
- A versioned installer (`codeadd`) with `install`, `update`, `modify`, `providers`, `uninstall`, `doctor`, and `validate`

## Quickstart

```bash
# install latest release
npx codeadd install

# install a specific version (e.g., v0.2.20)
npx codeadd install --version v0.2.20

# install from a release channel
npx codeadd install --channel beta

# install at user level (home directory)
npx codeadd install --global

# running install over an existing installation offers Modify / Update / Reinstall / Cancel
# instead of resetting it…

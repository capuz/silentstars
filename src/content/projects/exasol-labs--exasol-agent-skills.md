---
repo: "exasol-labs/exasol-agent-skills"
name: "exasol-agent-skills"
description: "Exasol skills for AI agents. Optimized for Claude Code and OpenAI Codex 🤖"
readmeQualityOk: true
url: "https://github.com/exasol-labs/exasol-agent-skills"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [56, 44]
topics: ["agentic-ai", "ai", "claude", "claude-code", "claude-skills", "claude-skills-library", "codex", "codex-skills", "exasol", "exasol-integration"]
stars: 10
forks: 4
openIssues: 5
closedIssues: 13
watchers: 0
contributors: 11
recentReleases: 4
createdAt: "2026-02-25T19:03:30Z"
lastCommitAt: "2026-09-01T08:49:55Z"
lastReleaseAt: "2026-07-03T11:36:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 60
maintainers: ["jana-selva", "mkcorneli", "ahsimb"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fdf03bd3e5e4e4562dd65d39d0dfe42564a4b7bff184f6f3d1cdd0900be9dae/exasol-labs/exasol-agent-skills"
---

# Exasol Agent Skills

Skills for Claude Code and OpenAI Codex that provide focused Exasol guidance.
Use `/exasol <task>` or ask naturally.

## Install and update

### Interactive install

```bash
curl -fsSL --proto '=https' --tlsv1.2 \
  https://raw.githubusercontent.com/exasol-labs/exasol-agent-skills/main/install.sh | sh
```

The installer asks whether to install for Claude Code, Codex, or both. Codex
opens a skill picker; select the shared `exasol` router plus any specialized
skills you need. The installer also asks before installing or updating exapump.

### Non-interactive install

```bash
curl -fsSL --proto '=https' --tlsv1.2 \
  https://raw.githubusercontent.com/exasol-labs/exasol-agent-skills/main/install.sh \
  | AGENT=both CODEX_SKILLS=all INSTALL_EXAPUMP=no sh
```

Set `AGENT` to `claude`, `codex`, or `both`. `CODEX_SKILLS=all` installs
all Codex skills without a picker. Set `INSTALL_EXAPUMP=yes` to install or
update exapump; otherwise it is skipped. With no variables, a non-interactive
run installs both agents and all Codex skills, but skips exapump.

Rerun the installer to update the selected integrations.

Manual installation:

```bash
# Claude Code
claude plugin…

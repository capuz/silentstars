---
repo: "PaulRBerg/dot-agents"
name: "dot-agents"
description: "Central repository for AI agent skills (Claude Code, Codex CLI, etc.)"
readmeQualityOk: true
url: "https://github.com/PaulRBerg/dot-agents"
language: "Python"
languages: ["Python"]
languagePcts: [68]
stars: 6
forks: 3
openIssues: 7
closedIssues: 38
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-25T14:45:13Z"
lastCommitAt: "2026-10-04T10:02:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 67
maintainers: ["PaulRBerg"]
openGraphImageUrl: "https://opengraph.githubassets.com/788170baba42ba70f690de8026a4943565d19097398945f1eb4739b081495a32/PaulRBerg/dot-agents"
discussionCount: 1
---

# dot-agents

Central repository for AI agent skills built around the [Skills ecosystem](https://skills.sh/) by Vercel.

## Overview

This repository follows the file structure used by the [`skills`](https://www.npmjs.com/package/skills) CLI.

See the [official announcement](https://vercel.com/changelog/introducing-skills-the-open-agent-skills-ecosystem) for
more details.

## Structure

```
~/.agents/
└── skills/      # Skills loaded by agents
```

## How It Works

AI agents (Claude Code, Cursor, GitHub Copilot, etc.) look for skills in their config directories. This repository acts
as a central location that agents can reference via symlink. For Claude Code, the `agent-skills` publish workflow
installs each skill here and then creates a per-skill relative symlink:

```bash
# Example for a single skill
ln -s ../../.agents/skills/<name> ~/.claude/skills/<name>
```

Claude-only skills (`metadata.install-targets: claude-code`, e.g. `claude-handoff`) are installed as real directories
under `~/.claude/skills` instead of symlinks. This way, all your agents share the same skill library.

### Managing Skills

**Install a skill:**

```bash
bunx skills add owner/repo
```

> [!NOTE] The…

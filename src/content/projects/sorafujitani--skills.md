---
repo: "sorafujitani/skills"
name: "skills"
description: "agentskill maintained by sorafujitani"
readmeQualityOk: true
url: "https://github.com/sorafujitani/skills"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agentskills", "claude", "claudecode", "skill", "sorafujitani"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T06:12:20Z"
lastCommitAt: "2026-08-27T14:31:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 15
maintainers: ["sorafujitani"]
openGraphImageUrl: "https://opengraph.githubassets.com/e61ce26d631b6241dabc85d3d4aa6141c343a34707aea756f5cd185167ee3e07/sorafujitani/skills"
---

# Agent Skills

A collection of agent skills I use day-to-day across Claude Code, Codex, Cursor, and other agents that follow the [open agent skills](https://github.com/vercel-labs/skills) convention.

## Install

Use [`skills`](https://github.com/vercel-labs/skills) to install any single skill, or browse them all interactively:

```bash
# install one skill (replace <skill> with any name from the catalog below)
npx skills add sorafujitani/skills/<skill>

# pick from a list
npx skills add sorafujitani/skills

# install everything for Claude Code only
npx skills add sorafujitani/skills --skill '*' -a claude-code -g -y
```

Each skill ends up at `~/.claude/skills/<skill>/SKILL.md` (or the equivalent directory for other agents).

## Catalog

### Coding modes

Hands-on modes that hold the keyboard for you instead of writing code on your behalf.

- **guided-code** — The agent never writes code; it tells you what to write and where, phase by phase, until the task is done.

  ```bash
  npx skills add sorafujitani/skills/guided-code
  ```

- **print-debug** — One step, one observation. Place a `println` / `console.log`, run, read, then decide the next probe — both to chase a bug and to…

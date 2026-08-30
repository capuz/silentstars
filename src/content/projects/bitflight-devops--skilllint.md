---
repo: "bitflight-devops/skilllint"
name: "skilllint"
description: "The best platform agnostic Linter for AI agent plugins and skills — validates structure, frontmatter, and token limits for Claude Code, Cursor, Codex, and many others!"
readmeQualityOk: true
url: "https://github.com/bitflight-devops/skilllint"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 6
forks: 0
openIssues: 25
closedIssues: 18
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-24T14:29:51Z"
lastCommitAt: "2026-08-30T09:24:23Z"
lastReleaseAt: "2026-03-18T13:43:52Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 83
undervaluedScore: 45
maintainers: ["Jamie-BitFlight", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1165773501/a02b096a-1cba-4b47-b4b2-862e070f5ce9"
---

# skilllint

Static analysis linter for AI agent plugins, skills, and agents — for Claude Code, Cursor, Codex, and any [agentskills.io](https://agentskills.io)-compatible platform.

---

## What it does

`skilllint` validates the structure and content of AI agent files: plugins, skills, agents, and commands. It catches broken references, missing frontmatter, oversized skills, invalid hook configurations, and more — before they cause silent failures at runtime.

```
$ skilllint check plugins/my-plugin

plugins/my-plugin/skills/my-skill/SKILL.md
  SK006  Token count 14823 exceeds recommended limit of 8192

plugins/my-plugin/agents/my-agent.md
  NR001  Namespace reference 'other-plugin:some-skill' — plugin directory not found

2 errors in 2 files
```

---

## Screenshots

### Validation output with errors and warnings

### All available rules

### Rule detail

---

## Installation

```bash
pip install skilllint
```

Or with [uv](https://docs.astral.sh/uv/):

```bash
uv add skilllint          # add to a project
uv tool install skilllint # install as a global tool
```

**Requires Python 3.11–3.14.**

---

## Quick start

```bash
# Validate a plugin directory
skilllint check…

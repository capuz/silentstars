---
repo: "odyssey4me/agent-skills"
name: "agent-skills"
description: "AI Agent Skills to support software architecture, design and development"
readmeQualityOk: true
url: "https://github.com/odyssey4me/agent-skills"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 10
forks: 5
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-20T14:13:28Z"
lastCommitAt: "2026-07-14T05:54:02Z"
lastReleaseAt: "2026-05-06T15:52:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["odyssey4me", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/989f3e8d3e31078b4285fbae583de3e89e4301f0284504631251cf6af6459fcf/odyssey4me/agent-skills"
---

# Agent Skills

Portable skills for AI coding assistants providing integrations with Jira, Confluence, Google Workspace, GitHub, GitLab, Gerrit, and other development tools.

## Quick Start

Install using the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
# Install all skills
npx skills add odyssey4me/agent-skills

# Or install specific skills
npx skills add odyssey4me/agent-skills --skill google --skill jira
```

For manual installation or other AI agents (Cursor, OpenCode, etc.), see the [User Guide](https://github.com/odyssey4me/agent-skills/blob/HEAD/docs/user-guide.md#installation).

## Available Skills

| Skill | Description |
|-------|-------------|
| [Confluence](https://github.com/odyssey4me/agent-skills/blob/HEAD/skills/confluence/SKILL.md) | Content management, page CRUD with Markdown support, CQL search |
| [Gerrit](https://github.com/odyssey4me/agent-skills/blob/HEAD/skills/gerrit/SKILL.md) | Code review, submit changes, download patches via `git-review` CLI |
| [GitHub](https://github.com/odyssey4me/agent-skills/blob/HEAD/skills/github/SKILL.md) | Issues, pull requests, workflows, and repositories via `gh` CLI |
|…

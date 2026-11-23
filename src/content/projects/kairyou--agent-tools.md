---
repo: "kairyou/agent-tools"
name: "agent-tools"
description: "Reusable skills and integrations for coding agents, including status lines, gateway usage, image understanding, and session logs."
readmeQualityOk: true
url: "https://github.com/kairyou/agent-tools"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["agent-skills", "claude-code", "codex", "developer-tools", "opencode", "statusline", "coding-agents", "agent-hooks", "usage-monitoring", "session-logging"]
stars: 180
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-07T06:20:02Z"
lastCommitAt: "2026-11-23T10:28:34Z"
lastReleaseAt: "2026-08-03T10:05:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 24
maintainers: ["kairyou", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c90bd11d90d77d25a0a5185772d191c1695cbe79febfafbf06ee7c646f1a8b3f/kairyou/agent-tools"
---

# Agent Tools

Reusable Agent Skills for compatible coding agents, plus per-agent runtime capabilities for statusline, provider usage, vision, and session logging.

Requires Node.js >= 22.

[中文](https://github.com/kairyou/agent-tools/blob/HEAD/README.zh-CN.md)

## Skills

### Install

```bash
# List available skills
npx -y skills@latest add kairyou/agent-tools --list

# Install globally (pass one or more names after --skill)
npx -y skills@latest add kairyou/agent-tools --skill <name...> -g -y
```

The Skills installer automatically detects and installs to the Skill directories
of most supported agents.

### at-commit

Generate a Conventional Commits message from staged changes and wait for user confirmation before committing.

```bash
npx -y skills@latest add kairyou/agent-tools --skill at-commit -g -y
```

Usage:

- `/at-commit [<language>]` — language for the commit description (Conventional Commits tokens stay in English)

### at-review

Review local changes or a hosted PR/MR for correctness bugs, regressions, convention violations, and high-value cleanup findings.

```bash
npx -y skills@latest add kairyou/agent-tools --skill at-review -g -y
```

Usage:

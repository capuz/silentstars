---
repo: "dancing-bear-show/dancing-bear"
name: "dancing-bear"
description: "Dependency-light Python CLIs for personal workflows — mail, calendar, telemetry, and agent orchestration."
readmeQualityOk: true
url: "https://github.com/dancing-bear-show/dancing-bear"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["automation", "calendar", "cli", "gmail", "oauth2", "outlook", "productivity", "python", "resume", "workflow"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-19T17:57:43Z"
lastCommitAt: "2026-08-28T14:19:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["brian-sherwin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad473978f16a0bc5cad1266217a1152089f30ac1f279befa351180358a2e8ea8/dancing-bear-show/dancing-bear"
---

# Personal Assistants

> *You don't need to outrun the bear. You just need to outrun everyone else.*

New here? [Getting Started Guide](https://github.com/dancing-bear-show/dancing-bear/blob/HEAD/GETTING_STARTED.md) — zero to productive in 10 minutes.

---

Unified, dependency-light CLIs for personal workflows across mail, calendars, schedules,
phone layouts, resumes, and WhatsApp. Built to be safe by default (plan and dry-run first),
with a single YAML source of truth for Gmail and Outlook filters.

Self-contained: all helpers and utilities are repo-internal. External dependencies are
minimal and lazily imported. This ensures public CLI backwards compatibility and reduces
fragility from external package changes. Internal APIs can be refactored freely — update
all call sites atomically without backwards-compatible wrappers.

Built with [Claude Code](https://claude.ai/claude-code). See [Claude Code Setup](https://github.com/dancing-bear-show/dancing-bear/blob/HEAD/GETTING_STARTED.md#claude-code-setup).

## Quick Start

```bash
git clone https://github.com/dancing-bear-show/dancing-bear.git
cd dancing-bear
make venv
./bin/assistant --help
```

CLI help:
- `./bin/assistant…

---
repo: "itsmesherry/claude-audit"
name: "claude-audit"
description: "Command-line code auditor: fast static checks, plus an optional audit where Claude investigates the code with read-only tools."
readmeQualityOk: true
url: "https://github.com/itsmesherry/claude-audit"
homepage: "https://www.npmjs.com/package/claude-audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "audit", "claude", "cli", "code-review", "nodejs", "security", "static-analysis", "typescript", "anthropic"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-03-15T11:10:13Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-11-02T13:39:07Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 65
undervaluedScore: 35
maintainers: ["itsmesherry", "Mohid2025", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/itsmesherry/claude-audit"
---

A command-line code auditor: fast static checks,<br>
  plus an optional audit where Claude investigates the code with read-only tools.

It scores a project per category and lists each finding with its file, line and a suggested fix. Reports come out in the terminal, and as Markdown, HTML or JSON. Without an API key it runs the static checks only, and nothing leaves your machine.

## Usage

```bash
# Static checks only. No API key, nothing leaves your machine.
npx claude-audit --static

# Full audit: static checks, then Claude investigates the project.
ANTHROPIC_API_KEY=sk-ant-... npx claude-audit ./path/to/project
```

Node 18 or newer. To install it instead of using `npx`: `npm install -g claude-audit`.

Report files are written to `.claude-audit/` in the audited project, so add that directory to your `.gitignore`.

## What it checks

There are three modes.

| Mode | How to run it | What happens |
|------|---------------|--------------|
| Static | `--static`, or no API key | Pattern-based rules only. Runs in milliseconds, offline. |
| Agentic | the default with an API key | Claude gets read-only tools (list files, search, read a file) and decides what to look at. Slower and costs…

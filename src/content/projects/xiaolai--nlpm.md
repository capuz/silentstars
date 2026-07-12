---
repo: "xiaolai/nlpm"
name: "nlpm"
description: "Natural-Language Programming Manager — scan, lint, and score NL artifacts with Claude-native quality scoring"
readmeQualityOk: true
url: "https://github.com/xiaolai/nlpm"
homepage: "https://nlpm.com/"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 88
forks: 25
openIssues: 254
closedIssues: 75
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-25T06:49:39Z"
lastCommitAt: "2026-07-12T06:18:45Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 30
maintainers: ["xiaolai"]
openGraphImageUrl: "https://opengraph.githubassets.com/dece83f3b5fa66c0f574abf8475b2e2d8b7df74334d3d428d7a7dce95def10e1/xiaolai/nlpm"
---

# nlpm

Natural-Language Programming Manager — score, check, fix, and test NL artifacts across **Claude Code, Codex CLI, and Antigravity**. Tier-aware scoring with per-tool overlays.

Part of the [xiaolai plugin marketplace](https://github.com/xiaolai/claude-plugin-marketplace).

NLPM is the only multi-tool NL artifact validator that systematically checks **manifest-vs-disk consistency** — the bug class where a SKILL.md exists on disk but is silently missing from `plugin.json` (and therefore invisible after `claude plugin install`). Verified across 8+ tools including Anthropic's official `plugin-validator` and the Linux Foundation's `skills-ref`. See [`analysis/ecosystem-gap.md`](https://github.com/xiaolai/nlpm/blob/HEAD/analysis/ecosystem-gap.md) for the research.

## What it does

NLPM treats natural language artifacts as **programs that can be linted**. Just as ESLint scores JavaScript and ruff scores Python, NLPM scores the markdown files that drive AI behavior: skills, agents, commands, rules, hooks, prompts, CLAUDE.md, and memory files.

Eight commands, each doing one thing:

| Command | What it does |
|---------|-------------|
| `/nlpm:ls` | Discover and inventory all NL…

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
stars: 110
forks: 28
openIssues: 7
closedIssues: 334
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-25T06:49:39Z"
lastCommitAt: "2026-08-08T04:34:58Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 36
maintainers: ["xiaolai"]
openGraphImageUrl: "https://opengraph.githubassets.com/377b3f6c1a18fed37ba6be5e4df5e87f244f45700e04d70ed3b926c202b1a875/xiaolai/nlpm"
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

---
repo: "motock/fagan"
name: "fagan"
description: "Spend tokens on judgment, not typing. An MCP-native autonomous SDLC pipeline: frontier models plan and review, local models implement — engineering discipline on a $20/month budget."
readmeQualityOk: true
url: "https://github.com/motock/fagan"
homepage: "https://github.com/motock/fagan/blob/master/docs/DEMO.md"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ai-agents", "autonomous-agents", "claude-code", "code-review", "developer-tools", "llm", "local-llm", "mcp", "model-context-protocol", "ollama"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-06-18T17:33:46Z"
lastCommitAt: "2026-10-29T21:24:18Z"
lastReleaseAt: "2026-10-22T09:44:25Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["motock", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59d3556ac47e127d98f54e11bda1d79008ea15147e3980b5f2a39d2e83c68dfe/motock/fagan"
discussionCount: 0
---

# Fagan

**Spend tokens on judgment, not typing.**

*A real story ([STE-1, PR #986](https://github.com/motock/fagan/pull/986)) crossing the board: implemented by an open-weight model, sent back once by review, merged. 14 minutes, time-lapsed.*

**Try it** (macOS; Linux via Ollama or LM Studio), then see the [Quickstart](#quickstart):

```bash
curl -fsSL https://raw.githubusercontent.com/motock/fagan/master/scripts/remote-install.sh | bash
```

Frontier models cost money per token and are excellent at judgment. Local models
run free and are adequate at typing. This pipeline splits software engineering
along exactly that line: a frontier model decomposes the work, plans it, reviews
the diff, and adjudicates anything risky — while a local model writes the
implementation at no marginal cost.

What makes the cheap half trustworthy is inspection. In Michael Fagan's [1976 IBM
study](https://www.semanticscholar.org/paper/Design-and-Code-Inspections-to-Reduce-Errors-in-Fagan/fe02f66911c6331a81d01f9cf4fdce05b6b2aca3),
formal inspection found 82% of the defects in the released product — 38 per KLOC,
against 8 per KLOC for unit testing. Quality lives in the gate, not in the author.
So this…

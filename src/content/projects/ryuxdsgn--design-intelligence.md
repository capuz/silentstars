---
repo: "ryuxdsgn/design-intelligence"
name: "design-intelligence"
description: "RYUX gives AI agents the design intelligence to understand product context, make intentional design decisions, and evaluate what they create."
readmeQualityOk: true
url: "https://github.com/ryuxdsgn/design-intelligence"
homepage: "https://ryux.design"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["accessibility", "agent-skills", "ai", "ai-agents", "claude-code", "design", "design-critique", "design-systems", "frontend", "mcp"]
stars: 51
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-02T22:30:39Z"
lastCommitAt: "2026-10-23T09:27:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["ryuxdsgn"]
openGraphImageUrl: "https://opengraph.githubassets.com/448c5b05a9ac8cde0df27fc7a3bd496dbf6dc374cec139a5326d14d4799b5d66/ryuxdsgn/design-intelligence"
---

# RYUX

### Understand before you design.

AI can generate UI in seconds. But does it understand what it's designing?

RYUX helps AI agents make better-informed design decisions. It gives them a structured way to
understand product context, separate facts from assumptions, decide, and verify the result.

**The goal isn't more UI. It's fewer decisions made silently.**

**[Get started](#get-started)** · **[See the benchmark](#see-the-difference)** · **[Documentation](https://github.com/ryuxdsgn/design-intelligence/blob/HEAD/GUIDE.md)**

## See the difference

Same brief, same model, a fresh agent per run: a personal finance app with a dashboard, a payment,
and the payment success screen, designed in pen.dev. Run 1 of each side, chosen before the runs.

Both sides look finished, and a fresh reader understood both dashboards (3 of 3 questions). The
decisions differ:

- **Asking.** With no skill, the agent drew right away and picked a market and currency itself. With
  RYUX, it asked three questions first, in 3 of 3 runs.
- **Facts.** With no skill, 7 to 9 kinds of things the brief never gave were shown as real: points,
  promos, a PayLater limit with "0% fee", vouchers, ride and…

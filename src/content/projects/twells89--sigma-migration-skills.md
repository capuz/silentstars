---
repo: "twells89/sigma-migration-skills"
name: "sigma-migration-skills"
description: "Claude Code plugin marketplace: migrate Tableau / Power BI / Qlik to Sigma (converter + assessment per tool). Validated with warehouse parity."
url: "https://github.com/twells89/sigma-migration-skills"
language: "Ruby"
languages: ["Ruby", "Python"]
languagePcts: [65, 29]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-03T23:06:14Z"
lastCommitAt: "2026-06-27T00:47:39Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["twells89", "mendezke"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb0d6523d3c38058cf13ffb03ca1f8afce0578dd23af451fe8d2a22a8cc116a6/twells89/sigma-migration-skills"
discussionCount: 0
---

# Sigma migration skills

A **plugin marketplace** of skills for migrating BI tools to
[Sigma](https://www.sigmacomputing.com/). Each plugin is a pair of skills — a
**converter** (rebuild the content in Sigma) and an **assessment** (inventory,
complexity, and a value/cost shortlist) — validated end-to-end with **parity
checked against the source warehouse**, not just a best-effort port.

**Works with any coding agent.** Install it as a [Claude Code](https://claude.com/claude-code)
plugin, or use it from Cursor, Cortex Code, and others via [`AGENTS.md`](AGENTS.md) — the
skills themselves are agent-neutral (a `SKILL.md` + `scripts/`), and credentials load from a
shared `~/.sigma-migration/env` under any agent.

## Install

**Claude Code** — add the marketplace and install the plugins you need:

```text
/plugin marketplace add twells89/sigma-migration-skills
/plugin install sigma-authoring@sigma-migration-skills      # companion Sigma spec — install alongside any converter
/plugin install tableau-to-sigma@sigma-migration-skills
/plugin install powerbi-to-sigma@sigma-migration-skills
/plugin install qlik-to-sigma@sigma-migration-skills
/plugin install…

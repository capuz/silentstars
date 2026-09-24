---
repo: "omrikais/cctally"
name: "cctally"
description: "Claude Code usage tracker and local dashboard for Pro/Max subscription limits - weekly cost-per-percent trend, quota forecasts, threshold alerts. ccusage-compatible."
readmeQualityOk: true
url: "https://github.com/omrikais/cctally"
homepage: "https://www.npmjs.com/package/cctally"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [75, 20]
topics: ["anthropic", "ccusage", "claude", "claude-code", "cli", "codex", "cost-tracking", "dashboard", "tui", "usage-tracker"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-04T09:05:02Z"
lastCommitAt: "2026-09-24T08:41:28Z"
lastReleaseAt: "2026-05-13T17:52:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 58
maintainers: ["omrikais", "darlingm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1228680723/7a20c84b-77d9-4587-8f50-9f3fe0e31104"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/img/logo-dark.png">
  </picture>
</p>

  <strong>Understand Claude Code and Codex spend: a local dashboard, conversation viewer, and CLI reports for your subscription quota.</strong>
</p>

</p>

Your Claude Code plan meters you with a percentage that creeps up all week. cctally reads your local session logs and turns that percentage into dollars: what each percent of quota costs you, whether you are on track to cap before the reset, and where the spend is going. It does the same for OpenAI's Codex CLI. Everything runs on your own machine, against your own data. No account, no API key, and nothing is uploaded.

> **Claude cost coverage:** Claude dollar and token totals are
> [transcript-derived lower bounds](https://github.com/omrikais/cctally/blob/HEAD/docs/claude-cost-coverage.md), not exact
> `/usage` billing totals. Claude Code can bill title-generation and
> prompt-suggestion/side-query requests without retaining usable model/token
> fields. cctally does not guess the missing amount. Codex accounting uses a
> different retained source and is unaffected.

</p>

**Latest stable: v1.109.0** (2026-09-15)…

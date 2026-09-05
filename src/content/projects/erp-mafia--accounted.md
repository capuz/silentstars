---
repo: "erp-mafia/accounted"
name: "accounted"
description: "The agent-native open source ERP"
readmeQualityOk: true
url: "https://github.com/erp-mafia/accounted"
homepage: "https://accounted.se"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 258
forks: 60
openIssues: 86
closedIssues: 287
watchers: 2
contributors: 21
recentReleases: 0
createdAt: "2026-02-13T14:34:18Z"
lastCommitAt: "2026-09-05T07:49:21Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 30
maintainers: ["jakobwennberg-oss", "mattssonn", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/44c5fdbb36973772b30d33348e8bf4dec3213855bca3104927373685be2279c7/erp-mafia/accounted"
discussionCount: 1
---

# Accounted

Open-source Swedish accounting software for sole traders (enskild firma) and limited companies (aktiebolag). Double-entry bookkeeping that complies with Swedish accounting law, built to be operated by you or by your AI agent.

[Website](https://accounted.se) · [Hosted app](https://app.gnubok.se) · [Documentation](https://docs.gnubok.se)

## Why Accounted?

**Compliant by construction.** Accounted implements double-entry bookkeeping under Swedish accounting law (Bokföringslagen). Voucher immutability, sequential voucher numbering, period locks, and 7-year document retention are enforced by database triggers, not by convention. Corrections are made the legal way, with reversal entries (storno), never by editing history. See [ARCHITECTURE.md](https://github.com/erp-mafia/accounted/blob/HEAD/ARCHITECTURE.md) for how.

**Agent-native.** The full bookkeeping engine is exposed as 150+ MCP (Model Context Protocol) tools with scoped API keys or OAuth, so an AI agent can do the books in Accounted: categorize transactions, draft vouchers, reconcile periods, and prepare declarations. Posting is staged for human approval, so the agent proposes and you decide.

**Yours to run.**…

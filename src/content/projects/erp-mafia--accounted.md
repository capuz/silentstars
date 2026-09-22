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
stars: 373
forks: 99
openIssues: 268
closedIssues: 640
watchers: 7
contributors: 26
recentReleases: 0
createdAt: "2026-02-13T14:34:18Z"
lastCommitAt: "2026-09-22T08:46:51Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 29
maintainers: ["jakobwennberg-oss", "mattssonn"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee92b47201edcb1eac54b370c331db8dccfb81f358f826d31873c5c38dee64e1/erp-mafia/accounted"
discussionCount: 1
---

# Accounted

Open-source Swedish accounting software for sole traders (enskild firma) and limited companies (aktiebolag). Double-entry bookkeeping that complies with Swedish accounting law, built to be operated by you or by your AI agent.

[Website](https://accounted.se) · [Hosted app](https://app.accounted.se) · [Documentation](https://docs.gnubok.se)

## Why Accounted?

**Compliant by construction.** Accounted implements double-entry bookkeeping under Swedish accounting law (Bokföringslagen). Voucher immutability, sequential voucher numbering, period locks, and 7-year document retention are enforced by database triggers, not by convention. Corrections are made the legal way, with reversal entries (storno), never by editing history. See [ARCHITECTURE.md](https://github.com/erp-mafia/accounted/blob/HEAD/ARCHITECTURE.md) for how.

**Agent-native.** The full bookkeeping engine is exposed as 150+ MCP (Model Context Protocol) tools with scoped API keys or OAuth, so an AI agent can do the books in Accounted: categorize transactions, draft vouchers, reconcile periods, and prepare declarations. Posting is staged for human approval, so the agent proposes and you decide.

**Yours to run.**…

---
repo: "RoboFinSystems/robosystems"
name: "robosystems"
description: "AI-native financial intelligence platform for accounting, financial reporting, and investment management. Models your ledger, reports, and portfolios as a knowledge graph that AI agents can query and operate. Fork-ready: GitHub Actions CI/CD deploys the CloudFormation infrastructure to your own AWS account."
readmeQualityOk: true
url: "https://github.com/RoboFinSystems/robosystems"
homepage: "https://robosystems.ai"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["aws", "fastapi", "knowledge-graph", "xbrl", "arelle", "postgresql", "financial", "financial-data", "financial-analysis", "accounting"]
stars: 21
forks: 6
openIssues: 5
closedIssues: 18
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-08-10T20:37:56Z"
lastCommitAt: "2026-08-15T04:02:51Z"
lastReleaseAt: "2025-11-10T06:07:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["jfrench9", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/caed888db2d02f6e31dc39d5d42db3bbe741353c90d9c94db8d349961c0b89ff/RoboFinSystems/robosystems"
discussionCount: 1
---

# RoboSystems

RoboSystems is an open-source, AI-native financial intelligence platform for accounting, financial reporting, and investment management. It models your financial data as a **knowledge graph** — transactions, facts, reporting elements, and the calculation structures that relate them are all nodes and edges, with the semantics preserved rather than flattened into rows you query around. On top of that graph it gives AI agents and analysts a ledger-grade system of record they can both query and operate — closing the books, producing reports, and analyzing portfolios across your own ledger, your holdings, and SEC public filings queryable alongside them. Powers [RoboLedger](https://roboledger.ai) and [RoboInvestor](https://roboinvestor.ai).

**Every tenant gets their own graph.** Not a row-level slice of a shared table — a dedicated graph database on its own instance, with a dedicated OLTP schema behind it. Your ontology, your taxonomies, and your calculation structures live in it as artifacts you can read, export, and take with you.

## Platform

The platform provides the core infrastructure that all extensions build on:

- **Dedicated Infrastructure**: Tiered LadybugDB…

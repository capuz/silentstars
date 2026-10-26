---
repo: "stigmer/stigmer"
name: "stigmer"
description: "The open-source backend for the agents in your product."
readmeQualityOk: true
url: "https://github.com/stigmer/stigmer"
homepage: "https://stigmer.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agents", "golang", "mcp", "open-source", "python", "ai-agents", "java", "llm", "multi-tenant", "sandbox"]
stars: 8
forks: 6
openIssues: 561
closedIssues: 802
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-17T23:54:27Z"
lastCommitAt: "2026-10-26T20:59:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 72
maintainers: ["whysosuresh", "swarupdonepudi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1136576010/c4a911df-247a-48ca-bcf4-de4371eeb327"
---

# Stigmer

**The open-source backend for the agents in your product.** It runs behind
your app, the way your database does. Each of your customers gets an agent with
its own computer, one that works on a job for hours, asks before acting and
keeps their data apart from every other customer's.

Run it yourself on a laptop, one server or Kubernetes, or use Stigmer Cloud.
Agents run on your own model provider key.

## Quick start

An accounting product's customer uploads a ledger, and an agent hands back a
variance report as a file:

```bash
brew install stigmer/tap/stigmer
export ANTHROPIC_API_KEY=<your Anthropic API key>
stigmer up
curl -fsSLO https://raw.githubusercontent.com/stigmer/stigmer/main/examples/variance-report/variance-reporter.yaml
curl -fsSLO https://raw.githubusercontent.com/stigmer/stigmer/main/examples/variance-report/ledger.csv
stigmer apply -f variance-reporter.yaml
stigmer run variance-reporter --attach ledger.csv --download ./out -m "Review this quarter's ledger."
cat out/variance-report.md
```

The customer's ledger went in, and their report came back as a file in `./out`,
written by the agent. [Your first agent…

---
repo: "bsaffel/moneybin"
name: "moneybin"
description: "Open-source, local-first, AI-native personal finance platform built on DuckDB"
readmeQualityOk: true
url: "https://github.com/bsaffel/moneybin"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["duckdb", "local-first", "mcp", "model-context-protocol", "personal-finance", "python", "sqlmesh"]
stars: 6
forks: 0
openIssues: 28
closedIssues: 45
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-25T00:05:05Z"
lastCommitAt: "2026-11-09T00:53:36Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 73
maintainers: ["bsaffel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/15e6a058b6867a0170c96a7d06579f16df1aeb559de92d377a6a6cbe38936bf3/bsaffel/moneybin"
---

**A local data warehouse for personal finance.**

  Import financial data into an encrypted DuckDB database on your machine.
  Explore it with SQL, use built-in reports, or connect your AI assistant through MCP.

  [Try the demo](#try-it) · [Documentation](https://github.com/bsaffel/moneybin/blob/HEAD/docs/README.md) · [Architecture](https://github.com/bsaffel/moneybin/blob/HEAD/docs/architecture.md)

Bring bank exports, linked accounts, and spreadsheets together to track spending,
find recurring charges, and follow your net worth. The CLI and 50-tool MCP server
read the same tables; the SQL behind each report is available to inspect.

MoneyBin is pre-v1 and installs from source. I use it for my own finances.
macOS and Linux are supported; Windows is untested.

## Try it

Requires Python 3.12+, [uv](https://docs.astral.sh/uv/), Git, and GNU Make.

```bash
git clone https://github.com/bsaffel/moneybin.git
cd moneybin
make setup
uv run moneybin demo
```

The demo loads synthetic data into a separate profile. No bank connection or AI
account is needed. It makes `demo` the active profile.

Query the largest spending categories. This example uses synthetic USD data:

```console
$ uv…

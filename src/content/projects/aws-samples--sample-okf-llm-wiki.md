---
repo: "aws-samples/sample-okf-llm-wiki"
name: "sample-okf-llm-wiki"
description: "Data Wiki turns data into portable knowledge bundles following Open Knowledge Format (OKF) and serves them to AI agents over the Model Context Protocol (MCP)."
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-okf-llm-wiki"
homepage: "https://aws-samples.github.io/sample-okf-llm-wiki/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [74, 21]
topics: ["aws-glue", "llm-wiki", "okf", "open-knowledge-format", "data-wiki", "agentic-ai", "ai-agents", "context", "context-engineering", "text-sql"]
stars: 33
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-07-06T13:52:48Z"
lastCommitAt: "2026-10-27T12:40:53Z"
lastReleaseAt: "2026-10-23T08:11:36Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 43
maintainers: ["edvinhallvaxhiu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1fc2aee7aeccd1dcf27590c3120c5d09c3842d1115eb9df6dfe292f86c50fca/aws-samples/sample-okf-llm-wiki"
---

# Data Wiki: AI-powered knowledge bundles for your AWS data, served to agents over MCP

**Data Wiki** turns your AWS data sources into portable knowledge bundles and serves them to AI agents over the Model Context Protocol (MCP). It reads a source's catalog, has an LLM author a set of markdown documents describing each dataset — its tables, joins, metrics, and known issues — keeps those documents in sync as the source changes, and exposes them to agents through an MCP server. The result: agents that understand *what your data means*, not just what columns exist.

Two source types are supported today: the **AWS Glue Data Catalog** (queried via Amazon Athena) and **Amazon Redshift** (provisioned clusters or Serverless, via the Redshift Data API). The architecture is source-pluggable — see [`docs/DATA_SOURCES.md`](https://github.com/aws-samples/sample-okf-llm-wiki/blob/HEAD/docs/DATA_SOURCES.md) for how a source is implemented and how to add another.

The bundles are Open Knowledge Format (OKF) bundles — a bundle is a directory of markdown files with YAML frontmatter. Data Wiki maps OKF's model onto AWS as `data domain → dataset → table` (a dataset is a Glue database or a Redshift…

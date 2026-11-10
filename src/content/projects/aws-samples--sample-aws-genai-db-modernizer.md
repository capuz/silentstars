---
repo: "aws-samples/sample-aws-genai-db-modernizer"
name: "sample-aws-genai-db-modernizer"
description: "Assess a relational database for modernization on AWS. Analyzes your real schema and queries, scores each query pattern against purpose-built engines (DynamoDB, DocumentDB, Aurora, OpenSearch, ElastiCache), and produces schema designs, migration waves and cost estimates. Runs locally with Claude Code."
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-aws-genai-db-modernizer"
homepage: "https://aws-samples.github.io/sample-aws-genai-db-modernizer/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["aurora", "aws", "claude-code", "database-migration", "database-modernization", "documentdb", "dynamodb", "elasticache", "generative-ai", "mysql"]
stars: 14
forks: 21
openIssues: 184
closedIssues: 908
watchers: 3
contributors: 25
recentReleases: 9
createdAt: "2025-05-16T22:43:34Z"
lastCommitAt: "2026-11-10T14:16:43Z"
lastReleaseAt: "2026-10-29T14:28:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 88
maintainers: ["tebanieo", "BishalChhetri"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb0aa51a313146dd2bef88068a790b98c6fe9d6180825c0522ad1c130631e854/aws-samples/sample-aws-genai-db-modernizer"
---

# Database Modernizer Assessment

Database Modernizer Assessment reads the schema and query statistics of a relational database and tells you which AWS purpose-built database should serve each query. It then designs the target schemas and writes an executive report, an engineering report and a cost projection, all from your real workload.

> **Disclaimer:** This is a sample project intended for educational and evaluation purposes. It requires proper review, testing, and modification before use in production environments. Use at your own risk.

*A full `/modernize` run on the WordPress sample (about 7.5 minutes, time-lapsed to 78 seconds) with its one approval gate and final summary, then the job's results and summary pages in the local UI and four pages of the executive report PDF.*

## Quick start

You need Python 3.12+, [uv](https://docs.astral.sh/uv/) and [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Node 22 is optional: with it, a local UI opens next to the chat. No AWS account, API key or Docker is needed.

### 1. Install

```bash
git clone https://github.com/aws-samples/sample-aws-genai-db-modernizer.git
cd sample-aws-genai-db-modernizer
uv sync
```

### 2.…

---
repo: "aws-samples/sample-aws-genai-db-modernizer"
name: "sample-aws-genai-db-modernizer"
description: "Assess a relational database for modernization on AWS. Analyzes your real schema and queries, scores each query pattern against purpose-built engines (DynamoDB, DocumentDB, Aurora, OpenSearch, ElastiCache), and produces schema designs, migration waves and cost estimates. Runs locally with Claude Code."
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-aws-genai-db-modernizer"
homepage: "https://aws-samples.github.io/sample-aws-genai-db-modernizer/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["aurora", "aws", "claude-code", "database-migration", "database-modernization", "documentdb", "dynamodb", "elasticache", "generative-ai", "mysql"]
stars: 8
forks: 16
openIssues: 126
closedIssues: 348
watchers: 3
contributors: 19
recentReleases: 5
createdAt: "2025-05-16T22:43:34Z"
lastCommitAt: "2026-10-16T08:27:12Z"
lastReleaseAt: "2026-10-13T18:15:07Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 94
maintainers: ["tebanieo", "omar3903", "AnushreeKasturi"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec3a7b90ce512337ca96b3edc32a731772270e87b23e50261f0c2af2a2d19f2/aws-samples/sample-aws-genai-db-modernizer"
---

# Database Modernizer Assessment

> **Disclaimer:** This is a sample project intended for educational and evaluation purposes. It requires proper review, testing, and modification before use in production environments. Use at your own risk.

**The help site is at [aws-samples.github.io/sample-aws-genai-db-modernizer](https://aws-samples.github.io/sample-aws-genai-db-modernizer/).** It has the same quick start plus other ways to run the tool, how to read the results, a sample report, an FAQ and how to contribute. The overview and quick start below are the source for those pages on the site.

*A full `/modernize` run on the WordPress sample (47 minutes, time-lapsed), then the local UI: the executive summary, the query flow, the cost per engine and the access pattern explorer.*

Moving off a monolithic relational database raises hard questions. Which queries belong in DynamoDB? Which need a document store? What stays relational? A wrong answer can force a redesign in the middle of the project.

**Database Modernizer Assessment answers these questions using your real workload.** Give it the collected schema and queries of a PostgreSQL, MySQL, SQL Server or Oracle database. It analyzes…

---
repo: "aws-samples/sample-aws-genai-db-modernizer"
name: "sample-aws-genai-db-modernizer"
description: "Assess a relational database for modernization on AWS. Analyzes your real schema and queries, scores each query pattern against purpose-built engines (DynamoDB, DocumentDB, Aurora, OpenSearch, ElastiCache), and produces schema designs, migration waves and cost estimates. Runs locally with Claude Code."
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-aws-genai-db-modernizer"
homepage: "https://aws-samples.github.io/sample-aws-genai-db-modernizer/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["aurora", "aws", "claude-code", "database-migration", "database-modernization", "documentdb", "dynamodb", "elasticache", "generative-ai", "mysql"]
stars: 8
forks: 20
openIssues: 136
closedIssues: 665
watchers: 3
contributors: 22
recentReleases: 6
createdAt: "2025-05-16T22:43:34Z"
lastCommitAt: "2026-10-25T08:15:10Z"
lastReleaseAt: "2026-10-20T18:39:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 96
maintainers: ["tebanieo", "dependabot[bot]", "aazminu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d36bc6ca4de363d104d5eb0c3f297e7d5fcc433e9f13ef7ac60b73b0859a31c3/aws-samples/sample-aws-genai-db-modernizer"
---

# Database Modernizer Assessment

> **Disclaimer:** This is a sample project intended for educational and evaluation purposes. It requires proper review, testing, and modification before use in production environments. Use at your own risk.

**The help site is at [aws-samples.github.io/sample-aws-genai-db-modernizer](https://aws-samples.github.io/sample-aws-genai-db-modernizer/).** It has the same quick start plus other ways to run the tool, how to read the results, a sample report, an FAQ and how to contribute. The overview and quick start below are the source for those pages on the site.

*A full `/modernize` run on the WordPress sample (about 8 minutes, time-lapsed) with its one approval gate, then the job's results page in the local UI: the headline and the three deliverable downloads, the query flow, the cost per engine, the migration roadmap and the close calls; then the executive report PDF.*

Moving off a monolithic relational database raises hard questions. Which queries belong in DynamoDB? Which need a document store? What stays relational? A wrong answer can force a redesign in the middle of the project.

**Database Modernizer Assessment answers these questions using…

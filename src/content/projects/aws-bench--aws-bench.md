---
repo: "aws-bench/aws-bench"
name: "aws-bench"
description: "aws-bench measures how well AI agents and model combinations perform on real AWS work — diagnosing misconfigurations, provisioning infrastructure, and operating live cloud environments."
readmeQualityOk: true
url: "https://github.com/aws-bench/aws-bench"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "aws", "benchmark"]
stars: 127
forks: 15
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 16
recentReleases: 1
createdAt: "2026-07-14T14:33:45Z"
lastCommitAt: "2026-09-16T08:47:31Z"
lastReleaseAt: "2026-07-24T17:38:28Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 28
maintainers: ["nipuns", "nihal712", "sagdutt"]
openGraphImageUrl: "https://opengraph.githubassets.com/656bc719b6cc3194476e7a7abdca950f86616883ad7bc5cda8389774f069368f/aws-bench/aws-bench"
discussionCount: 1
---

# aws-bench

An open-source benchmark for evaluating AI coding agents on real-world AWS tasks.

## Overview

aws-bench measures how well AI agents and model combinations (e.g. Claude Code with Sonnet, Codex with GPT) perform on real AWS work — diagnosing misconfigurations, provisioning infrastructure, and operating live cloud environments.

Unlike benchmarks that score against static fixtures, aws-bench runs each agent against **disposable, real AWS environments**:

1. It provisions isolated AWS accounts and deploys a **scenario** (real infrastructure defined as CDK stacks).
2. It runs the agent against a **task** inside a sandboxed container, with scoped AWS credentials.
3. It scores the result with an **automated verifier** — either an LLM judge (for read-only diagnosis tasks) or a programmatic check against live AWS state (for tasks that create or modify resources).

This gives a faithful, reproducible signal of agent performance on the kind of work AWS practitioners actually do.

- **Datasets:** tasks and scenarios live in the companion repo, [aws-bench-datasets](https://github.com/aws-bench/aws-bench-datasets).

> **Built on Harbor.** aws-bench is based on…

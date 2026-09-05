---
repo: "arsenyinfo/nitpicker"
name: "nitpicker"
description: "Standalone Rust CLI that runs multiple LLM reviewers concurrently on a git repo and aggregates findings"
readmeQualityOk: true
url: "https://github.com/arsenyinfo/nitpicker"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 118
forks: 10
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-04T10:22:49Z"
lastCommitAt: "2026-09-05T07:49:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 26
maintainers: ["arsenyinfo", "PipeKnight", "vilmar-hillow"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b24fb323c3602480fb7c2371ca476f845267d90c22bfbe36e60220968578848/arsenyinfo/nitpicker"
---

# nitpicker

Multi-reviewer code review using LLMs. Spawns parallel agents with different models/prompts, aggregates their feedback into a final verdict. Supports two modes — parallel aggregation and actor-critic debate — across two task types: code review and free-form questions.

[**Free Web version**](https://arseny.info/nitpicker) is available for open source projects.

Each reviewer is an agentic loop that can call tools (read files, grep, glob, git commands) to explore the repo before writing its review. Discovery roles build a quick initial map and default to one early, disjoint subagent wave for multi-surface targets; validation roles delegate only bounded verification of submitted claims. Tool outputs include lightweight headers and clearer truncation/no-match messages so agents can reason about partial evidence more reliably; the git tool runs one invocation with no shell and rejects pipes/redirects with a pointer to the working alternative. A separate aggregator model deduplicates and synthesizes the individual reviews into a final verdict.

Diff and PR reviews capture a frozen orientation snapshot before reviewers fan out: full HEAD,
resolved base and merge-base…

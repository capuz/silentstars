---
repo: "JaysonRawlins/cdk-diff-pr-github-action"
name: "cdk-diff-pr-github-action"
description: "Used for displaying potential github actions as a PR comment.  Does this nice clean table format utilizing change sets.  Allows for filtering and quick scan to see what is going to be changed or deleted.  Inspired by how nicely formatted the AWS Console displays cloudformation changesets."
readmeQualityOk: true
url: "https://github.com/JaysonRawlins/cdk-diff-pr-github-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 6
forks: 0
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-13T13:58:28Z"
lastCommitAt: "2026-07-05T20:18:16Z"
lastReleaseAt: "2025-11-14T00:08:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 66
maintainers: ["dependabot[bot]", "github-actions[bot]", "projenbuildmanager[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d0ed5f9aefd460b97894a6e58d1158b6a622686c70aedfed78d486b165886e1/JaysonRawlins/cdk-diff-pr-github-action"
---

# cdk-diff-pr-github-action

A [Projen](https://projen.io/) construct library that surfaces **CloudFormation change set diffs and drift status directly on your pull requests** so reviewers can see exactly what will change before merging.

## Why this exists

`cdk diff` output disappears into CI logs that nobody reads. Meanwhile, a single property change on an RDS instance or EC2 "pet" server can trigger a **resource replacement** — destroying the database or instance and recreating it from scratch. If that replacement slips through code review unnoticed, the result is data loss and downtime.

This construct was built to make those dangerous changes impossible to miss:

- **Replacement column front and center** — Every change set row shows whether CloudFormation will modify the resource in place or **replace** it, with before/after property values so reviewers can understand *why*.
- **Comment appears on the PR itself** — No digging through workflow logs. The diff table is posted (and updated in place) as a PR comment and in the GitHub Step Summary.
- **Drift banner** — If the stack has drifted from its template, a warning banner is prepended to the comment so reviewers know the…

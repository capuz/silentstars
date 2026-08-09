---
repo: "suzuki-shunsuke/validate-pr-review-app"
name: "validate-pr-review-app"
description: "Self-hosted GitHub App that validates Pull Request reviews. It helps organizations improve governance and security by ensuring PRs cannot be merged without proper approvals while keeping developer experience"
readmeQualityOk: true
url: "https://github.com/suzuki-shunsuke/validate-pr-review-app"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["github-app", "oss", "security"]
stars: 6
forks: 0
openIssues: 4
closedIssues: 30
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-11T04:05:46Z"
lastCommitAt: "2026-08-09T04:45:53Z"
lastReleaseAt: "2025-12-30T12:20:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 73
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e0a6ab907d5ab642608c1e1d8c5b71340ba620ca3eb9752b73ff7efecadb06c/suzuki-shunsuke/validate-pr-review-app"
fundingLinks: ["GITHUB:https://github.com/suzuki-shunsuke"]
---

# Validate PR Review App

Validate PR Review App is a self-hosted GitHub App that validates Pull Request reviews.
It helps organizations improve governance and security by ensuring PRs cannot be merged without proper approvals while keeping developer experience.

## Features

- Security and Governance
  - Enforce Pull Request reviews
  - Centralized configuration: Manage settings in one place via the GitHub App, keeping governance and security strong with minimal overhead.
- Good Developer Experience
  - Runs quickly and provides clear error feedback through the Checks API, so developers immediately understand why validation failed.

### Validation Rules

- At least **1 approval** required.
- If the committer approves → **2 approvals required**.
  - [As of v0.3.2, empty commits and trivial merge commits don't require 2 approvals](https://github.com/suzuki-shunsuke/validate-pr-review-app/blob/HEAD/docs/allow-empty-commit-and-trivial-merge-commit.md)
- If the PR contains [unsigned commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) or [commits not linked to a GitHub…

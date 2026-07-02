---
repo: "igorjs/gh-actions-clean-workflow"
name: "gh-actions-clean-workflow"
description: "Clean workflow run logs based on configuration"
url: "https://github.com/igorjs/gh-actions-clean-workflow"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["github-actions", "logs", "utility", "workflows"]
stars: 28
forks: 5
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2022-03-27T03:34:30Z"
lastCommitAt: "2026-07-02T06:33:24Z"
lastReleaseAt: "2026-06-30T21:41:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 64
maintainers: ["igorjs[bot]", "igorjs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/056e0110fa10fecc9e192bad6026945bf48d0c9f2e0dbc471907f5a6eeb1609e/igorjs/gh-actions-clean-workflow"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/igorjs"]
---

# Clean Workflow Action

> Delete old GitHub Actions workflow runs with retry logic, circuit breaker, rate-limit awareness, and per-workflow filtering. Built for repos that generate a lot of CI noise.

## Quick start

```yaml
- uses: igorjs/gh-actions-clean-workflow@v7
  with:
    runs_older_than: 7  # delete runs older than 7 days
    runs_to_keep: 5     # keep the 5 most recent runs per workflow
```

Need a full workflow file you can drop in? See [Examples](#examples) below.

## Table of contents

- [Features](#features)
- [Inputs](#inputs)
- [Outputs](#outputs)
- [Permissions](#permissions)
- [Examples](#examples)
- [Advanced behavior](#advanced-behavior)
- [Versioning](#versioning)
- [Development](#development)
- [Migrating from v6](#migrating-from-v6)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Features

- **Workflow filtering** by name, so you only touch the runs you want
- **Per-workflow retention** via `runs_to_keep` (keep the N most recent per workflow, delete the rest)
- **Automatic retries** with exponential backoff on transient failures (5xx, 429, network)
- **Circuit breaker** that opens after repeated failures and recovers…

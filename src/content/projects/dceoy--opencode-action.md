---
repo: "dceoy/opencode-action"
name: "opencode-action"
description: "OpenCode GitHub agent in GitHub Actions"
readmeQualityOk: true
url: "https://github.com/dceoy/opencode-action"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
topics: ["github", "github-actions", "opencode", "ci", "ci-cd", "pull-request-review"]
stars: 28
forks: 1
openIssues: 4
closedIssues: 34
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-29T11:27:04Z"
lastCommitAt: "2026-11-19T05:03:10Z"
lastReleaseAt: "2026-07-12T19:37:11Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 40
maintainers: ["dceoy", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dd7859b0be851c1254a9d0e4fdd7816f8dc8040460e92365dda91eb5e5bf04b/dceoy/opencode-action"
fundingLinks: ["GITHUB:https://github.com/dceoy"]
---

# opencode-action

Run an [OpenCode](https://opencode.ai/) agent from GitHub Actions, including inline pull request review comments, pull request reviews, and manually dispatched tasks.

## Quick start

### 1. Add a provider secret

In **Settings → Secrets and variables → Actions**, add the API key for your model provider. The example below uses `OPENCODE_API_KEY`.

### 2. Add the workflow

Create `.github/workflows/opencode.yml`:…

---
repo: "dceoy/opencode-action"
name: "opencode-action"
description: "OpenCode GitHub agent in GitHub Actions"
readmeQualityOk: true
url: "https://github.com/dceoy/opencode-action"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["github", "github-actions", "opencode", "ci", "ci-cd", "pull-request-review"]
stars: 27
forks: 1
openIssues: 6
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-29T11:27:04Z"
lastCommitAt: "2026-11-15T11:19:09Z"
lastReleaseAt: "2026-07-12T19:37:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 40
maintainers: ["dceoy", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5674b2268c19f801396c4d09aae14d6eb64ab5a1f177f31cdcd526955242a0de/dceoy/opencode-action"
fundingLinks: ["GITHUB:https://github.com/dceoy"]
---

# opencode-action

Run an [OpenCode](https://opencode.ai/) agent from GitHub Actions, including inline pull request review comments, pull request reviews, and manually dispatched tasks.

## Quick start

### 1. Add a provider secret

In **Settings → Secrets and variables → Actions**, add the API key for your model provider. The example below uses `OPENCODE_API_KEY`.

### 2. Add the workflow

Create `.github/workflows/opencode.yml`:

```yaml
---
name: OpenCode
on:
  pull_request_review_comment:
    types: [created]
permissions:
  contents: write
  issues: write
  pull-requests: write
  id-token: write
jobs:
  opencode:
    if: contains(github.event.comment.body, '/oc') || contains(github.event.comment.body, '/opencode')
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1  # v7.0.1
        with:
          persist-credentials: false
      - name: Run OpenCode
        uses: dceoy/opencode-action@163f9a9cd3d3f497e2847635585419f951371d2f  # v0.8.1
        env:
          OPENCODE_API_KEY: ${{ secrets.OPENCODE_API_KEY }}
          GITHUB_TOKEN: ${{ github.token }}
        with:
          model:…

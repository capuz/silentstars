---
repo: "CatChen/oxlint-suggestion-action"
name: "oxlint-suggestion-action"
description: "This GitHub Action runs Oxlint and provides inline feedback to the changes in a Pull Request."
readmeQualityOk: true
url: "https://github.com/CatChen/oxlint-suggestion-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 10
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-27T06:04:21Z"
lastCommitAt: "2026-08-26T04:17:32Z"
lastReleaseAt: "2026-06-14T12:40:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 53
maintainers: ["dependabot[bot]", "check-git-status-bot[bot]", "accept-to-ship-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c40d36f8ab2d9b3a5610c05a0487bf83627470f22e8edc16ace0a4881b3dd47b/CatChen/oxlint-suggestion-action"
fundingLinks: ["GITHUB:https://github.com/CatChen", "PATREON:https://patreon.com/catchen", "BUY_ME_A_COFFEE:https://buymeacoffee.com/catchen", "KO_FI:https://ko-fi.com/catchen"]
---

# oxlint-suggestion-action

This GitHub Action runs Oxlint and provides inline feedback on the changes in a Pull Request. Features:

1. It posts review comments for Oxlint diagnostics on modified lines.
2. It only provides feedback for lines changed in the Pull Request, so pre-existing issues outside the diff do not add noise.

(If you use ESLint you should consider [this GitHub Action](https://github.com/marketplace/actions/eslint-feedback) for similar features.)

## Examples

When there is any Oxlint warning or error, this action will leave a comment:

## Usage

Set up a GitHub Action like this:

```yaml
name: Oxlint

on:
  push:
    branches: [main] # or [master] if that's the name of the main branch
  pull_request:
    branches: [main] # or [master] if that's the name of the main branch

jobs:
  oxlint:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version: '24'
          check-latest: true

      - name: Install dependencies
        run: yarn install # or npm ci if you use npm and have package-lock.json

      - uses:…

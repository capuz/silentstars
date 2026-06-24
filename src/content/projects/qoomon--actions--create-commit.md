---
repo: "qoomon/actions--create-commit"
name: "actions--create-commit"
description: "GitHub Action to create signed commits from within a GitHub Action workflow "
url: "https://github.com/qoomon/actions--create-commit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["commit", "github-actions", "sign", "verified", "action", "git"]
stars: 19
forks: 4
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2024-02-26T20:10:15Z"
lastCommitAt: "2026-06-24T06:40:05Z"
lastReleaseAt: "2026-05-22T06:57:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["qoomon", "Copilot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aaefd64984a4bed02b4d31918bc3e1ace20378b5bb4e74c455b8ee2e38b1cb7/qoomon/actions--create-commit"
---

# Create Commit &nbsp; [![starline](https://starlines.qoo.monster/assets/qoomon/actions--create-commit)](https://github.com/qoomon/starline)

This action will create a new commit via GitHub API, committer and author are related to given token identity.
Commits getting signed, if a GitHub App token (`ghs_***`) is used and will be marked as `verified` in the GitHub web interface.

### Example

```yaml
jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.ref }}
      - run: |
          date > dummy.txt
          git add dummy.txt

      - uses: qoomon/actions--create-commit@v1
        id: commit
        with:
          message: work work
          skip-empty: true

      - run: git push
```

### Inputs

```yaml
inputs:
  message:
    description: 'The commit message'
    required: true
  amend:
    description: 'Amend the last commit'
    default: false
  allow-empty:
    description: 'Allow an empty commit'
    default: false
  skip-empty:
    description: 'Skip action, if nothing to commit'
    default: false

  token:
    description: 'A GitHub access token'
    required: true
    default: ${{ github.token…

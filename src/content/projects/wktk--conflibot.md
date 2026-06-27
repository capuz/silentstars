---
repo: "wktk/conflibot"
name: "conflibot"
description: "Warn in advance when merging a pull request will cause conflicts in other open pull requests."
url: "https://github.com/wktk/conflibot"
homepage: "https://github.com/marketplace/actions/conflibot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["github-actions", "actions", "project-management", "pull-requests", "javascript-action"]
stars: 10
forks: 4
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-04-04T14:33:42Z"
lastCommitAt: "2026-06-27T00:45:37Z"
lastReleaseAt: "2023-07-29T17:10:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 73
maintainers: ["wktk", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05d80ff017003d9241f2edb913b364f66c21569b09f404bb20c70d9135af7a81/wktk/conflibot"
---

# conflibot

Warn in advance when merging a pull request will cause conflicts in other open pull requests.

For every other open PR with the same base branch, conflibot checks whether it would still merge cleanly after the current PR is merged, and reports the result as a `conflibot/details` check run with links to the conflicting files.

## Configuration

```yaml
name: conflibot
on: pull_request_target

permissions:
  checks: write
  contents: read
  pull-requests: read

jobs:
  conflibot:
    runs-on: ubuntu-slim
    steps:
      - uses: actions/checkout@v7
      - name: Warn about potential conflicts
        uses: wktk/conflibot@v2
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          exclude: |
            yarn.lock
            **/*.bin
```

The `pull_request_target` event is used so the check can be reported with write permissions even for PRs from forks. conflibot only reads PR contents through `refs/pull/*/head` and `refs/pull/*/merge`; it never executes code from the PR, and it never modifies the checked-out working tree.

Conflict detection uses `git merge-tree`, so the runner needs git 2.38 or later (GitHub-hosted runners all qualify; only older…

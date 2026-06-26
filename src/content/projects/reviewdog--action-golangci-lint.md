---
repo: "reviewdog/action-golangci-lint"
name: "action-golangci-lint"
description: "Run golangci-lint with reviewdog"
url: "https://github.com/reviewdog/action-golangci-lint"
homepage: "https://github.com/marketplace?type=actions&query=reviewdog"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["reviewdog", "golangci-lint"]
stars: 243
forks: 46
openIssues: 15
closedIssues: 19
watchers: 23
contributors: 74
recentReleases: 0
createdAt: "2019-09-15T04:38:33Z"
lastCommitAt: "2026-06-26T23:42:16Z"
lastReleaseAt: "2020-05-13T21:54:49Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 39
maintainers: ["shogo82148", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43564742ed86a218db34dab0bcd27f3eb36bf860991dcf8d845efb0bcb4d2f9a/reviewdog/action-golangci-lint"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# GitHub Action: Run golangci-lint with reviewdog

This action runs [golangci-lint](https://github.com/golangci/golangci-lint) with
[reviewdog](https://github.com/reviewdog/reviewdog) on pull requests to improve
code review experience.

## Migrating from v1 to v2

In many cases, you need to do nothing. Just use `reviewdog/action-golangci-lint@v2` instead of `reviewdog/action-golangci-lint@v1`.

If your workflow have steps for setting up Go and caching go modules, they are no longer needed.
`reviewdog/action-golangci-lint@v2` now set up Go and cache modules automatically, so remove these steps.

```yaml
on: [pull_request]
jobs:
  golangci-lint:
    runs-on: ubuntu-latest
    steps:
      - name: Check out code into the Go module directory
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
        with:
          fetch-depth: 0

      # no need with v2
      # - name: Set up Go
      #   uses: actions/setup-go@v2
      #   with:
      #     go-version: '1.17'

      # no need with v2
      # - uses: actions/cache@v2
      #   with:
      #     path: |
      #         ~/.cache/golangci-lint
      #         ~/.cache/go-build
      #         ~/go/pkg/mod…

---
repo: "reviewdog/action-cpplint"
name: "action-cpplint"
description: "Run cpplint with reviewdog"
readmeQualityOk: true
url: "https://github.com/reviewdog/action-cpplint"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [52, 48]
topics: ["reviewdog", "cpplint"]
stars: 13
forks: 4
openIssues: 1
closedIssues: 3
watchers: 29
contributors: 66
recentReleases: 0
createdAt: "2019-11-29T00:44:16Z"
lastCommitAt: "2026-09-19T01:16:41Z"
lastReleaseAt: "2025-01-31T02:32:19Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded"]
healthScore: 84
undervaluedScore: 40
maintainers: ["shogo82148", "renovate[bot]", "review-dog"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbfeab16f179985b289aeba91a9ed40bd50b431fb39af4df30a1e0fbcf631be2/reviewdog/action-cpplint"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# GitHub Action: Run cpplint with reviewdog

This action runs [cpplint](https://pypi.org/project/cpplint/) with [reviewdog](https://github.com/reviewdog/reviewdog) on pull requests to improve code review experience.

## Inputs

### `github_token`

**Required**. Must be in form of `github_token: ${{ secrets.github_token }}`'.

### `level`

Optional. Report level for reviewdog [info,warning,error].
It's same as `-level` flag of reviewdog.
Default is `error`.

### `reporter`

Reporter of reviewdog command [github-pr-check,github-pr-review].
Default is `github-pr-check`.

### `reviewdog_flags`
Additional reviewdog flags.
Default is `''`.

### `flags`

Optional. List of arguments to send to cpplint.
Default is `--extensions=h,hpp,c,cpp,cc,cu,hh,ipp`.

### `filter`

Optional. List of filter arguments to send to cpplint.
Default is `--filter=""`.

### `targets`

Optional. List of file list arguments to send to cpplint.
Default is `--recursive`.

## Example Usage

### [.github/workflows/reviewdog.yml](https://github.com/reviewdog/action-cpplint/blob/HEAD/.github/workflows/reviewdog.yml)

```yml
name: Reviewdog
on: [pull_request]

jobs:
  cpplint:
    runs-on: ubuntu-latest
    steps:…

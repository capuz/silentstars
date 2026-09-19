---
repo: "reviewdog/action-tfsec"
name: "action-tfsec"
description: "Run tfsec with reviewdog on pull requests to enforce security best practices"
readmeQualityOk: true
url: "https://github.com/reviewdog/action-tfsec"
language: "Shell"
languages: ["Shell", "jq"]
languagePcts: [77, 23]
topics: ["reviewdog", "tfsec", "terrafrom"]
stars: 76
forks: 24
openIssues: 5
closedIssues: 11
watchers: 22
contributors: 70
recentReleases: 0
createdAt: "2020-01-16T14:46:29Z"
lastCommitAt: "2026-09-19T01:38:15Z"
lastReleaseAt: "2021-05-17T10:29:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 44
maintainers: ["renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37078dab203d0903931e81c76ed192829e2a9075a81d95c4cbb90771bb664580/reviewdog/action-tfsec"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# GitHub Action: Run tfsec with reviewdog

This action runs [tfsec](https://github.com/liamg/tfsec) with
[reviewdog](https://github.com/reviewdog/reviewdog) on pull requests
to enforce best practices.

## Examples

### With `github-pr-check`

By default, with `reporter: github-pr-check` an annotation is added to
the line:

### With `github-pr-review`

With `reporter: github-pr-review` a comment is added to
the Pull Request Conversation:

## Inputs

### `github_token`

**Required**. Must be in form of `github_token: ${{ secrets.github_token }}`.

### `working_directory`

Optional. Directory to run the action on, from the repo root.
The default is `.` ( root of the repository).

### `level`

Optional. Report level for reviewdog [`info`,`warning`,`error`].
It's same as `-level` flag of reviewdog.
The default is `error`.

### `tool_name`

Optional. Name of the tool being used. This controls how it will show up in the GitHub UI.
The default is `tfsec`.

### `reporter`

Optional. Reporter of reviewdog command [`github-pr-check`,`github-pr-review`].
The default is `github-pr-check`.

### `filter_mode`

Optional. Filtering for the reviewdog command…

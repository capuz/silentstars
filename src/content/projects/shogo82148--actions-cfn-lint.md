---
repo: "shogo82148/actions-cfn-lint"
name: "actions-cfn-lint"
description: "GitHub Action of https://github.com/aws-cloudformation/cfn-python-lint/"
readmeQualityOk: true
url: "https://github.com/shogo82148/actions-cfn-lint"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [56, 29]
topics: ["github-actions"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-11-27T12:32:09Z"
lastCommitAt: "2026-10-25T02:47:13Z"
lastReleaseAt: "2020-07-07T21:33:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 80
maintainers: ["shogo82148", "dependabot[bot]", "shogo82148-slim[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba3843c3396a6a23e96e0520839e3e3594185626ea3a68d3386c77ab1b035bc7/shogo82148/actions-cfn-lint"
---

# GitHub Action for CloudFormation Linter with reviewdog

This GitHub Action validates CloudFormation yaml/json templates using [CloudFormation Linter](https://github.com/aws-cloudformation/cfn-python-lint/).
It is similar to [cfn-lint-action](https://github.com/marketplace/actions/cfn-lint-action),
but with [reviewdog](https://github.com/reviewdog/reviewdog) on pull requests to improve code review experience.

## Inputs

### `github_token`

**Required** reviewdog requires a GitHub token. The default value is '`${{ secrets.github_token }}`'.

### `tool_name`

Optional. Tool name to use for reviewdog reporter. Useful when running multiple actions with different config.

### `level`

Optional. Report level for reviewdog \[`info`, `warning`, `error`\]. Default is "".
It's same as `-level` flag of reviewdog.

### `reporter`

Reporter of reviewdog command \[`github-pr-check`, `github-pr-review`\].
The default value is `github-pr-check`.

### `filter_mode`

Optional. Filtering mode for the reviewdog command \[`added`,`diff_context`,`file`,`nofilter`\]. Default is `added`.

### `fail_level`

Optional. Exit with code 1 if it finds at least 1 issue with severity greater than or equal to…

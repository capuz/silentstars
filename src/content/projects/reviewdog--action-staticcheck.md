---
repo: "reviewdog/action-staticcheck"
name: "action-staticcheck"
description: "🐶 Run staticcheck with reviewdog on pull requests to improve code review experience."
readmeQualityOk: true
url: "https://github.com/reviewdog/action-staticcheck"
homepage: "https://github.com/marketplace?type=actions&query=reviewdog"
language: "Shell"
languages: ["Shell", "jq"]
languagePcts: [63, 37]
stars: 22
forks: 5
openIssues: 1
closedIssues: 8
watchers: 24
contributors: 68
recentReleases: 0
createdAt: "2020-05-10T06:04:34Z"
lastCommitAt: "2026-09-19T01:15:50Z"
lastReleaseAt: "2021-02-17T16:11:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded"]
healthScore: 92
undervaluedScore: 59
maintainers: ["shogo82148", "renovate[bot]", "review-dog"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fbb76a6ba88a587b63e4c339c3ececd5675bd151d7d68d127eae482aaa0cd5b/reviewdog/action-staticcheck"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# action-staticcheck

This action runs [staticcheck](https://staticcheck.io/) with reviewdog on pull requests to improve code review experience.

<sub>Link to the staticcheck check rule is available as well. e.g. [SA9004](https://staticcheck.io/docs/checks#SA9004)</sub>

## Input

```yaml
inputs:
  github_token:
    description: 'GITHUB_TOKEN'
    default: '${{ github.token }}'
  workdir:
    description: 'Working directory relative to the root directory.'
    default: '.'
  ### Flags for reviewdog ###
  level:
    description: 'Report level for reviewdog [info,warning,error]'
    default: 'error'
  reporter:
    description: 'Reporter of reviewdog command [github-pr-check,github-check,github-pr-review].'
    default: 'github-pr-review'
  filter_mode:
    description: |
      Filtering mode for the reviewdog command [added,diff_context,file,nofilter].
      Default is added.
    default: 'added'
  fail_level:
    description: |
      If set to `none`, always use exit code 0 for reviewdog. Otherwise, exit code 1 for reviewdog if it finds at least 1 issue with severity greater than or equal to the given level.
      Possible values: [none,any,info,warning,error]
      Default is…

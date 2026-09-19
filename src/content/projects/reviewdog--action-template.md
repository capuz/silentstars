---
repo: "reviewdog/action-template"
name: "action-template"
description: ":dog: Template to create your Docker based reviewdog actions"
readmeQualityOk: true
url: "https://github.com/reviewdog/action-template"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [52, 48]
topics: ["reviewdog", "github-actions"]
stars: 24
forks: 11
openIssues: 3
closedIssues: 1
watchers: 24
contributors: 64
recentReleases: 0
createdAt: "2020-01-21T12:33:06Z"
lastCommitAt: "2026-09-19T01:24:59Z"
lastReleaseAt: "2020-05-30T14:45:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 50
maintainers: ["shogo82148", "renovate[bot]", "review-dog"]
openGraphImageUrl: "https://opengraph.githubassets.com/efd1476d0688792491237f7b7af2aa6fdd9dc77e3ec2ed5d433c68a520d197d1/reviewdog/action-template"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# action-template

This is a template repository for [reviewdog](https://github.com/reviewdog/reviewdog) action with release automation.
Click `Use this template` button to create your reviewdog action :dog:!

If you want to create your own reviewdog action from scratch without using this
template, please check and copy release automation flow.
It's important to manage release workflow and sync reviewdog version for all
reviewdog actions.

This repo contains a sample action to run [misspell](https://github.com/client9/misspell).

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
    default: 'github-pr-check'
  filter_mode:
    description: |
      Filtering mode for the reviewdog command [added,diff_context,file,nofilter].
      Default is added.
    default: 'added'
  fail_level:…

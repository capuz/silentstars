---
repo: "reviewdog/action-suggester"
name: "action-suggester"
description: ":dog: Suggests any code changes based on diff through GitHub Multi-line code suggestions by using reviewdog"
readmeQualityOk: true
url: "https://github.com/reviewdog/action-suggester"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 137
forks: 16
openIssues: 10
closedIssues: 6
watchers: 26
contributors: 67
recentReleases: 0
createdAt: "2020-08-03T06:59:43Z"
lastCommitAt: "2026-09-19T01:36:22Z"
lastReleaseAt: "2022-03-08T08:06:30Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 38
maintainers: ["shogo82148", "renovate[bot]", "review-dog"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe6bc26f9bb29e7b5b3cce9c0789fab8f745773577e9e427fc811d0ba55bbb0/reviewdog/action-suggester"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# action-suggester

action-suggester is a handy action which suggests any code changes based on
diff through GitHub Multi-line code suggestions by using [reviewdog](https://github.com/reviewdog/reviewdog).

You can use any formatters or linters with auto-fix feature for any languages
and the reviewdog suggester support any changes including inline change,
multi-line changes, insertion, and deletion.

## Input

```yaml
inputs:
  github_token:
    description: 'GITHUB_TOKEN'
    default: '${{ github.token }}'
  path:
    description: "The directory in which reviewdog should run"
    default: "."
    required: false
  ### Flags for reviewdog ###
  tool_name:
    description: 'Tool name to use for reviewdog reporter'
    default: 'reviewdog-suggester'
  level:
    description: 'Report level for reviewdog [info,warning,error]'
    default: 'warning'
  filter_mode:
    description: |
      Filtering mode for the reviewdog command [added,diff_context,file,nofilter].
      Default is diff_context. GitHub suggestions only support added and diff_context.
    default: 'diff_context'
  fail_level:
    description: |
      Exit code 1 for reviewdog if it finds at least 1 issue with severity…

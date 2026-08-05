---
repo: "martincostello/update-static-assets"
name: "update-static-assets"
description: "A GitHub Action that updates HTML static assets"
readmeQualityOk: true
url: "https://github.com/martincostello/update-static-assets"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["github-actions"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-06T07:33:20Z"
lastCommitAt: "2026-08-05T06:07:23Z"
lastReleaseAt: "2023-09-27T15:26:14Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 77
maintainers: ["renovate[bot]", "martincostello", "costellobot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4726a9c21faee8f68fb52976323497d68c44cf64466f56232a211b5e9a643f62/martincostello/update-static-assets"
fundingLinks: ["GITHUB:https://github.com/martincostello", "BUY_ME_A_COFFEE:https://buymeacoffee.com/martincostello"]
---

# Update Static Assets

This action updates static assets for HTML-related files stored in a GitHub repository.

An example pull request created by the action can be found [in this pull request](https://github.com/martincostello/costellobot/pull/167).

The following CDNs are supported:

- [cdnjs](https://cdnjs.com/)
- [jsDelivr](https://www.jsdelivr.com/)

## Example Usage

```yml
steps:
- uses: actions/checkout@v5
- uses: martincostello/update-static-assets@v2
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
```

### Example Workflow

Below is an example of a full GitHub Actions workflow to automate static asset updates.

```yml
name: update-static-assets

on:

  # Scheduled trigger to check for static asset updates once a day at 5AM
  schedule:
    - cron:  '0 5 * * *'

  # Manual trigger to update static assets on demand
  workflow_dispatch:

permissions: {}

jobs:
  update-static-assets:
    name: Update static assets
    permissions:
      contents: write
      pull-requests: write
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v5
    - uses: martincostello/update-static-assets@v2
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

##…

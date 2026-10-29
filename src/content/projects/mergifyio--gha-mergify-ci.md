---
repo: "Mergifyio/gha-mergify-ci"
name: "gha-mergify-ci"
description: "GitHub Actions integration with Mergify CI Issues"
readmeQualityOk: true
url: "https://github.com/Mergifyio/gha-mergify-ci"
homepage: "https://mergify.com"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 3
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-07-10T21:31:28Z"
lastCommitAt: "2026-10-29T05:49:35Z"
lastReleaseAt: "2025-10-23T10:52:20Z"
status: "thriving"
tags: ["funded"]
healthScore: 77
undervaluedScore: 75
maintainers: ["mergify[bot]", "renovate[bot]", "jd"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8d98c8cd91e22a76c084d0f482a4c5e19981d0305c3f18d364987b3a3713cba/Mergifyio/gha-mergify-ci"
fundingLinks: ["GITHUB:https://github.com/Mergifyio", "CUSTOM:https://mergify.com"]
---

# gha-mergify-ci

GitHub Action to:

* junit-process: process JUnit XML files with Mergify CI Insights (Upload and Quarantine)
* scopes: detect and upload pull requests scopes to Mergify Merge Queue

More information on https://mergify.com

## Usage

Pin the action to a released version (see the [releases](https://github.com/Mergifyio/gha-mergify-ci/releases)):

```yaml
- uses: Mergifyio/gha-mergify-ci@v27
  with:
    action: junit-process
    token: ${{ secrets.MERGIFY_TOKEN }}
    report_path: "**/junit*.xml"
```

Need help setting it up? See the [GitHub Actions setup guide](https://docs.mergify.com/ci-insights/setup/github-actions/) on the Mergify docs.

## Merge Queue scopes

Scopes tell the Mergify Merge Queue which parts of the repository a pull
request impacts, so batches with disjoint scopes can merge in parallel. Use
`action: scopes` to detect them from the Mergify configuration file filters,
or `action: scopes-upload` to upload a list you computed yourself (e.g. the
leaf targets of your build graph):

```yaml
- uses: Mergifyio/gha-mergify-ci@v27
  with:
    action: scopes-upload
    token: ${{ secrets.MERGIFY_TOKEN }}
    scopes: backend,frontend
```

### Catch-all:…

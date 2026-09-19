---
repo: "reviewdog/action-setup"
name: "action-setup"
description: ":dog: Setup reviewdog action"
readmeQualityOk: true
url: "https://github.com/reviewdog/action-setup"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 86
forks: 32
openIssues: 6
closedIssues: 3
watchers: 26
contributors: 67
recentReleases: 0
createdAt: "2020-08-08T08:37:51Z"
lastCommitAt: "2026-09-19T01:24:27Z"
lastReleaseAt: "2024-02-08T17:19:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 43
maintainers: ["shogo82148", "renovate[bot]", "review-dog"]
openGraphImageUrl: "https://opengraph.githubassets.com/231c727390290d0b5f909f21ba4b3c0a99abd4bcea0f1b1637707790ecde94fb/reviewdog/action-setup"
fundingLinks: ["GITHUB:https://github.com/reviewdog", "OPEN_COLLECTIVE:https://opencollective.com/reviewdog"]
---

# reviewdog/action-setup

This action installs :dog: [reviewdog](https://github.com/reviewdog/reviewdog).

## Input
```yaml
inputs:
  reviewdog_version:
    description: 'reviewdog version. [latest,nightly,vX.Y.Z]'
    default: 'latest'
```

## Usage

### Latest
```yaml
steps:
  - uses: reviewdog/action-setup@d8edfce3dd5e1ec6978745e801f9c50b5ef80252 # v1.4.0
  - run: reviewdog -version
```

### Specify reviewdog version
```yaml
steps:
  - uses: reviewdog/action-setup@d8edfce3dd5e1ec6978745e801f9c50b5ef80252 # v1.4.0
    with:
      reviewdog_version: v0.21.2
  - run: reviewdog -version
```

### Nightly
```yaml
steps:
  - uses: reviewdog/action-setup@d8edfce3dd5e1ec6978745e801f9c50b5ef80252 # v1.4.0
    with:
      reviewdog_version: nightly
  - run: reviewdog -version
```

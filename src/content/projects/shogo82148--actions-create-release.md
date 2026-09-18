---
repo: "shogo82148/actions-create-release"
name: "actions-create-release"
description: "Yet Another Create Release Action"
readmeQualityOk: true
url: "https://github.com/shogo82148/actions-create-release"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["github-actions"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2021-05-27T08:28:38Z"
lastCommitAt: "2026-09-18T08:27:21Z"
lastReleaseAt: "2022-11-19T07:27:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 76
maintainers: ["shogo82148", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/12b5f64cc6feaf1b1aeeba81d6d7eb38ec6bc9117e8103f408b968570772351c/shogo82148/actions-create-release"
fundingLinks: ["GITHUB:https://github.com/shogo82148"]
discussionCount: 2
---

# Yet Another Create Release Action

This GitHub Action creates a release.
[actions/create-release] is a great action, but it is currently unmaintained.
So I created another one.

## SYNOPSIS

The action is compatible with [actions/create-release].
It will work just by replacing the workflow's `actions/create-release` with `shogo82148/actions-create-release`.

```yaml
on:
  push:
    tags:
      - "v*"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Create Release
        uses: shogo82148/actions-create-release@v1
```

## Inputs

### tag_name

The name of the tag for this release.
The default is the tag name that triggered the workflow.

### release_name

The name of the release.

### body

Text describing the contents of the release. Optional, and not needed if using body_path.

### body_path

A file with contents describing the release. Optional, and not needed if using body.

### draft

`true` to create a draft (unpublished) release, `false` to create a published one. Default: `false`.

### prerelease

`true` to identify the release as a prerelease. `false` to identify the release as a full release. Default: `false`.

###…

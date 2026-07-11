---
repo: "zgosalvez/github-actions-get-flutter-version-env"
name: "github-actions-get-flutter-version-env"
description: "A Github Action to get the Flutter environment version from the pubspec file"
readmeQualityOk: true
url: "https://github.com/zgosalvez/github-actions-get-flutter-version-env"
homepage: "https://github.com/marketplace/actions/get-the-flutter-version-environment"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["flutter", "actions", "github", "github-actions"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-12-10T13:37:24Z"
lastCommitAt: "2026-07-11T05:56:00Z"
lastReleaseAt: "2022-11-24T11:38:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 81
undervaluedScore: 53
maintainers: ["dependabot[bot]", "zgosalvez"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/320283261/24b3ca00-3b35-11eb-8dd8-63dcbc2b4a60"
fundingLinks: ["GITHUB:https://github.com/zgosalvez"]
discussionCount: 0
---

# GitHub Action — Get the Flutter Version Environment

This GitHub Action (written in composite run steps) allows you to leverage GitHub Actions to get the [Flutter](https://flutter.dev) environment version from the pubspec file. This is primarily used before using the [Flutter action](https://github.com/marketplace/actions/flutter-action).

## Usage
### Pre-requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#common-workflow) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs
For more information on this input, see the [Workflow syntax for GitHub Actions](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith)

* `pubspec-file-path`: The pubspec.yaml file path. Optional. Default: `pubspec.yaml`

### Outputs
For more information on this output, see the [Workflow syntax for GitHub Actions](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs) and the [Context and expression syntax for GitHub…

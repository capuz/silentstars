---
repo: "mamezou-tech/setup-helmfile"
name: "setup-helmfile"
description: "Setup helmfile action"
url: "https://github.com/mamezou-tech/setup-helmfile"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["github-actions", "helm", "helmfile"]
stars: 44
forks: 22
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 103
recentReleases: 0
createdAt: "2020-02-02T08:39:47Z"
lastCommitAt: "2026-06-23T23:28:17Z"
lastReleaseAt: "2020-12-20T06:10:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 36
maintainers: ["kondoumh", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58a1d85a380494c4bfd38cd57de721367d418e7184e80509f2243b4ff776c135/mamezou-tech/setup-helmfile"
---

@mamezou-tech/setup-helmfile
============================

![CI](https://github.com/mamezou-tech/setup-helmfile/workflows/CI/badge.svg)

Setup [helmfile](https://github.com/helmfile/helmfile) with Helm and kubectl in GitHub Actions workflow.

- This action works on Linux runner.
- The AWS version of kubectl will be installed.
- Following Helm plugins will be installed
  - helm-diff
  - helm-s3

```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v6
    - name: Setup helmfile
      uses: mamezou-tech/setup-helmfile@v2.2.0
    - name: Test
      run: |
        helmfile --version
        helm version
        kubectl version --client
```

> [!Important]
> This action requires Node 24 or later on the runner. If you are using GitHub-managed runners, no action is needed. If you are using self-hosted runners, make sure the system version of Node is version 24 or higher.

## Optional Inputs
- `helmfile-version` : helmfile version. Default `"v1.2.3"`.
- `helm-version` : Helm version. Default `"v3.19.4"`
- `helm-download-url` : Helm download URL. Default `"https://get.helm.sh/helm-{version}-linux-amd64.tar.gz"`
- `kubectl-version` :…

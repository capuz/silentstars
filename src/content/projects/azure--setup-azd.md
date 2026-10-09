---
repo: "Azure/setup-azd"
name: "setup-azd"
description: "This GitHub Action allows you to provision resources and deploy your application on Azure with Azure Developer CLI commands. The action installs the Azure Developer CLI on a user-defined Azure Developer CLI version. If the user does not specify a version, latest CLI version is used."
readmeQualityOk: true
url: "https://github.com/Azure/setup-azd"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [61, 39]
stars: 11
forks: 17
openIssues: 0
closedIssues: 0
watchers: 183
contributors: 1343
recentReleases: 1
createdAt: "2023-06-26T18:32:21Z"
lastCommitAt: "2026-10-09T18:56:10Z"
lastReleaseAt: "2026-08-06T00:03:00Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "community_watch", "fork_magnet"]
healthScore: 88
undervaluedScore: 47
maintainers: ["dependabot[bot]", "hemarina", "danfiedler-msft"]
openGraphImageUrl: "https://opengraph.githubassets.com/db7d754f07b1b2149d4ef5f5f34add36e8c94f83e9ede383201430e84b8ae98e/Azure/setup-azd"
---

# GitHub Action for installing the Azure Developer CLI (`azd`)

This GitHub Action allows you to provision resources and deploy your application on Azure with [Azure Developer CLI](https://github.com/azure/setup-azd) commands.

The action installs the Azure Developer CLI on a user-defined Azure Developer CLI version. If the user does not specify a version, latest CLI version is used. Read more about various Azure Developer CLI versions [here](https://github.com/Azure/azure-dev/releases).

- `version` – **Optional** Accepts `latest`, `stable`, `daily`, or a semantic version such as `1.2.3`, `1.2.3-beta.1`, or `1.2.3+build.5`. Defaults to `latest`.

The definition of this GitHub Action is in [action.yml](https://github.com/azure/setup-azd/blob/main/action.yml).

## Sample workflow install latest `azd` version

```yaml
# File: .github/workflows/azure-dev.yml

on: [push]

jobs:

  build:
    runs-on: ubuntu-latest
    steps:
      - name: Install azd
        uses: Azure/setup-azd@v2
```

## Sample workflow install a specific `azd` version

Select a specific `azd` version [here](https://github.com/Azure/azure-dev/releases) and use it in `version`.

```yaml
# File:…

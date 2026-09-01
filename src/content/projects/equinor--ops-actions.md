---
repo: "equinor/ops-actions"
name: "ops-actions"
description: "Reusable GitHub Actions workflows for operational tasks"
readmeQualityOk: true
url: "https://github.com/equinor/ops-actions"
homepage: "https://equinor.github.io/ops-actions/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["devops", "actions", "workflows", "ops", "cicd", "pipelines", "automation"]
stars: 9
forks: 3
openIssues: 8
closedIssues: 89
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2021-12-10T11:34:51Z"
lastCommitAt: "2026-09-01T08:52:12Z"
lastReleaseAt: "2022-09-08T11:28:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 81
maintainers: ["dependabot[bot]", "github-actions[bot]", "hknutsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/5da0f1e69c9ad31f1976ed613c0a3d591ab138106177ec32918886fb17341ad1/equinor/ops-actions"
---

# ops-actions

[Reusable GitHub Actions workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows) for common operational tasks.

## Features

- ♻ **Reusable workflows** for common operational tasks, simplifying CI/CD pipeline setup.
- 📦 **Build support for multiple languages and frameworks** including Docker, .NET and Python.
- 🚀 **Deploy to multiple cloud platforms and services** including Azure Web App, Azure Functions and GitHub Pages.
- 🔑 **Secretless authentication** where supported.
- 🛡️ **Security scanning** using static analysis tools, including CodeQL, Trivy and zizmor.
- 📝 **Comprehensive documentation** for each workflow, with usage examples.
- 🤖 **Easy workflow updates** using [Dependabot version updates](#version-updates).

## Usage

Call a reusable workflow by using the following syntax:

```yaml
on: [push]
jobs:
  example:
    uses: equinor/ops-actions/.github/workflows/{filename}@{ref}
    with: {}
    secrets: {}
```

`{filename}` is the name of a workflow file in the [workflows directory](https://github.com/equinor/ops-actions/tree/main/.github/workflows), and `{ref}` is (in order of preference) a commit SHA, release tag or branch…

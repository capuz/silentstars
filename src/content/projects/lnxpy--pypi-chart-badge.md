---
repo: "lnxpy/pypi-chart-badge"
name: "pypi-chart-badge"
description: "PyPI download rate badge generator."
readmeQualityOk: true
url: "https://github.com/lnxpy/pypi-chart-badge"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-10-02T01:09:23Z"
lastCommitAt: "2026-09-19T02:46:49Z"
lastReleaseAt: "2024-11-28T19:17:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 71
maintainers: ["github-actions[bot]", "lnxpy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f502e6f4e36005f175c1ba3eecab2c13d645d28ddbd38b9dd8789be0c8623c5a/lnxpy/pypi-chart-badge"
---

## PyPI Chart Badge [](https://pyaction.imsadra.dev/)

This action allows you to create and put fancy-looking chart badges indicating the recent download rate of your Python packages in the README.

> [!NOTE]
> Read [this article](https://blog.imsadra.dev/display-your-package-download-rate-on-github) to learn how this action works and how to use it in your repositories.

### Examples
This chart depicts the download rate of some popular Python packages over the last 15 days. (It dynamically updates every 24 hours)

| fastapi | django | requests | pydantic |
| ------- | ------ | -------- | ---- |
|  |  |  |  |

### Basic Usage
```yml
name: Update the PyPI chart badge

on:
  schedule:
    - cron: "0 0 1 * *"  # <= runs every month

jobs:
  update-chart-badge:
    name: Updating the pypi chart badge
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Updating the badge
        uses: lnxpy/pypi-chart-badge@v1.4
        with:
          package_name: '<PACKAGE-NAME>'

      - uses: EndBug/add-and-commit@v9
        with:
          default_author: github_actions
          message: 'chart badge updated'

```

After each run, you'll…

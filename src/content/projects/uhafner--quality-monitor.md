---
repo: "uhafner/quality-monitor"
name: "quality-monitor"
description: "Quality monitor GitHub action"
readmeQualityOk: true
url: "https://github.com/uhafner/quality-monitor"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 12
forks: 7
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-12-20T08:34:35Z"
lastCommitAt: "2026-10-29T14:07:09Z"
lastReleaseAt: "2024-05-10T10:31:03Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["uhafner", "renovate[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/26f0d3f23c4ea38bcca983652811d63dd932c57912cb7dde9046bba76db69546/uhafner/quality-monitor"
---

# Quality Monitor GitHub Action

Automated quality monitoring for GitHub pull requests and branch pipelines.
The action aggregates test results, code and mutation coverage, static analysis findings, and software metrics, then posts a structured pull request comment and GitHub Checks summary.
When enabled, it also adds inline line comments for warnings, missed or mutated lines.
It is inspired by the Jenkins [Warnings](https://plugins.jenkins.io/warnings-ng/) and [Coverage](https://plugins.jenkins.io/coverage) plugins and works with any language that can produce supported report files.
A companion for GitLab is available: [Autograding GitLab Action](https://github.com/uhafner/autograding-gitlab-action). If you want to autograde student projects, use the [Autograding GitHub Action](https://github.com/uhafner/autograding-github-action).

Sample Outputs:
- [Sample Pull Request](https://github.com/uhafner/quality-monitor/pull/103)
- [Checks Output](https://github.com/uhafner/quality-monitor/runs/44526071206)

Workflow Examples:
- Single Step: see [Usage](#usage)
- Multi-Step (recommended for PRs in forks):
- Part 1: [Build Project…

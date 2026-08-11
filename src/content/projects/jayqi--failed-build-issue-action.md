---
repo: "jayqi/failed-build-issue-action"
name: "failed-build-issue-action"
description: "An action that makes it easy to notify of a failed GitHub Actions workflow via an issue."
readmeQualityOk: true
url: "https://github.com/jayqi/failed-build-issue-action"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["actions", "ci", "continuous-integration", "github-actions", "issues"]
stars: 8
forks: 4
openIssues: 7
closedIssues: 30
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-07-20T23:55:48Z"
lastCommitAt: "2026-08-11T04:50:31Z"
lastReleaseAt: "2024-02-17T00:25:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 74
maintainers: ["jayqi", "dependabot[bot]", "aryansk"]
openGraphImageUrl: "https://opengraph.githubassets.com/83cfe882af9bf5288d5d4840db20e768dfc9a22622c631e2e11a58736cf3b63b/jayqi/failed-build-issue-action"
---

# Create Failed Build Issue Action

This action makes it easy to notify maintainers of a failed GitHub Actions workflow via GitHub's issue tracker. By default, the action will find the latest open issue with the label `"build failed"` and add a comment. If no such issue is open, it will instead open a new issue.

## Basic usage

```yml
- uses: jayqi/failed-build-issue-action@v1
```

For options, see [`action.yml`](https://github.com/jayqi/failed-build-issue-action/blob/HEAD/action.yml)

This action creates and comments on issues, so the `GITHUB_TOKEN` needs `issues: write` permission. The recommended way to grant it is with the [`permissions` keyword](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#permissions) on the job that runs the action, which keeps the token scoped to only what's needed:

```yml
# on the job that runs the action:
permissions:
  issues: write
```

See the two examples below for realistic usage in full workflows.

## Example 1: As a step

Below is an example GitHub Workflow YAML file that demonstrates a simple case of using this action in a workflow. If your workflow just runs a single job, then you can set things up in…

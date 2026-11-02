---
repo: "devops-actions/issue-comment-tag"
name: "issue-comment-tag"
description: "Tag a user or a team in an issue comment"
readmeQualityOk: true
url: "https://github.com/devops-actions/issue-comment-tag"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 5
forks: 8
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-09T08:48:23Z"
lastCommitAt: "2026-11-02T15:17:02Z"
lastReleaseAt: "2026-03-14T10:36:53Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 87
maintainers: ["dependabot[bot]", "github-actions[bot]", "rajbos"]
openGraphImageUrl: "https://opengraph.githubassets.com/a709967abf86bd601f9c18cc361b28ed2dcb9835bc483d24aa058de2b4cd8c8d/devops-actions/issue-comment-tag"
fundingLinks: ["GITHUB:https://github.com/rajbos", "KO_FI:https://ko-fi.com/rob_bos"]
---

# devops-actions/issue-comment-tag
Tag a user or a team in an issue comment

Sometimes you want to tag a team or multiple persons when an issue (or something else) is created. This action will help you do that by tagging them in an issue by making a comment that tags them.
##### Note: only tagging a single person or a single team is currently supported.

# Usage:

## Required Permissions

This action requires specific GitHub token permissions to function correctly. You must grant these permissions in your workflow:

``` yaml
permissions:
  issues: write           # Required when working with issues
  pull-requests: write    # Required when working with pull requests
```

**Note:** If you do not set these permissions and your workflow has restricted permissions elsewhere, the action will fail with a clear error message indicating which permissions are missing.

## Requirements

A [GitHub App](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps#about-github-apps) installed on the repository/organization that the GitHub Actions Workflow will execute from.
The GitHub Apps minimally should have the following permissions:
  - Read & write access to Issues
  -…

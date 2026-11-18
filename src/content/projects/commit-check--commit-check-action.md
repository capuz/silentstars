---
repo: "commit-check/commit-check-action"
name: "commit-check-action"
description: "Commit policy as code on every pull request: the GitHub Action for Commit Check."
readmeQualityOk: true
url: "https://github.com/commit-check/commit-check-action"
homepage: "https://commit-check.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["commit-conventions", "conventional-commits", "github-actions", "commit-check", "devops", "git-hooks", "git-lint", "commit-message-lint", "commit-message-formatter", "branch-name-validation"]
stars: 34
forks: 2
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-12-15T09:57:58Z"
lastCommitAt: "2026-11-18T12:04:25Z"
lastReleaseAt: "2023-11-19T13:50:56Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["shenxianpeng", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/578542642/4870b445-cc5e-4307-ba9b-1c97fedb1689"
fundingLinks: ["GITHUB:https://github.com/shenxianpeng"]
---

**Catch bad commits before they merge — on every pull request.**

[Docs](https://commit-check.com/guides/github-actions/) ·
[Rules](https://commit-check.com/rules/) ·
[CLI](https://github.com/commit-check/commit-check) ·
[GitHub App](https://github.com/apps/commit-check) ·
[MCP server](https://github.com/commit-check/commit-check-mcp)

The GitHub Action for [Commit Check](https://github.com/commit-check/commit-check),
commit policy as code for teams and AI agents. It checks every commit of a pull
request — message, branch, author, and optionally the PR title and the AI
attribution in its description — against your `cchk.toml`, and reports the
result in the job summary, as annotations on the run and, if you want, as a PR
comment. It can also label the pull requests that AI tools wrote.

## Usage

Add a workflow, e.g. `.github/workflows/commit-check.yml`:

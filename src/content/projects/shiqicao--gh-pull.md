---
repo: "shiqicao/gh-pull"
name: "gh-pull"
description: "GitHub CLI extension for a local pull request dashboard. Group PRs by repository, monitor reviews and CI checks, and merge from your browser."
readmeQualityOk: true
url: "https://github.com/shiqicao/gh-pull"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["gh-extension", "code-review", "code-reviews", "dashboard", "developer-tools", "github-cli", "github-cli-extension", "pr-dashboard", "pull-requests"]
stars: 3
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-09T03:33:14Z"
lastCommitAt: "2026-10-24T22:31:17Z"
lastReleaseAt: "2026-10-24T22:55:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 73
maintainers: ["shiqicao"]
openGraphImageUrl: "https://opengraph.githubassets.com/42daaff722b81662b976187dc9c6833cc65453a382f57f9b96c21e6df7820a52/shiqicao/gh-pull"
discussionCount: 0
promoted: true
---

# <img src="docs/favicon.png" width="32" height="32" align="absmiddle" alt=""> gh-pull

**A local pull request dashboard for GitHub CLI**

Organize PRs across repositories, track reviews and checks, and manage your work in the browser using your existing GitHub login.

Choose how to run it:

- **[GitHub CLI extension](#github-cli-extension) — recommended:** Install once, then run `gh pull`. No Node installation or source checkout needed.
- **[Local app from source](#local-app-from-source):** Clone the repository and run it with Node.js. Useful for development and customization.

Both use your existing GitHub CLI login or a personal access token. No separate GitHub App installation is required. You can access the repositories your credentials allow, subject to your organization's token and SSO policies. A **GitHub.com** account is required; GitHub Enterprise hosts are not supported.

[▶ Watch the quick tour](https://youtu.be/4LBga5H5Wwk) · 81 seconds · narrated with captions

## GitHub CLI extension

Install [GitHub CLI](https://cli.github.com/) if needed, then run:

```sh
gh auth login --hostname github.com  # Skip if already signed in
gh extension install shiqicao/gh-pull
gh pull…

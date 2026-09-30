---
repo: "stefanpantic/local-review-vscode-extension"
name: "local-review-vscode-extension"
description: "Enable local PR-like code reviews for changed files. Enables a local self-review loop when using agentic coding tools."
readmeQualityOk: true
url: "https://github.com/stefanpantic/local-review-vscode-extension"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-03T12:55:09Z"
lastCommitAt: "2026-09-30T09:56:33Z"
lastReleaseAt: "2026-07-28T08:47:45Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 65
maintainers: ["stefanpantic", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5decfed483ad62f52a554f740c206a5dfed6fc4780304665e00f28d5f3edc80/stefanpantic/local-review-vscode-extension"
---

# ReviewMate

A pull-request review surface inside VS Code, for three things: your own uncommitted changes, a real GitHub pull request, and a coding agent reviewing alongside you.

> **Local-first.** Reviewing your git diff happens entirely on your machine. The only network traffic is GitHub pull request review: listing open PRs in the sidebar when the repo has a GitHub remote and VS Code is signed in to GitHub, fetching and polling a PR while you have it open, and posting your review when you press **Submit**. Nothing else leaves your box. No account. No telemetry.

## What it does

- **Reviews your working-tree diff** as a continuous, PR-style surface: unified or side-by-side, syntax-highlighted, with comments on any line, range, or whole file.
- **Reviews a real GitHub pull request** in the same UI. The PR is fetched in place, with no checkout and no change to your working tree, and every existing review thread is imported. github.com and GitHub Enterprise.
- **Writes your review back.** Comment, reply, resolve, edit, and suggest, then post the lot as one GitHub review with **Comment**, **Approve**, or **Request changes**.
- **Lets a coding agent review with you** over a local…

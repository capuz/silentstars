---
repo: "adelbeke/donna"
name: "donna"
description: "Open source GitHub companion — filter, prioritise, and track review status across all your repositories"
url: "https://github.com/adelbeke/donna"
homepage: "https://adelbeke.github.io/donna/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["code-review", "dashboard", "github", "pull-requests", "react", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-11T13:10:34Z"
lastCommitAt: "2026-06-24T06:38:48Z"
lastReleaseAt: "2026-06-24T05:59:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["adelbeke", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3c61b6dc649dad173f7efb3f2f198e1e31a3b1725466ef8b3faa3d50e41c893/adelbeke/donna"
---

# donna

Your GitHub companion — track PRs, manage branches and worktrees, all from a native macOS app.

</div>

## Requirements

- macOS (arm64 or x64)
- [GitHub CLI (`gh`)](https://cli.github.com/) installed and authenticated (`gh auth login`)

## Install

Download the latest `.dmg` from [Releases](https://github.com/adelbeke/donna/releases), mount it, drag Donna to Applications.

## Features

**Pull Requests**
- Three sections: **Review requested** · **My PRs** · **Mentioned**
- Filter by repository, search by title, sort newest/oldest
- Filter by your own review state: changes requested / commented / not reviewed
- Star PRs as top priority — pinned at the top
- Hide PRs you don't care about; toggle drafts / hidden
- Cards show repo, author, diff size, review-state badges, CI status, conflict indicator, relative timestamps

**Branches**
- Add local repositories via directory picker
- Lists all branches across your repos, with worktree detection
- Shows dirty state and linked PR per branch
- One-click copy for `git switch <branch>` or `cd <worktree>`

## Auth

Donna delegates all GitHub API calls to the `gh` CLI — no token to manage, no PAT stored anywhere. Run `gh auth login`…

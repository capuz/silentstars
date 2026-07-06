---
repo: "siddiqus/dev-home"
name: "dev-home"
description: "A work homepage for devs"
readmeQualityOk: true
url: "https://github.com/siddiqus/dev-home"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-05T20:26:11Z"
lastCommitAt: "2026-07-06T07:07:01Z"
lastReleaseAt: "2026-04-25T07:07:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["optisiddiqus"]
openGraphImageUrl: "https://opengraph.githubassets.com/b662888fa89e2eba786cc9cd603d195cbc97c2ca2cbc0675907a40fa4484355e/siddiqus/dev-home"
---

# Dev Home Dashboard

A developer dashboard built with Electron, React, and Express that integrates with JIRA and GitHub to provide a unified view of issues and pull requests.

## Prerequisites

- Node.js (v18+)
- Yarn
- A JIRA account with an API token
- A GitHub personal access token

## Setup

Install dependencies:

```bash
yarn install
cd server && yarn install && cd ..
```

JIRA and GitHub credentials can be configured from the in-app settings.

## Required Token Permissions

### GitHub Personal Access Token

Create a **fine-grained** or **classic** personal access token at https://github.com/settings/tokens with the following scopes:

| Scope (Classic Token) | Why it's needed |
|---|---|
| `repo` | Read PR details, commits, check statuses, and review threads across public and private repos |
| `read:org` | List organization members and repositories |
| `notifications` | Read your GitHub notifications (mentions, review requests, etc.) |

If using a **fine-grained token**, grant these repository permissions:

| Permission | Access | Why it's needed |
|---|---|---|
| Pull requests | Read | Search and read PRs you authored or are asked to review |
| Checks | Read | Read…

---
repo: "csm-actions/approve-pr-action"
name: "approve-pr-action"
description: "GitHub Action to approve pull requests securely"
readmeQualityOk: true
url: "https://github.com/csm-actions/approve-pr-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["github-actions", "oss", "security"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-04T06:02:03Z"
lastCommitAt: "2026-07-05T20:56:05Z"
lastReleaseAt: "2026-01-10T04:26:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 63
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/20ab33c165ce06977f4e59fb67502d6abc8316a72db094eec895cda88856e601/csm-actions/approve-pr-action"
fundingLinks: ["GITHUB:https://github.com/suzuki-shunsuke"]
---

# Approve PR Action

[Versioning Policy](https://github.com/suzuki-shunsuke/versioning-policy/blob/main/POLICY.md) | [action.yaml](https://github.com/csm-actions/approve-pr-action/blob/HEAD/action.yaml)

`Approve PR Action` is a GitHub Action to approve pull requests securely by [the Client/Server Model](https://github.com/csm-actions/docs).

Approve PR Action allows you to approve pull requests by Machine Users securely without sharing Machine Users' Personal Access Tokens (PAT) across GitHub Actions workflows.
It elevates the security of your workflows to the next level.

## Features

- 💪 Approve pull requests to merge pull requests automatically
- 🛡 Secure
  - You don't need to pass PAT of machine users to GitHub Actions workflows on the client side
- 😊 Easy to use
  - You don't need to host a server application

## Overview

It would be convenient to automatically merge pull requests created by apps like Renovate.
Manually reviewing and merging all of them can be time-consuming and labor-intensive.
Tedious reviews can sometimes become mere formalities.
This can lead to delayed updates and potentially troublesome issues.

Of course, automatic merging comes with its own…

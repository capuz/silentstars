---
repo: "kenn-io/forge"
name: "forge"
description: "Local-first maintainer console with built-in agent workspaces: triage PRs, issues, and CI across GitHub, GitLab, Forgejo, and Gitea, then turn any item into a worktree session running your coding agent. One binary, no inbox."
readmeQualityOk: true
url: "https://github.com/kenn-io/forge"
homepage: "https://forge.kenn.io"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 32]
stars: 197
forks: 27
openIssues: 20
closedIssues: 66
watchers: 2
contributors: 13
recentReleases: 4
createdAt: "2026-03-30T14:04:06Z"
lastCommitAt: "2026-11-03T18:42:36Z"
lastReleaseAt: "2026-10-23T17:32:27Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 36
maintainers: ["mariusvniekerk", "cpcloud", "rodboev"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c8cca83d2c8f5db66323180647070d5bb0961aaadedccb3d9bf2c3cced8d6b3/kenn-io/forge"
---

# kenn-forge

kenn-forge is a local maintainer console for pull requests, issues, reviews,
activity, and local workspaces. It syncs the repositories you maintain into a
local SQLite database and serves the UI from one binary.

Start with the [user guide](https://github.com/kenn-io/forge/blob/HEAD/docs/index.md) for setup and workflows.

## Teaser

  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://forge.kenn.io/docs/assets/generated/maintainer-overview-dark.svg"
  >
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://forge.kenn.io/docs/assets/generated/maintainer-overview-light.svg"
  >
  <img
    src="https://forge.kenn.io/docs/assets/generated/maintainer-overview-light.svg"
    alt="kenn-forge Activity with a selected pull request, live workspace, and coding-agent session"
  >

## What you can do

- Triage activity across repositories and provider hosts.
- Review pull requests and merge requests with discussion, diffs, and CI context.
- Work with issues without leaving the console.
- Create local workspaces for hands-on review or implementation.
- Read and respond to Roborev reviews from a running daemon.
- Link Kata issues to provider…

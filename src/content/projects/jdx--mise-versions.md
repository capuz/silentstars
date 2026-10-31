---
repo: "jdx/mise-versions"
name: "mise-versions"
description: "stores version numbers of common mise plugins"
readmeQualityOk: true
url: "https://github.com/jdx/mise-versions"
homepage: "http://mise-versions.jdx.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [46, 39]
stars: 30
forks: 11
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-12-07T22:46:21Z"
lastCommitAt: "2026-10-31T09:44:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 60
maintainers: ["mise-en-versions", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e304880fee92e56bf2dd725d5202fe1dc9c171f8b5ca236d7ef2b6a71d0419ba/jdx/mise-versions"
fundingLinks: ["GITHUB:https://github.com/jdx", "CUSTOM:https://jdx.dev"]
---

# mise-versions

stores version numbers of common mise plugins

## Static version data

mise reads these static files from `https://mise-versions.jdx.dev/data/`:

- `<tool>.toml`: every known version of one tool, with `created_at` and flags.
- `index.v1.json`: one file covering every tool, with enough entries for `latest`
  and common prefixes such as `22` or `3.12`. See
  [docs/versions-index.md](https://github.com/jdx/mise-versions/blob/HEAD/docs/versions-index.md) for the client contract.
- `github/{owner}/{repo}/releases.json` and `tags.json`: a GitHub repo's whole
  release or tag list, baked at deploy time for the repos clients have asked
  for (others are answered by the Worker at the same URL). See
  [docs/github-versions.md](https://github.com/jdx/mise-versions/blob/HEAD/docs/github-versions.md) for the client contract.

## Tool Update Analysis

This repository tracks tool updates through git history analysis. The chart below shows the daily number of tool updates over the last 30 days.

### Daily Tool Updates (Last 30 Days)

_Timeline showing the number of tools updated each day over the last 30 days_

## Token pool observability

The scheduled Worker records GitHub…

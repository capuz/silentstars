---
repo: "jdx/mise-versions"
name: "mise-versions"
description: "stores version numbers of common mise plugins"
readmeQualityOk: true
url: "https://github.com/jdx/mise-versions"
homepage: "http://mise-versions.jdx.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [45, 39]
stars: 32
forks: 10
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-12-07T22:46:21Z"
lastCommitAt: "2026-11-23T10:16:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 59
maintainers: ["mise-en-versions", "github-actions[bot]", "jdx"]
openGraphImageUrl: "https://opengraph.githubassets.com/330895e563a12de0e036169e910a9a62e8e49beae82ddd2c49bf509d4274ed3a/jdx/mise-versions"
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

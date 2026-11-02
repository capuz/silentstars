---
repo: "nuxt/nuxters"
name: "nuxters"
description: "Meet the people behind Nuxt and its modules."
readmeQualityOk: true
url: "https://github.com/nuxt/nuxters"
homepage: "https://nuxt.com/nuxters"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["contributors", "nuxt", "nuxters"]
stars: 188
forks: 30
openIssues: 4
closedIssues: 38
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2023-06-02T23:46:47Z"
lastCommitAt: "2026-11-02T13:38:25Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 44
maintainers: ["github-actions[bot]", "renovate[bot]", "atinux"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/nuxt/nuxters"
---

# Nuxters

Collects the contributions made to Nuxt on GitHub. The leaderboard and the profiles live on https://nuxt.com/nuxters, which imports the files in `public/` on every push to `main`.

## Setup

Install the dependencies with [pnpm](https://pnpm.io):

```bash
pnpm install
```

## Contributor stats

 - Run `pnpm collect:contributors` locally with `NUXT_GITHUB_TOKEN` set to a GitHub personal access token that can read public repos.
 - The script aggregates contributions across Nuxt organizations and writes one file per period to `public/`: `contributors.json` (all time), `contributors-30d.json`, `contributors-12m.json` and `contributors-<year>.json` (from 2016).
 - Archived repositories are collected too, so archiving a repository does not remove the contributions made there.
 - Merged PRs, helpful issues and helpful comments in `nuxt/nuxt` and its former homes (`nuxt/framework`, `nuxt/docs`) count double. Each record has a `core` object with that part, so the score can be explained.
 - It also writes `profiles.json`: the name, website, social accounts (Bluesky, X, LinkedIn, Mastodon…) and country of every all-time contributor who set any on their GitHub profile. If GitHub…

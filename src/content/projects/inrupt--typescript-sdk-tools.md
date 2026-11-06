---
repo: "inrupt/typescript-sdk-tools"
name: "typescript-sdk-tools"
description: "Tooling used when writing Inrupt's Typescript SDK for Solid"
readmeQualityOk: true
url: "https://github.com/inrupt/typescript-sdk-tools"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [68, 32]
stars: 10
forks: 0
openIssues: 0
closedIssues: 12
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2020-05-27T12:34:53Z"
lastCommitAt: "2026-11-06T11:20:06Z"
lastReleaseAt: "2022-10-24T10:03:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 67
maintainers: ["dependabot[bot]", "NSeydoux"]
openGraphImageUrl: "https://opengraph.githubassets.com/413bf90578a91a64152cbf09afd7a0a6b467996b70d2eaafbf742151f38f210c/inrupt/typescript-sdk-tools"
---

# Overview

This repository contains the following:

- ESLint configurations (see [`eslint-configs/README.md`](https://github.com/inrupt/typescript-sdk-tools/blob/HEAD/eslint-configs/README.md))
- Shared GitHub Workflows (see `.github/workflows/reusable-*.yml`)
- Shared E2E test helpers (coming soon!)

## Releasing

First, decide on what type of release to perform, then:

1. Switch to a new branch
2. Run `npm run lerna-version -- <major | minor | patch>, and commit the result
3. Push the branch and create a pull request
4. Once approved, merge the pull request and create a GH release with the latest version as a tag.
   The tag being pushed will trigger CD.

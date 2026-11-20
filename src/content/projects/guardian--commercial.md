---
repo: "guardian/commercial"
name: "commercial"
description: "Guardian advertising business logic"
readmeQualityOk: true
url: "https://github.com/guardian/commercial"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["production"]
stars: 20
forks: 4
openIssues: 2
closedIssues: 11
watchers: 29
contributors: 67
recentReleases: 0
createdAt: "2020-09-09T11:16:20Z"
lastCommitAt: "2026-11-20T12:21:16Z"
lastReleaseAt: "2020-10-13T13:06:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 96
undervaluedScore: 54
maintainers: ["dependabot[bot]", "domlander", "cemms1"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/294089722/8c1cc380-f685-11ea-907b-990e44dab77c"
discussionCount: 3
---

# Commercial Monorepo

This package contains the commercial (advertising) code that is loaded on all pages on theguardian.com.

There are 2 packages in this repo:
- [`@guardian/commercial-bundle`](https://github.com/guardian/commercial/blob/HEAD/bundle/) The commercial bundle, which is an independent set of javascript files that is loaded on all pages on theguardian.com.
- [`@guardian/commercial-core`](https://github.com/guardian/commercial/blob/HEAD/core/) An npm package used by other parts of the Guardian codebase, such as DCR.

## Development

### Requirements

-   Node
    -   see [.nvmrc](https://github.com/guardian/commercial/blob/HEAD/.nvmrc) for the current version
    -   the version manager [mise](https://mise.jdx.dev/getting-started.html) is recommended
-   pnpm
    - install this via [`corepack`](https://github.com/nodejs/corepack) which ships with Node automatically

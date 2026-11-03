---
repo: "safe-global/safe-docs"
name: "safe-docs"
description: "Developer Docs for building on Safe."
readmeQualityOk: true
url: "https://github.com/safe-global/safe-docs"
homepage: "https://docs.safe.global"
language: "MDX"
languages: ["MDX"]
languagePcts: [94]
topics: ["developer-tools", "ethereum", "smart-contracts", "documentation", "safe"]
stars: 65
forks: 95
openIssues: 16
closedIssues: 106
watchers: 10
contributors: 75
recentReleases: 0
createdAt: "2018-07-29T19:35:58Z"
lastCommitAt: "2026-11-03T11:15:00Z"
lastReleaseAt: "2024-02-21T10:54:24Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 51
maintainers: ["dasanra", "dependabot[bot]", "chrisdotn"]
openGraphImageUrl: "https://opengraph.githubassets.com/f78e0d91148d13fa97c94e02651beda9ad504ca3a59351ccaa85005ee0186af5/safe-global/safe-docs"
---

# Safe Documentation

This repository hosts [Safe](https://safe.global) documentation.

The documentation is built with [Nextra](https://nextra.site) and is live at [docs.safe.global](https://docs.safe.global).

## Installation

Install the dependencies using [pnpm](https://pnpm.io):

```
pnpm install
```

## Development

Git hooks are set up to run tests and linting checks before every `git push`. These hooks can be executed locally by running the following command:

```
pnpm prepush
```

All links in the documentation are checked for validity on every pull request. These checks can be executed locally by running the following command:

```
pnpm linkcheck
```

## Execution

The project can be run with a server that's executed in development and production mode.

### Development mode

Run the server in development mode using the following command:

```
pnpm dev
```

### Production mode

Build the project:

```
pnpm build
```

Run the server in production mode using the following command:

```
pnpm start
```

## Testing

Create an environment file in the root of the project and copy the content from the `.env.example` file using the following command:

```
cp .env.example .env
```…

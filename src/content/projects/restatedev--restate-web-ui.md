---
repo: "restatedev/restate-web-ui"
name: "restate-web-ui"
description: "Restate Web UI"
readmeQualityOk: true
url: "https://github.com/restatedev/restate-web-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 23
forks: 8
openIssues: 4
closedIssues: 55
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2024-03-14T16:03:43Z"
lastCommitAt: "2026-11-25T13:24:40Z"
lastReleaseAt: "2024-12-10T12:56:47Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 65
maintainers: ["Evgeny-", "nikrooz", "tillrohrmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/9459d234bd979a04a0279d2ad35b5d4f802102d4927bded3e613a045edbea7c4/restatedev/restate-web-ui"
---

# Restate Web UI

This repository is for Restate Web UI.

## Getting started

- This repository uses [`pnpm`](https://pnpm.io) as the package manager. If you are not contributing to the project, you do not need to install `pnpm`.

```sh
# Install dependencies
pnpm install
```

- This repository utilizes [`nx`](https://nx.dev) for the monorepo structure. Each package within the monorepo has multiple targets. To run a target for a package, use commands like:

```sh
# pnpm nx <target> <project> <...options>

# Run the web ui app in dev mode (proxies the admin API to a Restate server on localhost:9070)
pnpm nx serve web-ui

# Run the button unit tests in watch mode
pnpm nx test @restate/ui-button --watch
```

Details of each package's targets can be available in the `project.json` file within each package.

## Releasing

The [release workflow](https://github.com/restatedev/restate-web-ui/blob/HEAD/.github/workflows/release.yml) runs on every push to `main` or to a `release-*` branch. If the `version` in `package.json` has no GitHub release yet, the workflow:

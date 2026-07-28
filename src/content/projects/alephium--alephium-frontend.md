---
repo: "alephium/alephium-frontend"
name: "alephium-frontend"
description: "A monorepo containing all things frontend on Alephium."
readmeQualityOk: true
url: "https://github.com/alephium/alephium-frontend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 28
forks: 25
openIssues: 127
closedIssues: 627
watchers: 3
contributors: 28
recentReleases: 0
createdAt: "2023-11-09T10:00:02Z"
lastCommitAt: "2026-07-28T14:57:14Z"
lastReleaseAt: "2024-06-06T12:52:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "community_hub", "fork_magnet"]
healthScore: 96
undervaluedScore: 68
maintainers: ["nop33"]
openGraphImageUrl: "https://opengraph.githubassets.com/500d00a96be296e2ef772c24ac89fd7559dcd7af7bc6f3046e268d37cfc26f84/alephium/alephium-frontend"
discussionCount: 35
---

# Alephium frontend

A monorepo containing all things frontend on Alephium.

## Development

Make sure you have [pnpm](https://pnpm.io/) installed in your system.

Install all dependencies for all apps with:

```shell
pnpm install
```

Start the dev server for all shared packages with:

```shell
pnpm watch
```

In a separate terminal window navigate to the app folder you want to work on and follow the instructions there to start developing. The command above will ensure that the apps always get the latest code from the internally shared packages.

### Useful commands

Check if there are any type, linting, or formatting errors in any of the apps and internal packages with:

```shell
pnpm check
```

or more in a more granular approach:

```shell
pnpm typecheck
pnpm lint
pnpm format
```

You can attempt to fix linting errors with:

```shell
pnpm lint:fix
```

#### Test

```shell
pnpm test
```

## Contributing

We use [changeset](https://github.com/changesets/changesets) for managing the versions and changelogs of our projects.

When creating a PR, run the following command to create a…

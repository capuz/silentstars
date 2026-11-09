---
repo: "containerbase/base"
name: "base"
description: "The containerbase project's base image source"
readmeQualityOk: true
url: "https://github.com/containerbase/base"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["docker", "docker-image", "renovate", "containerbase"]
stars: 61
forks: 67
openIssues: 96
closedIssues: 223
watchers: 2
contributors: 46
recentReleases: 0
createdAt: "2021-03-22T06:10:42Z"
lastCommitAt: "2026-11-09T00:34:22Z"
lastReleaseAt: "2021-05-17T16:21:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 58
maintainers: ["renovate[bot]", "viceice", "karlhorky"]
openGraphImageUrl: "https://opengraph.githubassets.com/df6fb793b47d1b67ea8c55f12028e74e9b1dd9201401864ea71915ddb67df8b8/containerbase/base"
discussionCount: 19
---

# containerbase base

This repository is the source for the Docker images [`containerbase/base`](https://hub.docker.com/r/containerbase/base) and `ghcr.io/containerbase/base`.
The commits to the `main` branch are automatically built and published.

## Local development

Install a recent version of:

- [Docker](https://www.docker.com)
- the [`buildx`](https://github.com/docker/buildx) plugin

Node.js, pnpm and the workflow linters are pinned in [`mise.toml`](https://github.com/containerbase/base/blob/HEAD/mise.toml), so [`mise`](https://mise.jdx.dev) users can install them and then the dependencies with:

```console
> mise install
> pnpm install --frozen-lockfile
```

Without mise, install Node.js and pnpm yourself and run only `pnpm install --frozen-lockfile`.

You must first build the CLI, before you build the Docker images.

```console
> pnpm build
```

### Base image

If you make changes to the [`src`](https://github.com/containerbase/base/blob/HEAD/src/) folder or the [`Dockerfile`](https://github.com/containerbase/base/blob/HEAD/Dockerfile), you must:

1. run `pnpm build`
1. rebuild the `containerbase/base` image

```sh
pnpm build
docker buildx bake
```

You can use the…

---
repo: "containerbase/base"
name: "base"
description: "The containerbase project's base image source"
readmeQualityOk: true
url: "https://github.com/containerbase/base"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [62]
topics: ["docker", "docker-image", "renovate", "containerbase"]
stars: 58
forks: 60
openIssues: 80
closedIssues: 185
watchers: 3
contributors: 43
recentReleases: 0
createdAt: "2021-03-22T06:10:42Z"
lastCommitAt: "2026-08-29T17:14:14Z"
lastReleaseAt: "2021-05-17T16:21:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 59
maintainers: ["renovate[bot]", "jamietanna", "viceice"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0527f5d346cbfd07b62c545c254931d35d7c8b5cd6bb37c647573e460195db8/containerbase/base"
discussionCount: 19
---

# containerbase base

This repository is the source for the Docker images [`containerbase/base`](https://hub.docker.com/r/containerbase/base) and `ghcr.io/containerbase/base`.
The commits to the `main` branch are automatically built and published.

## Local development

Install a recent version of:

- [Docker](https://www.docker.com)
- the [`buildx`](https://github.com/docker/buildx) plugin

You must first build the CLI, before you build the Docker images.

```console
> pnpm install
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

You can use the following command to ignore the remote cache for local testing.
This may speed up your local builds.

```sh
docker buildx bake  --set *.cache-from=
```

### Test images

To run one of the tests use the following command, it will run the Java tests from [`test/java`](https://github.com/containerbase/base/blob/HEAD/test/java/).

```sh
TAG=java docker buildx bake test…

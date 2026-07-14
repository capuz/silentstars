---
repo: "containerbase/base"
name: "base"
description: "The containerbase project's base image source"
readmeQualityOk: true
url: "https://github.com/containerbase/base"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [61]
topics: ["docker", "docker-image", "renovate", "containerbase"]
stars: 57
forks: 59
openIssues: 76
closedIssues: 183
watchers: 2
contributors: 41
recentReleases: 0
createdAt: "2021-03-22T06:10:42Z"
lastCommitAt: "2026-07-14T05:39:12Z"
lastReleaseAt: "2021-05-17T16:21:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 59
maintainers: ["renovate[bot]", "viceice"]
openGraphImageUrl: "https://opengraph.githubassets.com/35e87f4c963382aa59c14900417b527bbe76b55957b9d5c579356f7ab415edbf/containerbase/base"
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

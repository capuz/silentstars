---
repo: "docker/bake-action"
name: "bake-action"
description: "GitHub Action to use Docker Buildx Bake as a high-level build command"
readmeQualityOk: true
url: "https://github.com/docker/bake-action"
homepage: "https://github.com/marketplace/actions/docker-buildx-bake"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["docker", "buildx", "bake", "github-actions", "github-actions-docker"]
stars: 301
forks: 43
openIssues: 13
closedIssues: 56
watchers: 9
contributors: 44
recentReleases: 0
createdAt: "2020-10-06T10:01:56Z"
lastCommitAt: "2026-09-10T08:22:04Z"
lastReleaseAt: "2021-05-26T13:29:50Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 40
maintainers: ["crazy-max", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81e1e741ed0166c2b25974d60080a0bc1f66ec0047d9b344d7c31861c5c5df67/docker/bake-action"
discussionCount: 11
---

## About

GitHub Action to use Docker [Buildx Bake](https://docs.docker.com/build/customize/bake/)
as a high-level build command.

___

* [Usage](#usage)
  * [Git context](#git-context)
  * [Path context](#path-context)
* [Summaries](#summaries)
* [Customizing](#customizing)
  * [inputs](#inputs)
  * [outputs](#outputs)
  * [environment variables](#environment-variables)
* [Subactions](#subactions)
  * [`matrix`](https://github.com/docker/bake-action/blob/HEAD/subaction/matrix)
* [Notes](#notes)
  * [Source semantics](#source-semantics)
* [Contributing](#contributing)

## Usage

### Git context

Since `v6` this action uses the [Git context](https://docs.docker.com/build/bake/remote-definition/)
to build from a remote bake definition by default like the [build-push-action](https://github.com/docker/build-push-action)
does. This means that you don't need to use the [`actions/checkout`](https://github.com/actions/checkout/)
action to check out the repository as [BuildKit](https://docs.docker.com/build/buildkit/)
will do this directly.

The git reference will be based on the [event that triggered your…

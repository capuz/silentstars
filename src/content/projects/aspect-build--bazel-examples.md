---
repo: "aspect-build/bazel-examples"
name: "bazel-examples"
description: "Bazel examples"
url: "https://github.com/aspect-build/bazel-examples"
homepage: "https://aspect.build"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [44]
stars: 147
forks: 86
openIssues: 17
closedIssues: 40
watchers: 5
contributors: 47
recentReleases: 0
createdAt: "2022-03-11T16:47:59Z"
lastCommitAt: "2026-06-28T03:08:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 48
maintainers: ["gregmagolan", "jeffpignataro", "alexeagle"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f88a4a318ec5e281e38f531156f49be51b7cd8dc71ce7c4d115ff1f9c45dd47/aspect-build/bazel-examples"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/aspect-build"]
---

# Aspect Bazel Examples

This variety of examples demonstrate how a large polyglot monorepo is configured with [Bazel](https://bazel.build).
It's intended for Developer Infrastructure and Build systems experts to study solutions to problems at scale.

- Hoping to learn Advanced Bazel concepts? Our [Bazel 200-series courses](https://training.aspect.build) use this repository as the example material.
- Just looking for a smaller Bazel repo as a playground? Run `aspect init` to scaffold a new project with the languages and features you care about — see [aspect init and the Aspect Starters](https://aspect.build/blog/aspect-init-and-starters), or the [getting started guide](https://aspect.build/docs/guides/getting-started/).

See all our other Bazel material on our GitHub: <https://github.com/aspect-build>

## Aspect CLI

This repository uses the [Aspect CLI](https://aspect.build/docs/cli/overview) for an improved developer experience, both for local development and on CI. `bazel` is a build system, not a developer-workflow tool — the Aspect CLI (`aspect`) is a free, open-source task runner that *extends* Bazel with first-class workflows (`lint`, `format`, `gazelle`, `delivery`)…

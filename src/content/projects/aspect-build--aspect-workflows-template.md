---
repo: "aspect-build/aspect-workflows-template"
name: "aspect-workflows-template"
description: "Aspect CLI 'init' task: scaffolding to create a new Bazel repository"
url: "https://github.com/aspect-build/aspect-workflows-template"
homepage: "https://aspect.build/docs/cli"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [81]
topics: ["bazel", "scaffold", "aspect-extensions"]
stars: 8
forks: 8
openIssues: 4
closedIssues: 16
watchers: 3
contributors: 29
recentReleases: 10
createdAt: "2024-04-30T04:25:35Z"
lastCommitAt: "2026-06-28T06:57:29Z"
lastReleaseAt: "2026-06-28T06:13:34Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 81
maintainers: ["alexeagle", "renovate[bot]", "gregmagolan"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8831d44d133574e2e913771e5cc8bb312d2345b663a195e0ef05df81a64defc/aspect-build/aspect-workflows-template"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/aspect-build"]
---

# Aspect Bazel Starters template

Ready-to-build [Bazel](https://bazel.build) projects, wired up with the
[Aspect CLI](https://aspect.build/docs/cli) and best-practice tooling. Pick a
language, generate a project, and start shipping — no Bazel boilerplate, no
toolchain yak-shaving.

This repo is the **source of truth** for both paths below: the projects
[`aspect init`](https://aspect.build/docs/cli) scaffolds and the template
repositories published under
[github.com/aspect-starters](https://github.com/aspect-starters) are rendered
from the one template tree here, so they never drift.

## Create a new project

### With the Aspect CLI (recommended)

Install the Aspect CLI: <https://aspect.build/docs/cli/install>

```shell
aspect init
```

`aspect init` fetches the latest template, prompts for the languages and features
you want (or pass `--preset <name>`), and renders a ready-to-build Bazel
workspace — no extra tools required.

### From a starter repository

Each preset is also published as a GitHub *template repository* under
[github.com/aspect-starters](https://github.com/aspect-starters) — click **Use
this template** (or **Fork**), or:

```shell
git clone…

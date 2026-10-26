---
repo: "moderneinc/rewrite-recipe-starter"
name: "rewrite-recipe-starter"
description: "A forkable starter for building your own recipes and deploying them on Moderne"
readmeQualityOk: true
url: "https://github.com/moderneinc/rewrite-recipe-starter"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 61
forks: 199
openIssues: 0
closedIssues: 13
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2021-07-15T21:42:13Z"
lastCommitAt: "2026-10-26T20:59:38Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["dependabot[bot]", "timtebeek", "TeamModerne"]
openGraphImageUrl: "https://opengraph.githubassets.com/96507104831fff25a106d16f82f1542d92194f977db0ecf2109b33a6dc52d3e4/moderneinc/rewrite-recipe-starter"
---

# Rewrite recipe starter

This repository serves as a template for building your own recipe JARs and publishing them to a repository where they can be applied on [app.moderne.io](https://app.moderne.io) against all the public OSS code that is included there.

We've provided a sample recipe (NoGuavaListsNewArray) and a sample test class. Both of these exist as placeholders, and they should be replaced by whatever recipe you are interested in writing.

To begin, fork this repository and customize it by:

1. Changing the root project name in `settings.gradle.kts`.
2. Changing the `group` in `build.gradle.kts`.
3. Changing the package structure from `com.yourorg` to whatever you want.

## Getting started

Familiarize yourself with the [OpenRewrite documentation](https://docs.openrewrite.org/), in particular the [concepts & explanations](https://docs.openrewrite.org/concepts-explanations) op topics like the [lossless semantic trees](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees), [recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes), [traits](https://docs.openrewrite.org/concepts-and-explanations/traits) and…

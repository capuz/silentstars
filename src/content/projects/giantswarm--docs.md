---
repo: "giantswarm/docs"
name: "docs"
description: "The Giant Swarm documentation site"
readmeQualityOk: true
url: "https://github.com/giantswarm/docs"
homepage: "http://docs.giantswarm.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [44]
topics: ["documentation", "kubernetes", "cluster-api", "helm", "platform-engineering"]
stars: 7
forks: 8
openIssues: 1
closedIssues: 118
watchers: 10
contributors: 115
recentReleases: 0
createdAt: "2015-02-02T11:36:15Z"
lastCommitAt: "2026-08-28T12:17:25Z"
lastReleaseAt: "2020-02-26T10:38:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 99
undervaluedScore: 84
maintainers: ["renovate[bot]", "taylorbot", "marians"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/30184278/c9a72f00-70d6-11e9-885c-8507f1538a50"
---

# Giant Swarm user documentation

This is the main documentation repository for the documentation available at https://docs.giantswarm.io.

## Repository overview

It holds the main **content** of our documentation. The documentation site is created using the static site generator [HUGO](http://gohugo.io/) based on markdown files in the `src/content/` directory of the `docs` repository.

Additional content is tied in through the scripts

- `scripts/aggregate-changelogs`: Aggregates changelog entries into the `src/content/changes` destination.
- `scripts/collect-changelog-entries`: Collects changelog entries from all apps defined in `giantswarm/github` repository to create a weekly update.
- `scripts/update-crd-reference`: Generates reference pages for our custom resource definitions in the `src/content/reference/platform-api` destination.
- `scripts/update-external-repos`: Tutorials that need their own code repository. They must have a `docs` subfolder with the Markdown content and optionally some images. Configuration is found in `scripts/update-external-repos/repositories.txt`.
- `scripts/update-helm-chart-reference`: Creates the cluster apps pages in the…

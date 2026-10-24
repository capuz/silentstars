---
repo: "buildkite/docs"
name: "docs"
description: "The source files for the Buildkite documentation"
readmeQualityOk: true
url: "https://github.com/buildkite/docs"
homepage: "https://buildkite.com/docs"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [48]
topics: ["buildkite-documentation"]
stars: 59
forks: 312
openIssues: 45
closedIssues: 280
watchers: 25
contributors: 311
recentReleases: 0
createdAt: "2015-10-12T07:09:30Z"
lastCommitAt: "2026-10-24T08:08:05Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 59
maintainers: ["karensawrey", "sj26", "jordandcarter"]
openGraphImageUrl: "https://opengraph.githubassets.com/ede5827c7d01fa895e5c06f41d0bc2274335e4435a985dd21517587ca36d90da/buildkite/docs"
---

# Buildkite Documentation [](https://buildkite.com/buildkite/docs)

The source files for the [Buildkite Documentation](https://buildkite.com/docs), aka the Buildkite Docs, or just docs.

To contribute, please send a pull request! :heart:

## Local docs development environment

### Before you start

There are two ways to develop and contribute to the Buildkite Documentation—non-containerized and containerized.

#### Non-containerized development

You will need Ruby, Node.js, and Yarn. Required versions are defined in [`mise.toml`](https://github.com/buildkite/docs/blob/HEAD/mise.toml).

Install [mise](https://mise.jdx.dev/) and run `mise install` to set up the correct versions automatically.

#### Containerized development

You will need [Docker](https://www.docker.com/) and Docker Compose.
Most desktop installations of Docker include Docker Compose by default.
On some platforms (for example, Linux-based ones), you may need to prefix `docker` commands with `sudo` or add your user to the `docker` group.

#### Get the Buildkite Docs source

As a public contributor to the Buildkite Docs, clone its source repository locally. To do so, run these commands:

```bash
git clone…

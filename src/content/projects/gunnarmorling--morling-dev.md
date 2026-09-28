---
repo: "gunnarmorling/morling.dev"
name: "morling.dev"
description: "Source code for Gunnar Morling's website."
readmeQualityOk: true
url: "https://github.com/gunnarmorling/morling.dev"
homepage: "https://morling.dev"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [60, 36]
stars: 17
forks: 10
openIssues: 9
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2019-03-12T20:46:50Z"
lastCommitAt: "2026-09-28T10:06:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 74
undervaluedScore: 44
maintainers: ["gunnarmorling"]
openGraphImageUrl: "https://opengraph.githubassets.com/c98fd33ea825a698e3659069c38d1c52eb520f66d88ade797dc067d474452c2c/gunnarmorling/morling.dev"
---

# morling.dev

This repo contains the source code of the [morling.dev](https://morling.dev) website.
It is built using [Hugo](https://gohugo.io/) and hosted on [GitHub Pages](https://pages.github.com/).

## Set-up

Have Hugo and AsciiDoctor installed, e.g. using Brew on macOS:

```shell
brew install hugo
brew install asciidoctor
```

Clone the repo, including the template sub-module:

```shell
git clone git@github.com:gunnarmorling/morling.dev.git  --recurse-submodules
```

## Editing

Launch a local Hugo server including live reload by running (append `-F` for including future posts):

```
hugo server -D --debug
```

## Deployment

Deployment to GitHub pages happens automatically upon pushing the master branch to the upstream repository by means of a GitHub Action.

In order to deploy to GitHub pages manually, commit all changes, then run:

```
./publish_to_ghpages.sh && git push upstream gh-pages
```

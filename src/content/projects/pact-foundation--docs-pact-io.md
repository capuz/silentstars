---
repo: "pact-foundation/docs.pact.io"
name: "docs.pact.io"
description: "Pact documentation website"
url: "https://github.com/pact-foundation/docs.pact.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["hacktoberfest", "pact", "smartbear-supported"]
stars: 17
forks: 105
openIssues: 19
closedIssues: 31
watchers: 5
contributors: 107
recentReleases: 0
createdAt: "2020-05-19T21:44:43Z"
lastCommitAt: "2026-06-25T01:38:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 71
maintainers: ["YOU54F", "kevinrvaz", "mefellows"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad1d08caa7cbbddd83e9327e729f72285bcf4b01b0d0080b93fa3da4676e7f85/pact-foundation/docs.pact.io"
---

# Pact Docs Website

![Sync Pact docs](https://github.com/pact-foundation/docs.pact.io/workflows/Sync%20Pact%20docs/badge.svg)

## Table of Contents
- [Pact Docs Website](#pact-docs-website)
  - [Table of Contents](#table-of-contents)
  - [Local development](#local-development)
  - [Adding pages](#adding-pages)
  - [Moving pages](#moving-pages)
  - [Automatic syncing from the markdown files in each Pact implementation repository](#automatic-syncing-from-the-markdown-files-in-each-pact-implementation-repository)
  - [Slack history](#slack-history)
  - [Hosting](#hosting)
  - [Search](#search)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Local development

The files are markdown, stored under the `docs` directory.

You will need Docker and Docker Compose to run the docs application locally.

`docker-compose up`

## Adding pages

* Add the file to the appropriate path under the `docs` directory.
* Update [website/sidebars.json](website/sidebars.json).

## Moving pages

* Find the file under the `docs` directory.
* Move it to the directory/name you want.
* Update [website/sidebars.json](website/sidebars.json).
* Do a file search and replace to update any internal…

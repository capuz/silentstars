---
repo: "AdguardTeam/KnowledgeBase"
name: "KnowledgeBase"
description: "AdGuard knowledge base"
readmeQualityOk: true
url: "https://github.com/AdguardTeam/KnowledgeBase"
language: "MDX"
languages: ["MDX"]
languagePcts: [82]
stars: 127
forks: 469
openIssues: 1
closedIssues: 101
watchers: 11
contributors: 70
recentReleases: 0
createdAt: "2021-12-22T10:00:47Z"
lastCommitAt: "2026-11-05T08:05:45Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["abolshova-a11y", "SeverAnna", "slvvko"]
openGraphImageUrl: "https://opengraph.githubassets.com/50d74e71cf34490343e08ad919735aaf990bd58fdff1fafa7da0803d2b7bc1f6/AdguardTeam/KnowledgeBase"
---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

`master` branch is published automatically to https://kb-adg.pages.dev/.

## How to contribute

You can help by contributing to the Knowledge Base, all details are described [in this article](https://adguard.com/kb/miscellaneous/contribute/updating-knowledge-base/).

## How to develop

### Prepare

First of all, you need to install the following:

- [git](https://github.com/git-guides/install-git)
- [pnpm](https://pnpm.io/installation)

Second, clone this repo to your local computer:

- `git clone git@github.com:AdguardTeam/KnowledgeBase.git`

Alternatively, you can use the [Github app](https://desktop.github.com/) to do that.

Then you should open Terminal on your computer, navigate to the directory where you cloned this repo and run this command to install the local dependencies:

- `pnpm install`

### Lint markdown

This command lints the markdown and outputs any errors to the console:

- `pnpm lint:md`

Some of errors can be fixed automatically:

- `pnpm lint:md --fix`

VSCode users can install the [markdownlint extension][vscode-markdownlint] to see the errors in…

---
repo: "sosiristseng/template-quartz"
name: "template-quartz"
description: "Template for publishing Obsidian note for free, powered by https://github.com/jackyzha0/quartz"
readmeQualityOk: true
url: "https://github.com/sosiristseng/template-quartz"
homepage: "https://sosiristseng.github.io/template-quartz/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["digital-garden", "markdown", "obsidian", "template", "github-pages"]
stars: 26
forks: 9
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-22T01:56:35Z"
lastCommitAt: "2026-11-03T11:15:25Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 39
maintainers: ["sosiristseng", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/199324f1ca41ab0f4b60125538124d7f4c265c7e3aa684c164a18e4232c353d5/sosiristseng/template-quartz"
---

# Quartz v5 Template for GitHub pages

[Quartz][] is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

This template repository

- builds the website from the notes and publishes to GitHub pages by GitHub actions, using [quartz-action][] and a Quartz version pinned in `quartz.version`.
- keeps the pinned Quartz fresh: a weekly workflow opens a pull request when a newer version is available.
- is [Obsidian](https://obsidian.md/)-friendly (thanks to [Quartz][]). Open the `content` folder as an Obsidian vault.

[Quartz]: https://github.com/jackyzha0/quartz
[quartz-action]: https://raven-wing.github.io/quartz-action/

## How-to

Click the big green `Use this template` button to create a repository. Clone the created repository using GitHub Desktop or the `git clone` command:

```bash
git clone https://github.com/$USER/$REPO.git
```

Open the `content` folder as an Obsidian vault, edit/add notes and use GitHub Desktop or `git push` command to commit and push the changes to GitHub. GitHub actions will build and publish the website automatically.

> [!IMPORTANT]
> You need to enable GitHub pages in…

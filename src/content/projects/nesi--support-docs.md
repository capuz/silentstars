---
repo: "nesi/support-docs"
name: "support-docs"
description: "NeSI Mkdocs based support pages."
url: "https://github.com/nesi/support-docs"
homepage: "https://docs.nesi.org.nz/"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
stars: 10
forks: 8
openIssues: 36
closedIssues: 106
watchers: 14
contributors: 34
recentReleases: 0
createdAt: "2023-06-12T22:52:36Z"
lastCommitAt: "2026-06-27T00:34:19Z"
status: "thriving"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 72
maintainers: ["nesi-mkdocs-bot", "geoffreyweal", "janamakar"]
openGraphImageUrl: "https://opengraph.githubassets.com/5794aca624cec2740927ad02f185cd90f5509d32aeeca8bd9e59b6945cc18928/nesi/support-docs"
---

# Mahuika support documentation



This repository contains the sources files for the Mahuika support documentation.

Rendered pages are visible at [https://docs.nesi.org.nz](http://docs.nesi.org.nz).

## Contents

The repository is organised using the following folders:

- `checks` : scripts intended to be run by CI,
- `docs`: markdown files, structure determines categories and sections[^1],
- `docs/assets`: non-template related files, e.g. images,
- `overrides`: theme overides or extensions for page templates.
- `overrides/partials`: Overrides and extensions for sub components.

[^1]: A section or category can be replaced by an `index.md` file, this will replace the default nav with a page.

## Developer Documentation

Following pages contain information to help maintain the documentation:

- See [contributing](https://nesi.github.io/support-docs/CONTRIBUTING) ([local version](docs/CONTRIBUTING.md)), to learn how to you can contribute.
- See [formatting](https://nesi.github.io/support-docs/FORMAT), for examples of markdown syntax.
- See [create a new page](https://nesi.github.io/support-docs/NEWPAGE), for general principles to consider when writing…

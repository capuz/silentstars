---
repo: "c2corg/c2c_ui"
name: "c2c_ui"
description: "User interface for https://www.camptocamp.org"
readmeQualityOk: true
url: "https://github.com/c2corg/c2c_ui"
homepage: "https://www.camptocamp.org"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [52, 45]
topics: ["vuejs2", "user-interface", "spa", "c2c"]
stars: 30
forks: 35
openIssues: 93
closedIssues: 479
watchers: 5
contributors: 45
recentReleases: 0
createdAt: "2018-12-15T12:44:45Z"
lastCommitAt: "2026-11-23T10:31:51Z"
lastReleaseAt: "2019-05-13T15:32:51Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["lbesson", "eddy-geek", "actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/161904131/9032a300-d054-11eb-9a21-f58d71332825"
fundingLinks: ["CUSTOM:https://www.helloasso.com/associations/camptocamp-association/formulaires/2"]
discussionCount: 0
---

# [camptocamp.org](https://www.camptocamp.org)

## Architecture

This is the Vue3-based responsive web frontend of camptocamp.

_(Click for the interactive version)_

#### Frontend (c2c_ui)

#### Local development

## Setup

On any OS, install [git](https://git-scm.com/) and [node.js](https://nodejs.org/en/) (the current LTS, as in CI; some
development dependencies need at least 22.22.2 or 24.15, e.g. `nvm install --lts`). Then :

```bash
# Download camptocamp.org source code :
git clone https://github.com/c2corg/c2c_ui
cd c2c_ui

# Install dependencies. It's quite long, but you have to do it once.
npm ci
```

And now, let's launch

```bash
npm run serve
```

:heart: [http://localhost:8080](http://localhost:8080) :heart:

⚠️ The dev server starts on the **production** backend. To use a local API ([v6_api](https://github.com/c2corg/v6_api),
on `http://localhost:6543`, whose dev configuration allows this origin), choose `localhost` in the backend selector of
the navigation bar: the choice is kept in the browser (local storage).

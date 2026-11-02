---
repo: "roadiz/core-bundle-dev-app"
name: "core-bundle-dev-app"
description: "Roadiz CMS v2+ development monorepo and environment"
readmeQualityOk: true
url: "https://github.com/roadiz/core-bundle-dev-app"
language: "PHP"
languages: ["PHP"]
languagePcts: [69]
topics: ["cms-framework", "symfony-bundle"]
stars: 6
forks: 1
openIssues: 52
closedIssues: 139
watchers: 3
contributors: 7
recentReleases: 3
createdAt: "2021-09-07T16:27:15Z"
lastCommitAt: "2026-11-02T17:56:53Z"
lastReleaseAt: "2026-10-17T01:07:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 80
maintainers: ["ambroisemaupate", "eliot488995568", "timothejoubert"]
openGraphImageUrl: "https://opengraph.githubassets.com/675e21b2468b01f5109934502b7b77e65bff903a1ac88ec356567f9958aaf1d7/roadiz/core-bundle-dev-app"
---

# Roadiz development monorepo

> 📖 **Looking for how to *use* Roadiz?** The full product documentation lives at **[docs.roadiz.io](https://docs.roadiz.io)**.
> This README only covers the **monorepo development environment** (building, testing and splitting the packages).

This is **development app** for Roadiz v2. It aggregates all Roadiz bundles and main repositories in one place:

- DocGenerator
- Documents
- DtsGenerator
- EntityGenerator
- Jwt
- Markdown
- Models
- OpenId
- Random
- RoadizCoreBundle
- RoadizRozierBundle
- RoadizTwoFactorBundle
- RoadizUserBundle
- RoadizSolrBundle
- Rozier
- and documentation website (./docs)

If you want to start a new headless project with Roadiz, check https://github.com/roadiz/skeleton instead.

## Install

- Clone this repository containing all monorepo packages in `lib` directory
- Checkout `develop` branch
- Initialize `git flow init` to use GitFlow branching model
- Create a `.env.local` file with mandatory `APP_SECRET` and `JWT_PASSPHRASE` vars minimum
- Create a `compose.override.yml` file to expose containers ports
- Run `docker compose run --rm --no-deps --entrypoint= app composer install` to install all dependencies and run…

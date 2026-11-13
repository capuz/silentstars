---
repo: "larry801/filmcentenary"
name: "filmcentenary"
description: "film centenary board game"
originalDescription: "film centenary board game"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/larry801/filmcentenary"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-09-15T01:37:07Z"
lastCommitAt: "2026-11-13T10:50:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 89
maintainers: ["larry801"]
openGraphImageUrl: "https://opengraph.githubassets.com/217f6057862f19b80fab150bd1afc16a406ad50f198ad1c35c35f3638bfacbad/larry801/filmcentenary"
---

# Film Centenary / Song-Jin War / Virgin Queen Web Version

Web version of a board game implemented with the [boardgame.io](https://boardgame.io) framework

## Getting Started

First install dependencies. Requires Node 20.19 or above (vite 8 requires ^20.19 or >=22.12; the Docker image uses node 22)
```shell
yarn install
```

Open the local version (remote multiplayer is unavailable; /local4p, /local, /localVQ, /localIE can be used for testing)
```shell
yarn start
```

Start the version with remote multiplayer
```shell
yarn serve
```

## Images

CI is split into two workflows:

- `.github/workflows/ci.yml`: unit tests, type checking, production build, and Playwright E2E,
runs on `master` and on `feature/**`, `fix/**`, `refactor/**`, `test/**` branches
(also triggered by pull requests targeting `master`). E2E runs in two steps: `yarn test:e2e` runs the default suite
(Vite dev server), and `yarn test:e2e:ie` runs three IE suites that require a production build.
- `.github/workflows/release.yml`: only `master` builds and pushes three images:

  - `ghcr.io/larry801/film-centenary`: application image (used by `docker-compose.yml`)
  - `ghcr.io/larry801/film-centenary-base`: runtime…

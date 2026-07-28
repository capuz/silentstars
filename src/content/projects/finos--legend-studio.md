---
repo: "finos/legend-studio"
name: "legend-studio"
description: "Legend Studio"
readmeQualityOk: true
url: "https://github.com/finos/legend-studio"
homepage: "https://legend.finos.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["legend", "modeling", "data-modeling", "editor", "ide"]
stars: 110
forks: 148
openIssues: 176
closedIssues: 404
watchers: 9
contributors: 134
recentReleases: 0
createdAt: "2020-08-12T12:13:08Z"
lastCommitAt: "2026-07-28T14:55:32Z"
lastReleaseAt: "2023-07-20T12:42:23Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 54
maintainers: ["github-actions[bot]", "TharunRajeev", "MauricioUyaguari"]
openGraphImageUrl: "https://opengraph.githubassets.com/5da75976cbfdfe0e387c72721b004a72bfdcab63ebce3ebebcc4420a11010151/finos/legend-studio"
---

# legend-studio

The codebase and home of Legend applications: `Legend Studio`, `Legend Query`, etc.

## Getting started

Studio relies [Legend SDLC](https://github.com/finos/legend-sdlc) server and [Legend Engine](https://github.com/finos/legend-engine) server. To quickly set these backend servers up, use our development [Docker compose](https://github.com/finos/legend-studio/blob/HEAD/fixtures/legend-docker-setup/studio-dev-setup/README.md). If you need to debug and develop the backend, [setup with Maven](https://legend.finos.org/docs/getting-started/installation-guide#maven-install) instead.

Last but not least, make sure you have `Yarn` installed. Run the following commands in order.

```bash
  yarn install
  yarn setup
  yarn dev
```

After setting up, visit http://localhost:9000/studio and the application should be up :tada:

> If you get `Unauthorized` error, visit `SDLC` server at http://localhost:6100/api/auth/authorize in your browser, you will get redirected to the Gitlab login page or a Gitlab page asking you to authorize Legend OAuth application. After you completing these steps, you will be redirected back to SDLC. Now refresh Studio and the problem should be gone.…

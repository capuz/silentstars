---
repo: "entur/enki"
name: "enki"
description: "Front-end for Nplan"
url: "https://github.com/entur/enki"
homepage: "https://nplan.entur.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["uttu", "enki", "frontend", "nplan", "ror"]
stars: 12
forks: 11
openIssues: 11
closedIssues: 43
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2019-01-09T09:33:15Z"
lastCommitAt: "2026-06-23T06:41:16Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 78
maintainers: ["testower", "renovate[bot]", "JeF0X"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3f315a68f625cf53d800e67486a4c6a30a8a34ed26016f5e111d2c1ea09b063/entur/enki"
---

# Enki
![Build](https://github.com/entur/enki/actions/workflows/build.yml/badge.svg?event=push)

Frontend app for Nplan - a simple timetable editor. Backend is [Uttu](https://github.com/entur/uttu).

![Screenshot of journey pattern editor](screenshots/journey-pattern.png)

## Development

To run for development, simply do:

```
npm install
npm start
```
See http://localhost:3001/providers or http://localhost:3001/lines for providers and lines.

Note: The app uses Node version 24 (LTS).

To run together with a local instance of [Uttu](https://github.com/entur/uttu) on port 11701, add the following to `.env.development.local`.

```
REACT_APP_UTTU_API_URL=http://localhost:11701/services/flexible-lines
```

## Configuration

Configuration is bootstrapped from `/bootstrap.json`, when the app loads. You should add your environment-specific
config to the deployment, along with the built static files (i.e. in the `build/` folder).

For local development, add a `bootstrap.json` file to the `public/` folder, e.g.:
```
$ cp .github/environments/local.json public/bootstrap.json
```

See `src/config/ConfigContext.ts` for the shape of the configuration.

## Authentication

Uses OIDC for…

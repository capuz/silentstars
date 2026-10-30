---
repo: "kpi-ua/ecampus.kpi.ua"
name: "ecampus.kpi.ua"
description: "Igor Sikorsky Kyiv Polytechnic Institute Electronic Campus"
readmeQualityOk: true
url: "https://github.com/kpi-ua/ecampus.kpi.ua"
homepage: "https://ecampus.kpi.ua"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["kpi-ua", "open-source", "kiev", "software", "education", "ecampus"]
stars: 18
forks: 16
openIssues: 10
closedIssues: 75
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2015-01-17T11:07:34Z"
lastCommitAt: "2026-10-30T11:03:26Z"
lastReleaseAt: "2025-04-14T19:53:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["Markusplay", "a-gubskiy", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e29e364c6026149e4f3f7f0d89a1043931cc81fb610d710c7e3e739faeb44708/kpi-ua/ecampus.kpi.ua"
---

# Electronic Campus of Igor Sikorsky Kyiv Polytechnic Institute

The information system "Electronic Campus of Igor Sikorsky Kyiv Polytechnic Institute" is an automated system supporting educational process informatization. It provides digital communication tools for students, faculty, and department heads, enhancing educational quality through modern technology.

## Environment variables

- CAMPUS_API_BASE_PATH - Campus API URL. Dev value: `https://dev-api.campus.cloud.kpi.ua`
- MAIN_COOKIE_DOMAIN - Main site cookie domain name (for ecampus-token). Dev value: `localhost`
- ROOT_COOKIE_DOMAIN - Root site cookie domain name (for SID). Dev value: `localhost`
- NEXT_PUBLIC_RECAPTCHA_KEY - Google ReCaptcha v3 public key. Dev value: `6LeMy30qAAAAAIC6KUhNfReP-Us5wkrkp3FLfOgl`

## Run project locally

```shell
npm i
npm run dev
```

## Build project for production

```shell
npm run build
```

## Run production build

```shell
npm run start
```

### Run storybook

```shell
npm run storybook
```

## [Docker](https://hub.docker.com/r/kpiua/ecampus.kpi.ua)

### Build container

```shell
docker build ./ --file ./Dockerfile --tag kpiua/ecampus.kpi.ua:latest
```

### Run

#### Run with default…

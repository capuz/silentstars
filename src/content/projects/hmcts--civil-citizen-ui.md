---
repo: "hmcts/civil-citizen-ui"
name: "civil-citizen-ui"
description: "Civil Citizen UI (CCUI) application"
readmeQualityOk: true
url: "https://github.com/hmcts/civil-citizen-ui"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [50, 33]
topics: ["jenkins-cft", "jenkins-cft-a-c"]
stars: 7
forks: 7
openIssues: 1
closedIssues: 1
watchers: 18
contributors: 133
recentReleases: 0
createdAt: "2021-10-28T07:56:16Z"
lastCommitAt: "2026-09-25T09:01:38Z"
lastReleaseAt: "2023-11-29T10:16:57Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 68
maintainers: ["gmikerlemos", "renovate[bot]", "elvianihuseyin2"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fd73d8741b067ea45f901cda09a8360c113d706eb6a06915cefa0cf9913d723/hmcts/civil-citizen-ui"
---

# Civil Citizen UI

## Contents
- [UI Test Documentation](#ui-test-documentation)
- [API Test Documentation](#api-test-documentation)
- [Functional Test Group Documentation (UI)](#functional-test-group-documentation-ui)
- [Functional Test Group Documentation (API)](#functional-test-group-documentation-api)

## Getting Started

### Prerequisites

Running the application requires the following tools to be installed in your environment:

  * [Node.js](https://nodejs.org/) v14.0.0 or later
  * [yarn](https://yarnpkg.com/)
  * [Docker](https://www.docker.com)

### Local Setup

Before running CCD definition imports or integration scripts locally, pull the shared scripts from civil-service:

```bash
./bin/pull-latest-civil-shared.sh
```

This downloads the shared IDAM/CCD helper scripts to `bin/shared/`. You can optionally specify a branch:

```bash
./bin/pull-latest-civil-shared.sh feature-branch
```

### Running the application

Install dependencies by executing the following command:

 ```bash
$ yarn install
 ```
Bundle:

```bash
$ yarn webpack
```

Run:

```bash
$ yarn start
```

The application's home page will be available at https://localhost:3001

### Running with Docker

Create…

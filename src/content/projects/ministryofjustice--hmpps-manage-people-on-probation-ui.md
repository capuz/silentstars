---
repo: "ministryofjustice/hmpps-manage-people-on-probation-ui"
name: "hmpps-manage-people-on-probation-ui"
description: "HMPPS Manage People on Probation UI"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["hmpps", "frontend"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 26
contributors: 40
recentReleases: 0
createdAt: "2024-02-09T14:25:09Z"
lastCommitAt: "2026-11-10T11:39:02Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 89
undervaluedScore: 58
maintainers: ["aliuk2012", "dependabot[bot]", "anandelangovan1"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a2c2636d6df9d12717bfc1abb7ab2b0cf1ca2aab06bb01128b449d4df453269/ministryofjustice/hmpps-manage-people-on-probation-ui"
---

# Manage a Supervision UI

User interface for the Manage a Supervision service.

Try it out in the dev environment: https://manage-people-on-probation-dev.hmpps.service.justice.gov.uk/

## Get started

### Pre-requisites

You'll need to install:

- [Node 24.x](https://nodejs.org/en/download) - Node and nvm installation.
- [Docker](https://www.docker.com/)
- [Latest version of Java with Homebrew](https://formulae.brew.sh/formula/openjdk#default) - Needed for wiremock

### Dependencies

Install NPM package dependencies:

```shell
npm run setup
```

If this fails run `npm install` first to ensure package-lock.json is inline with package.json

### Run the service

```shell
# Start the UI in test mode
npm run start-feature:dev
````
Open http://localhost:3007 in your browser.

### Integrate with dev services

- Request access for 1password, on the [#ask-operations-engineering](https://moj.enterprise.slack.com/archives/C01BUKJSZD4) channel. Once access granted, create a `.env` file and copy the environmental variables from 1password to your `.env`.
- Request user access for development and test, complete the Delius User Access Request form.

```shell
npm run start:dev
```

Open…

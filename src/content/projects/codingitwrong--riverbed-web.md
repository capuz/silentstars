---
repo: "CodingItWrong/riverbed-web"
name: "riverbed-web"
description: "Web client for Riverbed, an app for creating interactive CRUD apps with no programming."
readmeQualityOk: true
url: "https://github.com/CodingItWrong/riverbed-web"
homepage: "https://about.riverbed.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-12-30T13:13:39Z"
lastCommitAt: "2026-10-12T11:15:44Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 66
maintainers: ["dependabot[bot]", "CodingItWrong"]
openGraphImageUrl: "https://opengraph.githubassets.com/539243445a9365d0101aad992df80e3287bee18b8489eae9473bec0d83354bd0/CodingItWrong/riverbed-web"
---

# Riverbed Web

Web client for Riverbed, an app for creating interactive CRUD apps with no programming.

## Requirements

- [Node 22.x](https://nodejs.org)
- [pnpm](https://pnpm.io)

## Installation

- Clone the repo
- Run `pnpm install`
- Copy `.env.sample` to `.env.local` and `.env.production`, and fill in API key values from Google Cloud

Dependencies are locked with `pnpm-lock.yaml`; please use `pnpm` rather than `npm` or `yarn` for installing.

## Running

- Run `pnpm serve`

## E2E Tests: Cypress

- Start webpack by running `pnpm serve`
- In another terminal, run `pnpm cypress`
- Choose E2E Testing, then any browser, then click "Start E2E Testing"

## Copyright and License

Copyright 2023 NeedBee, LLC.

Licensed under GNU Affero General Public License (GNU AGPL) version 3 or later. See LICENSE.md for details.

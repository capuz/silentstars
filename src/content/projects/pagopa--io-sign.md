---
repo: "pagopa/io-sign"
name: "io-sign"
description: "IO platform feature that allows the signing of PDF documents"
readmeQualityOk: true
url: "https://github.com/pagopa/io-sign"
homepage: "https://firma.io.italia.it/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["io-sign", "io"]
stars: 6
forks: 7
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 32
recentReleases: 0
createdAt: "2022-11-02T09:46:10Z"
lastCommitAt: "2026-09-02T08:03:23Z"
lastReleaseAt: "2023-06-21T10:53:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 82
maintainers: ["github-actions[bot]", "Iustin-Burlacu", "Civolo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b0444eca21392f25d367dc8118f56070516c5b912dff364b42ca6362bf302b8/pagopa/io-sign"
---

# io-sign ✍️

`io-sign` is the [IO platform](https://io.italia.it) _feature_ that allows citizens to sign digitally documents and contracts sent by public administration.

This repository contains the code that composes the `io-sign` back-end, that is organized into two microservices:

1. `io-func-sign-issuer` that exposes the API used by public entities
2. `io-func-sign-user` that exposes the ReST API consumed by the [IO mobile app](https://github.com/pagopa/io-app)

These services are deployed as `Azure Function App`, and use the `Node.js` Azure runtime.

It also contains `io-sign-backoffice-app` the frontend for self-care integration.

## Prerequisites

In order to run the `io-sign` back-end/front-end locally you need the following tool installed on your machine.

- `Node.js 20`
- `pnpm 10.28.1`

The preferred way to set up the local environment is using [nodenv](https://github.com/nodenv/nodenv) to manage `Node.js` installation and `corepack` (included with `Node.js`) to manage the installation of `pnpm`.

## Backend local development

To test the `Azure Functions` locally:

1. **Setup the Environment Variables.** Create a file called `local.settings.json` in each `Azure…

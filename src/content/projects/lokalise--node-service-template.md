---
repo: "lokalise/node-service-template"
name: "node-service-template"
description: "Batteries-included starter template for Node.js backend services"
readmeQualityOk: true
url: "https://github.com/lokalise/node-service-template"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["lokalise-nextgen"]
stars: 379
forks: 19
openIssues: 0
closedIssues: 4
watchers: 17
contributors: 24
recentReleases: 0
createdAt: "2023-01-12T12:08:32Z"
lastCommitAt: "2026-09-10T08:20:41Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 37
maintainers: ["dependabot[bot]", "kibertoad", "CarlosGamero"]
openGraphImageUrl: "https://opengraph.githubassets.com/888d2690ff996601e59e63cf63e0a6eaf3b07b746d4d3c3e3ca4abbb75979f75/lokalise/node-service-template"
---

# node-service-template

## Versioning

Please bump the version in `package.json` and add description of changes into `CHANGELOG.md` when making changes.

When synchronizing services built with the template with the upstream changes, please bump the version in `package.json` to reflect the step up to which the changes are synchronized.

## Overview

`node-service-template` provides a "battery-included" starter template for building enterprise Node.js webservices.

It comes with the following out-of-the-box:

- [fastify](https://www.fastify.io/docs/latest/) as a basis for the general web application skeleton;
- Modular, domain-driven structure that encourages separation of concerns;
- Server/app separation, for convenient bootstrapping in e2e tests;
- [Global error handler](https://github.com/lokalise/node-service-template/blob/HEAD/src/infrastructure/errors/errorHandler.ts);
- JSON-based, single line standardized [logging](https://github.com/lokalise/node-service-template/blob/HEAD/src/infrastructure/logger.ts);
- Automatic population of `req.id` for incoming requests based on `x-request-id` header, or generation of new UUID if none is set, for the purposes of distributed tracing.…

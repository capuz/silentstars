---
repo: "commercetools/connect-payment-integration-template"
name: "connect-payment-integration-template"
description: "Toolkit for developing a PSP integration with commercetools"
readmeQualityOk: true
url: "https://github.com/commercetools/connect-payment-integration-template"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["checkout-anywhere-team"]
stars: 10
forks: 5
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2024-01-16T09:33:29Z"
lastCommitAt: "2026-10-21T08:48:35Z"
lastReleaseAt: "2024-02-13T15:43:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 68
maintainers: ["dependabot[bot]", "robmonct", "rober-olmeda"]
openGraphImageUrl: "https://opengraph.githubassets.com/558626f8ce4f6dcfe9ed1a0d8965a763e263ed9ccae864d8de1ede4861a3c3be/commercetools/connect-payment-integration-template"
---

# connect-payment-integration-template

This repository provides a [connect](https://docs.commercetools.com/connect) template for payment integration connector. This boilerplate code acts as a starting point for integration with external payment service provider.

## Template Features

- Typescript language supported.
- Uses Fastify as web server framework.
- Uses [commercetools SDK](https://docs.commercetools.com/sdk/js-sdk-getting-started) for the commercetools-specific communication.
- Uses [connect payment SDK](https://github.com/commercetools/connect-payments-sdk) to manage request context, sessions and JWT authentication.
- Includes local development utilities in npm commands to build, start, test, lint & prettify code.

## Prerequisite

#### 1. commercetools composable commerce API client

Users are expected to create API client responsible for payment management in composable commerce project. Details of the API client are taken as input as environment variables/ configuration for connect such as `CTP_PROJECT_KEY` , `CTP_CLIENT_ID`, `CTP_CLIENT_SECRET`. For details, please read [Deployment…

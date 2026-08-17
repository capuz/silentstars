---
repo: "uhop/cognito-toolkit"
name: "cognito-toolkit"
description: "Helpers for AWS Cognito to build web applications with authentication/authorization"
readmeQualityOk: true
url: "https://github.com/uhop/cognito-toolkit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["cognito-pools", "user-pools", "aws-cognito"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-05-03T15:21:03Z"
lastCommitAt: "2026-08-17T04:19:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 56
maintainers: ["uhop", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd347582ec9df1f13a767a2409bd2c6af0b511218d8c1fad203d9365864630d8/uhop/cognito-toolkit"
fundingLinks: ["GITHUB:https://github.com/uhop", "BUY_ME_A_COFFEE:https://buymeacoffee.com/uhop"]
---

# `cognito-toolkit` [][npm-url]

[npm-img]: https://img.shields.io/npm/v/cognito-toolkit.svg
[npm-url]: https://npmjs.org/package/cognito-toolkit
[aws-jwt-verify]: https://github.com/awslabs/aws-jwt-verify

[AWS Cognito](https://aws.amazon.com/cognito/) authentication & authorization for web apps: a middleware family for **Koa**, **Express**, **Fetch-style servers** (Bun, Deno, Cloudflare Workers, …), and **AWS Lambda** with route guards and an auth-cookie convenience, built on AWS's official [aws-jwt-verify] verifier, plus utilities for obtaining machine-to-machine (`client_credentials`) access tokens. ESM-only, one runtime dependency ([aws-jwt-verify], itself dependency-free).

The port family mirrors [dynamodb-toolkit](https://github.com/uhop/dynamodb-toolkit)'s adapters (`./koa`, `./express`, `./fetch`, `./lambda`), so the two toolkits compose without glue — e.g. `auth.isAuthenticated(createFetchAdapter(adapter))`.

> **v3 is a breaking reshape.** The homegrown verifier of 1.x is retired — token verification is delegated to [aws-jwt-verify], AWS's own zero-dependency verifier. The sister packages [koa-cognito-middleware](https://github.com/uhop/koa-cognito-middleware) and…

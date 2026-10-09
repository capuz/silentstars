---
repo: "checkly/checkly-cli"
name: "checkly-cli"
description: "TS/JS native Monitoring as Code workflow"
readmeQualityOk: true
url: "https://github.com/checkly/checkly-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cli", "nodejs", "monitoring-as-code", "monitoring", "javascript", "typescript"]
stars: 97
forks: 25
openIssues: 10
closedIssues: 234
watchers: 9
contributors: 41
recentReleases: 0
createdAt: "2021-01-20T21:03:11Z"
lastCommitAt: "2026-10-09T18:55:42Z"
lastReleaseAt: "2021-07-29T15:18:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 48
maintainers: ["sorccu", "thebiglabasky", "danielpaulus"]
openGraphImageUrl: "https://opengraph.githubassets.com/7488f9003c80a589870aceb3b718a23e09b8ad06cc27936beadb858ea021bee4/checkly/checkly-cli"
---

The Checkly CLI gives you a **JavaScript/TypeScript-native workflow** for coding, testing and deploying synthetic
monitoring at scale, from your code base. We call this workflow **monitoring as code** (MaC).

- **Codeable, testable, reviewable monitoring constructs.** Works with your dev pipeline. From your IDE, via PR to CI.
- **Native `@playwright/test` support.** No lock-in, just write standard `*.spec.ts` files.
- **Alerting baked in.** Set alerts for Slack, SMS and many more channels.
- **Typescript-first.** Fully typed for easy refactoring and code completion.
- **Run in the cloud or on-prem.** Run on the Checkly cloud or in your network using the [Private Locations](https://www.checklyhq.com/docs/private-locations/)

# A quick example

Monitoring checks are written by instantiating constructs from the `checkly/constructs` package...

```ts
// books-api.check.ts
import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('books-api-check-1', {
  name: 'Books API',
  request: {
    url: 'https://danube-web.shop/api/books',
    method: 'GET',
    assertions: [
      AssertionBuilder.statusCode().equals(200),…

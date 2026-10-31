---
repo: "zivl/sentry-testkit"
name: "sentry-testkit"
description: "A Sentry plugin to allow Sentry report interception and further inspection of the data being sent"
readmeQualityOk: true
url: "https://github.com/zivl/sentry-testkit"
homepage: "https://zivl.github.io/sentry-testkit/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["raven-test-kit", "raven", "sentry", "sentry-io", "raven-js", "raven-node", "sentry-testkit", "error-reporting", "error-monitoring", "error-handling"]
stars: 116
forks: 24
openIssues: 2
closedIssues: 75
watchers: 189
contributors: 26
recentReleases: 2
createdAt: "2017-10-09T18:00:52Z"
lastCommitAt: "2026-10-31T19:00:54Z"
lastReleaseAt: "2026-08-07T06:12:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_watch"]
healthScore: 94
undervaluedScore: 44
maintainers: ["dependabot[bot]", "zivl", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/106317421/f7d9e01e-e016-4df8-a49f-748560a7a413"
---

Test what your app reports to [Sentry](https://sentry.io/welcome/) — without sending anything to Sentry's servers.

When building tests for your application you want to assert that the right flow-tracking or error is being sent to _Sentry_, **but** without really sending it and swamping your Sentry project with false reports from test runs and CI.

## Sentry Testkit — to the rescue

_Sentry Testkit_ enables Sentry to work natively in your application while running tests: reports are intercepted and logged into memory instead of being sent over the wire. Your tests can then fetch and assert on everything that was (or wasn't) captured:

- **Errors and messages** — `captureException`, `captureMessage`, breadcrumbs, tags, extra, user
- **Performance transactions and spans** — names, ops, attributes, span trees
- **Structured logs** — everything sent via `Sentry.logger.*`
- **Feature flags** — which flags were evaluated when an error was captured
- **Async-safe assertions** — built-in `waitFor*` helpers, no sleeps and no flaky tests

## Installation

**npm:**
```sh
npm install sentry-testkit --save-dev
```
**yarn:**
```sh
yarn add sentry-testkit --dev
```

Requires Sentry JavaScript…

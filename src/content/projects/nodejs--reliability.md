---
repo: "nodejs/reliability"
name: "reliability"
description: "Make the CI green again"
url: "https://github.com/nodejs/reliability"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 55
forks: 17
openIssues: 1542
closedIssues: 27
watchers: 38
contributors: 93
recentReleases: 0
createdAt: "2018-06-01T12:24:00Z"
lastCommitAt: "2026-06-27T00:36:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 40
maintainers: ["nodejs-github-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9feb31465f1996ea0f38a11055a90140447799753c3633288f564ecd0c272f2e/nodejs/reliability"
fundingLinks: ["GITHUB:https://github.com/nodejs", "OPEN_COLLECTIVE:https://opencollective.com/nodejs"]
---

# Node.js Core CI Reliability

This repo is used for tracking flaky tests on the Node.js CI and fixing them.

**Current status**: work in progress. Please go to the issue tracker to discuss!

- [Node.js Core CI Reliability](#nodejs-core-ci-reliability)
  - [Updating this repo](#updating-this-repo)
  - [The Goal](#the-goal)
    - [The Definition of Green](#the-definition-of-green)
  - [CI Health History](#ci-health-history)
  - [Protocols in improving CI reliability](#protocols-in-improving-ci-reliability)
    - [Identifying flaky JS tests](#identifying-flaky-js-tests)
    - [Handling flaky JS tests](#handling-flaky-js-tests)
    - [Identifying infrastructure issues](#identifying-infrastructure-issues)
    - [Handling infrastructure issues](#handling-infrastructure-issues)
  - [TODO](#todo)

## Updating this repo

Updates should be merged as soon as possible. We can revert or modify
afterwards. This repo is mostly for coordination so we need to move fast and
reduce the noise.

## The Goal

Make the CI green again.

- Taking actual failures from PRs into account, at least 80% of the
  [node-test-pull-request](https://ci.nodejs.org/job/node-test-pull-request/)
  (or…

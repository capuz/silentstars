---
repo: "buildkite/test-engine-client"
name: "test-engine-client"
description: "Buildkite Test Engine Client (bktec) is an open source tool to orchestrate your test suites. It uses your Buildkite Test Engine suite data to intelligently partition and parallelise your tests."
readmeQualityOk: true
url: "https://github.com/buildkite/test-engine-client"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 30
forks: 17
openIssues: 2
closedIssues: 18
watchers: 16
contributors: 40
recentReleases: 0
createdAt: "2024-01-29T04:08:37Z"
lastCommitAt: "2026-11-01T22:58:36Z"
lastReleaseAt: "2024-06-24T22:07:19Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 60
maintainers: ["nprizal", "mttns", "dahtey-bk"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6d640bbd5b7962d60e0394270d86a2f31c1175523d657de51730dcf5f183f86/buildkite/test-engine-client"
---

# Buildkite Test Engine Client

Buildkite Test Engine Client (`bktec`) is a command-line tool for running test suites with Buildkite Test Engine.

Its main responsibilities are discovering runnable tests, requesting a test plan from Test Engine, running the tests assigned to the current parallel job, reading runner results, and uploading results when configured.

Use `bktec` to split test work across parallel Buildkite jobs using timing data from Test Engine. It can also retry failed tests and mute or skip known failures for runners that support those features, while leaving you in control of the command your test runner executes.

For runner-specific setup, see the [runner guides](#runner-guides). For the canonical setup guide, see [Installing and using the Test Engine Client](https://buildkite.com/docs/pipelines/configure/tests/bktec/installing-and-using-the-client).

## How bktec works

In a Buildkite parallel step, `bktec run` follows this general flow:

```mermaid
flowchart LR
    discover["Discover test targets"] --> plan["Request or reuse a Test Engine plan"]
    plan --> slice["Select this parallel job's tests"]
    slice --> run["Run the test framework"]
    run -->…

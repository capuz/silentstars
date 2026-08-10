---
repo: "concourse/concourse-bosh-release"
name: "concourse-bosh-release"
description: "Concourse BOSH release"
readmeQualityOk: true
url: "https://github.com/concourse/concourse-bosh-release"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [57, 22]
stars: 29
forks: 56
openIssues: 3
closedIssues: 46
watchers: 12
contributors: 199
recentReleases: 0
createdAt: "2018-09-10T19:32:53Z"
lastCommitAt: "2026-08-10T05:05:44Z"
lastReleaseAt: "2019-05-03T12:55:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 67
maintainers: ["concourse-bot", "taylorsilva", "IvanChalukov"]
openGraphImageUrl: "https://opengraph.githubassets.com/a300c3854db1c9e4007dd9d905cc17f67e69ccdd6703e640619d3cb056e9f595/concourse/concourse-bosh-release"
---

# concourse-bosh-release

> A [BOSH](https://bosh.io) release for the `concourse` binary.

This repository contains the official BOSH release of
[Concourse](https://concourse-ci.org). It packages up the `concourse` binary
and exposes all flags via properties on the `web` and `worker` jobs. These jobs
represent the [`web` node](https://concourse-ci.org/concourse-web.html) and the
[`worker` node](https://concourse-ci.org/concourse-worker.html), respectively.

## Requirements

- [Bosh CLI V2](https://bosh.io/docs/cli-v2.html#install)

## Usage

Check out the [`concourse-bosh-deployment`
repository](https://github.com/concourse/concourse-bosh-deployment) repository
for a stub manifest and various ops files.

If you're not familiar with BOSH, you may want to check out the [BOSH
documentation](https://bosh.io/docs/) first.

If you're just looking to get Concourse running quickly and kick the tires, you
may want to try the [Quick Start](https://concourse-ci.org/install.html)
instead.

## Developing

To add new Concourse flags/env vars to one of the job specs, do the
following:

1. Update the `spec` file located in the relevant `jobs/<job>/` directory
2. Run…

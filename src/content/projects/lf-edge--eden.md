---
repo: "lf-edge/eden"
name: "eden"
description: "Eden is where EVE and Adam get tried and tested:"
readmeQualityOk: true
url: "https://github.com/lf-edge/eden"
homepage: "https://projecteve.dev"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 55
forks: 55
openIssues: 33
closedIssues: 171
watchers: 7
contributors: 32
recentReleases: 0
createdAt: "2020-03-26T21:41:57Z"
lastCommitAt: "2026-09-29T08:10:57Z"
lastReleaseAt: "2022-06-14T12:25:29Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 63
maintainers: ["eriknordmark", "dependabot[bot]", "christoph-zededa"]
openGraphImageUrl: "https://opengraph.githubassets.com/962bc69ed5c7f34f3d2ce4d7cd49afe438f5aa9df6ac5408001db400045ae158/lf-edge/eden"
---

# Eden

Eden is the simplest way to setup & test [EVE](https://github.com/lf-edge/eve)
and [Adam](https://github.com/lf-edge/adam).

Eden is a management harness that provides two layers of management.

* infrastructure: deploy and/or delete nodes running [EVE](https://github.com/lf-edge/eve),
  controller [Adam](https://github.com/lf-edge/adam) and [software-defined networks](https://github.com/lf-edge/eden/blob/HEAD/sdn/README.md)
  between EVE and the controller
* tasks: execute on EVE, via the controller, one or more tasks

Eden is particularly suited to running tests and test suites. These tests must
meet eden's test API. This repository also includes a framework for simplify
running the tests on the managed EVE via Adam, and reporting on
results.

Eden is inspired by Kubernetes workflows and CLI

Note that EVE by itself without a controller is useless in practice. It retrieves its entire
configuration from the controller, and has no console commands that can be used standalone,
like general-purpose Linux distributions. You use the controller to tell EVE which workloads
you want to run. EVE, in turn, runs those workloads in containers or VMs.

EVE supports the following…

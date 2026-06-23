---
repo: "openshift/sippy"
name: "sippy"
description: "Sippy provides dashboards for the openshift CI test/job data"
url: "https://github.com/openshift/sippy"
homepage: "http://sippy.dptools.openshift.org/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [59, 32]
stars: 34
forks: 131
openIssues: 0
closedIssues: 22
watchers: 9
contributors: 2933
recentReleases: 0
createdAt: "2020-03-26T00:04:34Z"
lastCommitAt: "2026-06-23T23:29:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 70
maintainers: ["openshift-merge-bot[bot]", "mstaeble", "sosiouxme"]
openGraphImageUrl: "https://opengraph.githubassets.com/805b39dbe95f6a256eef3078ed51c694b57ff3058281aaa57f1a88b011e0240a/openshift/sippy"
---

# Sippy

CIPI (Continuous Integration Private Investigator) aka Sippy -- a tool
to analyze prow job results.

Reports on job and test statistics, sliced by various filters including
name, suite, or NURP+ variants (network, upgrade, release, platform, etc).

## Typical usage

See [DEVELOPMENT.md](DEVELOPMENT.md) for information about standing up a
local environment.

See [resources](resources/) for example deployment manifests in
Kubernetes.

## API

See [the API documentation](pkg/api/README.md)

## Frontend

See [the front end documentation](sippy-ng/README.md)

## Chat

See [the chat documentation](chat/README.md)

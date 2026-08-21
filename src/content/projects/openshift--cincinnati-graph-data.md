---
repo: "openshift/cincinnati-graph-data"
name: "cincinnati-graph-data"
description: "Release node and upgrade edge metadata for Cincinnati graphs."
readmeQualityOk: true
url: "https://github.com/openshift/cincinnati-graph-data"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [70, 21]
stars: 81
forks: 81
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 2936
recentReleases: 0
createdAt: "2019-09-05T20:05:56Z"
lastCommitAt: "2026-08-21T04:11:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 52
maintainers: ["openshift-merge-bot[bot]", "openshift-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d3d313639870df421f8d11a85b9cbda7126ae8d239a765d73deb53997e83e0b/openshift/cincinnati-graph-data"
---

# Cincinnati Graph Data

[Cincinnati][] is an update protocol designed to facilitate automatic updates.
This repository manages the Cincinnati graph for OpenShift.

All of this data feeds the OpenShift Update Service, and describes the schema and APIs that graph-data administrators can use to configure that service.
Nothing in this repository sets policy on which updates are supported for which clusters (which is downstream of the update service).
Nothing in this repository sets policy for how graph-data administrators decide to use the available graph-data (that policy is internal, but the public commitments are covered in product docs like [these][openshift-channel-docs].

## Workflow

The [contributing documentation](https://github.com/openshift/cincinnati-graph-data/blob/HEAD/CONTRIBUTING.md) covers licencing and the usual Git flow.

1. Create a PR.
1. Merge the PR to master.
1. Update your local master branch.

[Cincinnati][] is configured to track the master branch, so it will automatically react to updates made to this repository.

### Cincinnati Consumption

Cincinnati consumes [a subset of…

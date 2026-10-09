---
repo: "openshift/release"
name: "release"
description: "Release tooling for OpenShift"
readmeQualityOk: true
url: "https://github.com/openshift/release"
homepage: "https://try.openshift.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
stars: 330
forks: 2402
openIssues: 0
closedIssues: 0
watchers: 22
contributors: 2095
recentReleases: 0
createdAt: "2016-11-30T20:25:21Z"
lastCommitAt: "2026-10-09T18:55:51Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["openshift-merge-bot[bot]", "redhat-chai-bot", "jbpratt"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a9941ef07596b5dffacd99e46d8d529b25e8d44bfb132d0d92b9b4f8ec0fd6/openshift/release"
---

# OpenShift Release Tooling

This repository holds OpenShift cluster manifests, component build manifests and
CI workflow configuration for OpenShift component repositories for both OKD and
OCP.

## CI Workflow Configuration

To setup a CI workflow for a new repository, use `make new-repo`. See the
[Contributing CI Configuration to the openshift/release Repository](https://docs.ci.openshift.org/docs/how-tos/contributing-openshift-release/)
document for detailed information about how to contribute to this repository.

Configuration files for CI workflows live under [`ci-operator/`](https://github.com/openshift/release/blob/HEAD/ci-operator/)
and are split into the following categories:

 - [`ci-operator/config`](https://github.com/openshift/release/blob/HEAD/ci-operator/config/) contains configuration for the
   `ci-operator`, detailing builds and tests for component repositories.
 - [`ci-operator/jobs`](https://github.com/openshift/release/blob/HEAD/ci-operator/jobs/) contains configuration for `prow`,
   detailing job triggers. In almost all cases, this configuration is
   generated automatically from the `ci-operator` config. For manual edits, see
   [this…

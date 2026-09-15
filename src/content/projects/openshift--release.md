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
stars: 329
forks: 2368
openIssues: 0
closedIssues: 0
watchers: 23
contributors: 2065
recentReleases: 0
createdAt: "2016-11-30T20:25:21Z"
lastCommitAt: "2026-09-15T08:55:01Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["redhat-chai-bot", "openshift-ci[bot]", "psalajova"]
openGraphImageUrl: "https://opengraph.githubassets.com/d01db27ce1d8230eff2181a35afb9e4c1b62bfd808d71e8ec943fd3e2ad865c2/openshift/release"
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

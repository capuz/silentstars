---
repo: "scylladb/scylla-cluster-tests"
name: "scylla-cluster-tests"
description: "Tests for Scylla Clusters"
readmeQualityOk: true
url: "https://github.com/scylladb/scylla-cluster-tests"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["cql", "scylladb", "test-automation", "testing-framework", "cassandra"]
stars: 72
forks: 116
openIssues: 31
closedIssues: 2147
watchers: 19
contributors: 80
recentReleases: 0
createdAt: "2015-12-29T23:03:42Z"
lastCommitAt: "2026-11-12T10:37:48Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 57
maintainers: ["fruch", "cezarmoise", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/acf420df2d6b45af8c210c2a3eef5af3978abc28d1d03c40bb36c57399fea33e/scylladb/scylla-cluster-tests"
discussionCount: 4
---

# SCT - Scylla Cluster Tests

SCT tests ScyllaDB clusters under heavy read/write load on real or virtual machines.
A single test run provisions everything it needs, runs the workload, injects failures, collects logs,
and tears down. Each run creates:

* **DB cluster**: the ScyllaDB nodes under test
* **Loaders**: machines that run load generators (cassandra-stress, latte, scylla-bench, ...)
* **Monitor**: a [Scylla Monitoring](https://github.com/scylladb/scylla-monitoring) stack for the DB cluster and loaders

Tests run inside **Hydra**, a container image with all SCT dependencies preinstalled.

- [1. Set up](#1-set-up)
- [2. Run your first test locally](#2-run-your-first-test-locally)
- [3. Run on a cloud backend](#3-run-on-a-cloud-backend)
- [4. Everyday tasks](#4-everyday-tasks)
- [5. Writing and configuring tests](#5-writing-and-configuring-tests)
- [6. Types of tests](#6-types-of-tests)
- [7. Diagnostics and results](#7-diagnostics-and-results)
- [8. CI and Jenkins](#8-ci-and-jenkins)
- [9. Contributing](#9-contributing)
- [10. Maintainer reference](#10-maintainer-reference)

## 1. Set up

**Prerequisites:** Linux, Docker or Podman, `sudo` access, and an AWS account (SCT…

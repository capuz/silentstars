---
repo: "DataDog/system-tests"
name: "system-tests"
description: "Test framework for libraries and agents."
readmeQualityOk: true
url: "https://github.com/DataDog/system-tests"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [41, 34]
topics: ["functional-testing", "fuzzing", "blackbox-testing", "integration-testing", "end-to-end-testing"]
stars: 52
forks: 17
openIssues: 29
closedIssues: 107
watchers: 451
contributors: 456
recentReleases: 0
createdAt: "2021-10-04T09:33:09Z"
lastCommitAt: "2026-10-16T08:27:06Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 95
undervaluedScore: 36
maintainers: ["dd-octo-sts[bot]", "vpellan", "cbeauchesne"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bbce3654556f5d93044429107af31e101f88bdf120936f3ba090bc1287afd06/DataDog/system-tests"
---

## What is system-tests?

Having trouble? Reach out on slack: [#apm-shared-testing](https://dd.enterprise.slack.com/archives/C025TJ4RZ8X)

System-tests is a black-box testing workbench for Datadog tracer libraries. It runs the **same tests** against every tracer implementation -- Java, Node.js, Python, PHP, Ruby, C, C++, .NET, Go, and Rust -- so shared features stay consistent across languages.

Key principles:

* **Black-box testing** -- only component interfaces are checked, no assumptions about internals. "Check that the car moves, regardless of the engine."
* **Cross-language** -- one test validates all tracer libraries.

## Quick start

You need **bash**, **Docker** (20.10+), and **Python 3.12**.

```bash
# 1. Build images for the language you want to test
./build.sh python          # or: c, java, nodejs, ruby, php, dotnet, golang

# 2. Run the tests
./run.sh                   # run all default tests
./run.sh SCENARIO_NAME     # run a specific scenario
./run.sh tests/test_smoke.py::Test_Class::test_method   # run a single test
```

Having trouble? Check the [troubleshooting page](https://github.com/DataDog/system-tests/blob/HEAD/docs/execute/troubleshooting.md).

To…

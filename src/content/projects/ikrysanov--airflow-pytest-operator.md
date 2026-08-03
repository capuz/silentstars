---
repo: "IKrysanov/airflow-pytest-operator"
name: "airflow-pytest-operator"
description: "Run pytest as an Airflow task. Pluggable runner/parser, structured XCom results, Airflow 2.x/3.x support. SOLID, typed, tested."
readmeQualityOk: true
url: "https://github.com/IKrysanov/airflow-pytest-operator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["airflow", "pytest", "python", "testing", "pytest-operator", "airflow-pytest-operator"]
stars: 10
forks: 1
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-05-23T09:40:23Z"
lastCommitAt: "2026-08-03T06:45:57Z"
lastReleaseAt: "2026-06-20T19:56:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["IKrysanov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81e2381ba196d8758328acdf66c580aa2479d70e83f575ae24908fa97b9f326/IKrysanov/airflow-pytest-operator"
discussionCount: 8
---

# airflow-pytest-operator

Run a `pytest` suite as an Airflow task. The operator executes your tests in a child process, parses the JUnit report into a structured result, pushes a summary to XCom, and fails the task when tests fail (configurable).

Works on **Airflow 2.x and 3.x** — all version-specific imports are isolated in a single compatibility module, so one wheel supports both.

**Package**

| Badge | What it tells you |
|:------|:------------------|
| [](https://pypi.org/project/airflow-pytest-operator/) | Latest release on PyPI — `pip install airflow-pytest-operator` |
| [](https://pepy.tech/projects/airflow-pytest-operator) | Downloads from PyPI in the last month (via pepy) |
| [](https://pypi.org/project/airflow-pytest-operator/) | Supported Python versions (3.10+) |
| [](https://airflow.apache.org/) | Compatible Airflow majors — one wheel for 2.x **and** 3.x |
| [](https://opensource.org/licenses/Apache-2.0) | Distributed under the Apache-2.0 licence |

**Quality &amp; build**

| Badge | What it tells you |
|:------|:------------------|
| [](https://github.com/IKrysanov/airflow-pytest-operator/actions/workflows/ci.yml) | Build & test suite (lint, types, unit,…

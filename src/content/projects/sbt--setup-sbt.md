---
repo: "sbt/setup-sbt"
name: "setup-sbt"
description: "setup-sbt installs the official sbt runner"
url: "https://github.com/sbt/setup-sbt"
homepage: "https://eed3si9n.com/setup-sbt/"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["github-actions", "sbt", "scala"]
stars: 35
forks: 18
openIssues: 0
closedIssues: 16
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2024-06-22T16:46:59Z"
lastCommitAt: "2026-06-29T07:24:09Z"
lastReleaseAt: "2025-05-24T20:50:36Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 65
maintainers: ["eed3si9n", "scala-steward", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecb4b1c6cabdecc97c1b5ce45898b0cdd3427cc2807dba35ea7857b9a3b445f1/sbt/setup-sbt"
---

Setup sbt
=========

This action enables `sbt` runner from GitHub Actions.

Usage
-----

Here's an example usage of setup-sbt action.

```yaml
env:
  JAVA_OPTS: -Xms2048M -Xmx2048M -Xss6M -XX:ReservedCodeCacheSize=256M -Dfile.encoding=UTF-8
steps:
- uses: actions/checkout@v6
- name: Setup JDK
  uses: actions/setup-java@v5
  with:
    distribution: temurin
    java-version: 17
    cache: sbt
- uses: sbt/setup-sbt@v1
- name: Build and test
  shell: bash
  run: sbt -v +test
```

`uses: sbt/setup-sbt@v1` makes `sbt` available on Linux, macOS, and Windows.

### Setting the runner version

The `sbt` runner is typically compatible with all modern sbt releases.
However, the launcher distributed by sbt 2.x will require JDK 17.

You can pin the `sbt` runner back to sbt 1.x to run JDK 8:

```yaml
env:
  JAVA_OPTS: -Xms2048M -Xmx2048M -Xss6M -XX:ReservedCodeCacheSize=256M -Dfile.encoding=UTF-8
steps:
- uses: actions/checkout@v6
- name: Setup JDK
  uses: actions/setup-java@v5
  with:
    distribution: zulu
    java-version: 8
    cache: sbt
- uses: sbt/setup-sbt@v1
  with:
    sbt-runner-version: 1.12.11
- name: Build and test
  shell: bash
  run: sbt -v +test
```

### Opting out of disk cache…

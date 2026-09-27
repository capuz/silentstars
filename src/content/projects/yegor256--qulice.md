---
repo: "yegor256/qulice"
name: "qulice"
description: "Quality Police for Java projects: aggregator of Checkstyle and PMD"
readmeQualityOk: true
url: "https://github.com/yegor256/qulice"
homepage: "https://www.qulice.com"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["java", "quality", "static-analysis", "checkstyle", "pmd", "checkstyle-plugin", "pmd-plugin", "maven"]
stars: 326
forks: 124
openIssues: 7
closedIssues: 932
watchers: 17
contributors: 58
recentReleases: 0
createdAt: "2013-04-21T14:01:15Z"
lastCommitAt: "2026-09-27T09:16:56Z"
lastReleaseAt: "2014-05-05T19:34:36Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["yegor256", "renovate[bot]", "rultor"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/9580168/fbb6e200-9e36-11e9-9d8a-aef738715776"
---

# Checkstyle and PMD in One Maven Plugin

Qulice is a static analysis quality control instrument for Java projects.
It combines all the best static analysis instruments and
  pre-configure them, including [Checkstyle], [PMD], and [ErrorProne].
You don't need to use and configure them individually any more.

ErrorProne runs in a forked `javac` process spawned by Qulice, so no
  extra JVM flags are required in your project.
Suppress individual checks with `@SuppressWarnings("CheckName")` (the
  standard ErrorProne mechanism) or skip whole paths via an
  `errorprone:` exclude, e.g.
  `<exclude>errorprone:.*/generated/.*</exclude>`.

Three directories are left alone by [Checkstyle], [PMD], and
  [ErrorProne] by default, together with all their subdirectories, and
  you don't need an `<exclude>` for any of them:

* `src/test/resources` holds fixtures of your tests, which [Maven]
  never compiles and which quite often are broken on purpose;
* `src/site` holds the sources of your [Maven] site, where a `.java`
  file illustrates the documentation instead of shipping;
* `src/it` holds whole projects of their own, the ones
  [maven-invoker-plugin][invoker] builds, each with its own POM.

An…

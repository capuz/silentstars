---
repo: "gradlex-org/java-module-testing"
name: "java-module-testing"
description: "Gradle plugin to turn JVM Test Suites into Blackbox or Whitebox Test Suite for Java Modules"
readmeQualityOk: true
url: "https://github.com/gradlex-org/java-module-testing"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["gradle-plugin", "java", "java-modules", "testing", "jpms"]
stars: 28
forks: 3
openIssues: 5
closedIssues: 21
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-12-02T10:03:04Z"
lastCommitAt: "2026-10-21T20:00:36Z"
lastReleaseAt: "2024-11-18T12:24:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 51
maintainers: ["renovate[bot]", "jjohannes", "britter"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/434168441/84b5657a-19f6-4305-b8bf-b7be1cc20b7c"
---

# Java Module Testing Gradle plugin

A Gradle 7.4+ plugin to turn a [JVM Test Suite](https://docs.gradle.org/current/userguide/jvm_test_suite_plugin.html#sec:jvm_test_suite_configuration)
into a **Blackbox** or **Whitebox** Test Suite for Java Modules.

This plugin is maintained by me, [Jendrik Johannes](https://github.com/jjohannes).
I offer consulting and training for Gradle and/or the Java Module System - please [reach out](mailto:jendrik.johannes@gmail.com) if you are interested.
There is also my [YouTube channel](https://www.youtube.com/playlist?list=PLWQK2ZdV4Yl2k2OmC_gsjDpdIBTN0qqkE) on Gradle topics.

If you have a suggestion or a question, please [open an issue](https://github.com/gradlex-org/java-module-testing/issues/new).

# Java Modules with Gradle

If you plan to build Java Modules with Gradle, you should consider using these plugins on top of Gradle core:

- [`id("org.gradlex.java-module-dependencies")`](https://github.com/gradlex-org/java-module-dependencies)  
  Avoid duplicated dependency definitions and get your Module Path under control
- [`id("org.gradlex.java-module-testing")`](https://github.com/gradlex-org/java-module-testing)  
  Proper test setup for Java…

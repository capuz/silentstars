---
repo: "apache/maven-surefire"
name: "maven-surefire"
description: "Apache Maven Surefire"
readmeQualityOk: true
url: "https://github.com/apache/maven-surefire"
homepage: "https://maven.apache.org/surefire/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["build-management", "java", "maven", "maven-plugins", "maven-surefire-plugin", "maven-failsafe-plugin", "maven-surefire-report-plugin"]
stars: 464
forks: 591
openIssues: 288
closedIssues: 2111
watchers: 39
contributors: 198
recentReleases: 0
createdAt: "2010-08-12T03:32:41Z"
lastCommitAt: "2026-11-04T11:27:49Z"
lastReleaseAt: "2024-01-10T08:28:28Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 43
maintainers: ["olamy", "slachiewicz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd487babf58c5af782d34105b6db5960bf44ea52b872c9c296fc5aca4baeec2/apache/maven-surefire"
---

Contributing to [Apache Maven Surefire](https://maven.apache.org/surefire/)
======================

# The Maven Community

# Project Documentation

Usage of [maven-surefire-plugin], [maven-failsafe-plugin], [maven-surefire-report-plugin]

# Development Information

Build the Surefire project using **Maven 3.6.3+** and **JDK 8+**.

* In order to run tests for a release check during the Vote, the following memory requirements are needed:

  On Linux/Unix:
  ```
  export MAVEN_OPTS="-server -Xmx512m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=384m -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+TieredCompilation -XX:TieredStopAtLevel=1 -XX:SoftRefLRUPolicyMSPerMB=50 -Djava.awt.headless=true"
  ```
  On Windows:
  ```
  set MAVEN_OPTS="-server -Xmx256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=384m -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+TieredCompilation -XX:TieredStopAtLevel=1 -XX:SoftRefLRUPolicyMSPerMB=50 -Djava.awt.headless=true"
  ```

* In order to build and run the tests:
  ```
  mvn install site site:stage -P reporting,run-its
  ```

* To set up the project in [Eclipse IDE](https://www.eclipse.org/) or [IntelliJ IDEA](https://www.jetbrains.com/idea/), please follow…

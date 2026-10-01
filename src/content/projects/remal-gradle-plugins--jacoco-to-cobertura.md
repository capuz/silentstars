---
repo: "remal-gradle-plugins/jacoco-to-cobertura"
name: "jacoco-to-cobertura"
description: "A Gradle plugin that converts Jacoco XML reports to Cobertura format for importing in GitLab CI coverage report artifact"
readmeQualityOk: true
url: "https://github.com/remal-gradle-plugins/jacoco-to-cobertura"
language: "Java"
languages: ["Java"]
languagePcts: [76]
topics: ["cobertura", "gradle", "gradle-plugin", "jacoco", "plugin", "jacoco-to-cobertura"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-29T20:25:11Z"
lastCommitAt: "2026-10-01T10:23:02Z"
lastReleaseAt: "2025-01-20T19:25:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 79
maintainers: ["repository-token-issuer[bot]", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/745efbb1e3c46142acd6b303c2426a95fe71f05578dd73f35e34eb4d90e4df71/remal-gradle-plugins/jacoco-to-cobertura"
---

> [!IMPORTANT]
> [JaCoCo Coverage Reports](https://docs.gitlab.com/ee/ci/testing/test_coverage_visualization/jacoco.html) feature is generally available in GitLab 17.6.
>
> If you use this plugin for GitLab's [Cobertura Coverage Reports](https://docs.gitlab.com/ee/ci/testing/test_coverage_visualization/cobertura.html), consider switching to JaCoCo Coverage Reports and removing this plugin from your build.

&nbsp;

**Tested on Java LTS versions from 11 to 27.**

**Tested on Gradle versions from 7.0 to 9.8.0.**

# `name.remal.jacoco-to-cobertura` plugin

Usage:

```groovy
plugins {
    id 'name.remal.jacoco-to-cobertura' version '2.0.4'
}
```

&nbsp;

For every [`JacocoReport`](https://docs.gradle.org/current/javadoc/org/gradle/testing/jacoco/tasks/JacocoReport.html) task,
this plugin creates a task that converts Jacoco XML report to Cobertura format.
This new task is executed automatically after corresponding `JacocoReport` task (via `finalizedBy`).

It can be useful for [GitLab test coverage visualization](https://docs.gitlab.com/ee/ci/testing/test_coverage_visualization.html).

The name of created task is `<jacoco task name>ToCobertura`. Examples:

* `jacocoTestReport` ->…

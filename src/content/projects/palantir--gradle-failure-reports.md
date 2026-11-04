---
repo: "palantir/gradle-failure-reports"
name: "gradle-failure-reports"
description: "Gradle plugin that detects failures in CircleCI jobs and converts them into JUnit test reports, which are then displayed in the CircleCI user interface"
readmeQualityOk: true
url: "https://github.com/palantir/gradle-failure-reports"
language: "Java"
languages: ["Java"]
languagePcts: [90]
topics: ["octo-correct-managed"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 0
watchers: 153
contributors: 40
recentReleases: 0
createdAt: "2024-02-12T13:06:37Z"
lastCommitAt: "2026-11-04T02:56:36Z"
lastReleaseAt: "2024-03-15T08:46:51Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "community_watch"]
healthScore: 78
undervaluedScore: 39
maintainers: ["svc-excavator-bot", "svc-autorelease"]
openGraphImageUrl: "https://opengraph.githubassets.com/97c645528fe7d3da4a3897b543299b0acea3761ef5352ad706af479e5c622b06/palantir/gradle-failure-reports"
---

## gradle-failure-reports

A Gradle plugin that detects failures in CircleCI jobs and converts them into JUnit test reports, which are then displayed in the CircleCI user interface for a more streamlined view of the build status and error details.

Currently, the plugin renders failure reports for `Java` projects, specifically targeting `compilation` tasks, `verifyLocks` tasks, and `checkstyle` tasks. Support for additional task types is under development and will be available in the near future.

## gradle-failure-reports-exceptions

A library that exposes an `ExceptionWithSuggestion` that provides additional context or guidance when errors occur.

## Usage

To apply this plugin, `build.gradle` should look something like:

```
buildscript {
    repositories {
       mavenCentral()
    }

    dependencies {
        classpath 'com.palantir.gradle.failure-reports:gradle-failure-reports:<version>'
    }
}

apply plugin: 'com.palantir.failure-reports'
```

The plugin generates a `build/failure-reports/build-TEST.xml` file which encapsulates the errors during the CircleCI job into a JUnit format.

In situations where reporting from certain failed tasks should be ignored — such as for…

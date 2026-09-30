---
repo: "stackitcloud/stackit-sdk-java"
name: "stackit-sdk-java"
description: "The STACKIT SDK for Java"
readmeQualityOk: true
url: "https://github.com/stackitcloud/stackit-sdk-java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 21
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 37
recentReleases: 1
createdAt: "2025-07-21T11:43:19Z"
lastCommitAt: "2026-09-30T09:56:38Z"
lastReleaseAt: "2026-08-25T09:13:05Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 67
maintainers: ["dependabot[bot]", "stackit-pipeline", "rubenhoenle"]
openGraphImageUrl: "https://opengraph.githubassets.com/693e5842dfd8f0888ec6e6c792a34cdfdd732d824efb0314ba2ffe57724400a6/stackitcloud/stackit-sdk-java"
discussionCount: 1
---

<br>
<br>
<br>
</div>

# STACKIT SDK for Java (BETA)

This repository contains the STACKIT SDKs for Java.

## Getting started

Requires Java 8 or higher.

The release artifacts of the STACKIT Java SDK are available on [Maven Central](https://central.sonatype.com/namespace/cloud.stackit.sdk).
See below how to use them in your Java project.

### Maven

Add the dependencies for the services you want to interact with to your project's POM, e.g. `iaas` and `resourcemanager` (replace `<SDK_VERSION>` with the latest version of each SDK submdoule):

```xml
<dependency>
  <groupId>cloud.stackit.sdk</groupId>
  <artifactId>iaas</artifactId>
  <version><SDK_VERSION></version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>cloud.stackit.sdk</groupId>
  <artifactId>resourcemanager</artifactId>
  <version><SDK_VERSION></version>
  <scope>compile</scope>
</dependency>
```

### Gradle

Add the dependencies to your project's build file (replace `<SDK_VERSION>` with the latest version of each SDK submdoule):

```groovy
  repositories {
    mavenCentral()
  }

  dependencies {
     // add the dependencies of the services you want to interact with here,
     // e.g. "iaas" and…

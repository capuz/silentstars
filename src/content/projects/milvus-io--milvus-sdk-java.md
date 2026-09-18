---
repo: "milvus-io/milvus-sdk-java"
name: "milvus-sdk-java"
description: "Java SDK for Milvus."
readmeQualityOk: true
url: "https://github.com/milvus-io/milvus-sdk-java"
homepage: "https://milvus.io"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "sdk", "milvus", "anns", "vector"]
stars: 498
forks: 206
openIssues: 4
closedIssues: 363
watchers: 10
contributors: 71
recentReleases: 0
createdAt: "2019-10-08T12:15:26Z"
lastCommitAt: "2026-09-18T08:27:28Z"
lastReleaseAt: "2020-10-29T08:32:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["yhmo", "xiaofan-luan", "lentitude2tk"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad24b52bf9b538dc3f80ecdd2ba7105302040eb9e7210c99756f5ff37473870d/milvus-io/milvus-sdk-java"
---

# Milvus Java SDK

Java SDK for [Milvus](https://github.com/milvus-io/milvus). To contribute to this project, please read our [contribution guidelines](https://github.com/milvus-io/milvus/blob/master/CONTRIBUTING.md) first.

## Getting started

### Prerequisites

    -   Java 8 or higher
    -   Apache Maven or Gradle

The following table shows compatibilities between Milvus and Java SDK.

| Milvus version | Java SDK version |
|:--------------:|:----------------:|
|      2.0       |      2.0.4       |
|      2.1       |   2.1.0-beta4    |
| 2.2.0 ~ 2.2.8  |  2.2.0 ~ 2.2.5   |
|    >= 2.2.9    |  2.2.7 ~ 2.2.15  |
|     2.3.x      |      2.3.11      |
|     2.4.x      |      2.4.11      |
|     2.5.x      |      2.5.15      |
|     2.6.x      |      2.6.22      |
|     3.0.x      |      3.0.10      |

### Install Java SDK

You can use **Apache Maven** or **Gradle** add Milvus SDK to your project.

   - Apache Maven

       ```xml
        <dependency>
            <groupId>io.milvus</groupId>
            <artifactId>milvus-sdk-java</artifactId>
            <version>3.0.10</version>
        </dependency>
       ```

   - Gradle/Groovy

        ```groovy
        implementation…

---
repo: "AloisSeckar/demos-java"
name: "demos-java"
description: "From Java 11 to Java 26 - new features in practical examples"
readmeQualityOk: true
url: "https://github.com/AloisSeckar/demos-java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "java-11", "java-17", "java-18", "java-19", "java-20", "java-21", "java-22", "java-23", "demos"]
stars: 25
forks: 37
openIssues: 12
closedIssues: 242
watchers: 1
contributors: 31
recentReleases: 0
createdAt: "2021-12-10T09:50:18Z"
lastCommitAt: "2026-10-24T08:20:47Z"
lastReleaseAt: "2024-07-26T19:17:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 97
undervaluedScore: 73
maintainers: ["AloisSeckar", "Akhil-1527", "Shivansh-22866"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e1754194da8487cff361b83f0bc641c738d75b4a02fdcee8a44a2ff02bfac4c/AloisSeckar/demos-java"
---

# Java demos - explaining JEPs from Java 11 to Java 27

This application helps to show new features being introduced in Java versions until Java 27.

All relevant info is written down in comments inside sources.

## Prerequisites

This project requires **Java JDK 27** to run. Namely, [OpenJDK 27](https://jdk.java.net/27/) build is used for development and testing. For compiling, [Maven](https://maven.apache.org/index.html) is required (newest available version is advised).

## Usage

Checkout the project and explore the files in your favorite IDE. You may find some important context and information in the comments directly in the code.

To build the project locally:

```sh
mvn clean install
```

To run the project locally:

```sh
java --enable-preview --add-modules=jdk.incubator.vector -jar target/JavaDemos-27.0.jar
```

Using `--enable-preview` and `--add-modules` options is necessary to make the newest Java language features available.

**Note:** If you use `Maven` version < `3.9.12`, you would see warning about `Guice` library using deprecated `sun.misc.Unsafe` class when running Maven install. This was a [known issue](https://github.com/apache/maven/issues/10312) and was fixed…

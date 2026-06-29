---
repo: "pluggyai/pluggy-java"
name: "pluggy-java"
description: "Official Java SDK for Pluggy API"
url: "https://github.com/pluggyai/pluggy-java"
homepage: "https://docs.pluggy.ai"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["pluggy", "pluggy-api", "pluggy-sdk", "open-banking", "open", "banking"]
stars: 8
forks: 5
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2020-07-29T16:46:50Z"
lastCommitAt: "2026-06-29T07:22:18Z"
lastReleaseAt: "2020-12-09T06:38:08Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 71
maintainers: ["Gabrielpanga", "cernadasjuan", "FranDisalvo90"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a44443c2bb6d8e54cd3b75c6876004863ac86a2ced68249e464f6246d8855ba/pluggyai/pluggy-java"
---

# Pluggy Java

Java Bindings for the Pluggy API (https://docs.pluggy.ai/).

For available SDK API methods, check [PluggyApiService](./src/main/java/ai/pluggy/client/PluggyApiService.java) interface methods.

This implementation uses [Retrofit](https://github.com/square/retrofit) and [OkHttp](https://github.com/square/okhttp) libraries. For advanced use cases, please check their respectives APIs.

Also, for examples of use, please check the [integration tests](./src/test/java/ai/pluggy/client/integration) - practically all of the available endpoints have at least one test case.

### Install

Using Maven, add dependency to your pom.xml:

Currently, the package is available in Github Packages, so make sure to have the GH Packages server config with your Personal GH Access Token in your `.m2/settings.xml` file. Navigate to [this guide](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages#authenticating-to-github-packages) for more details.

```xml
<dependency>
  <groupId>ai.pluggy</groupId>
  <artifactId>pluggy-java</artifactId>
  <version>1.7.0</version>
</dependency>
```

### Basic Usage

```java…

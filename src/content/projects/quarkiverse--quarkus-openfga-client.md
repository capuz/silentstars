---
repo: "quarkiverse/quarkus-openfga-client"
name: "quarkus-openfga-client"
description: "Quarkus extension for OpenFGA support"
readmeQualityOk: true
url: "https://github.com/quarkiverse/quarkus-openfga-client"
homepage: "https://openfga.dev"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["quarkus-extension", "openfga", "zanzibar"]
stars: 13
forks: 10
openIssues: 2
closedIssues: 14
watchers: 3
contributors: 38
recentReleases: 0
createdAt: "2022-08-26T14:32:49Z"
lastCommitAt: "2026-08-14T05:15:06Z"
lastReleaseAt: "2024-02-24T06:10:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 80
maintainers: ["kdubb", "dependabot[bot]", "quarkiverse-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc55430bab0da637e74a4309911de0751e09a7059680b198f6b66ced85f96204/quarkiverse/quarkus-openfga-client"
---

# Quarkus OpenFGA Client

## Overview

The **Quarkus OpenFGA Client** extension provides a reactive client for accessing [OpenFGA](https://openfga.dev)
instances. Additionally, it is the client that powers the
[Quarkus Zanzibar - OpenFGA Connector](https://github.com/quarkiverse/quarkus-zanzibar#OpenFGA-Connector) to provide 
Find Grained Authorization for Quarkus applications.

## Documentation

The documentation for this extension can be found
[here](https://quarkiverse.github.io/quarkiverse-docs/quarkus-openfga-client/dev/index.html).

## Maintainer Note

The Dev Services implementation follows Quarkus's newer Dev Services lifecycle model (`owned()` / `discovered()` with
central lifecycle management). In shared-container discovery mode, initialization drift (for example tuple seed mismatch)
is warned and not auto-repaired; required store/model resolution remains strict.

## Installation

### Dependency

Add the `quarkus-openfga-client` extension to your Quarkus project in your `pom.xml` for Maven or `build.gradle(.kts)` for Gradle.

#### Maven

```xml
<dependency>
    <groupId>io.quarkiverse.openfga</groupId>
    <artifactId>quarkus-openfga-client</artifactId>…

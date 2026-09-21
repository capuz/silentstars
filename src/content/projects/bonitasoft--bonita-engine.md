---
repo: "bonitasoft/bonita-engine"
name: "bonita-engine"
description: "Deploy, execute, manage process-based applications made with Bonita studio or through Engine APIs"
readmeQualityOk: true
url: "https://github.com/bonitasoft/bonita-engine"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["bpm", "bpmn", "engine", "java", "bpm-engine", "subtree", "delivery-central", "lifecycle-platform", "published-partial"]
stars: 176
forks: 97
openIssues: 0
closedIssues: 0
watchers: 52
contributors: 41
recentReleases: 0
createdAt: "2013-07-02T13:06:27Z"
lastCommitAt: "2026-09-21T09:13:44Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 40
maintainers: ["bonita-ci", "akantcheff", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b8e9113f2d4978eb5599dbb0e89550ea08d4d2845a4d2a105d81a88991e6c9d/bonitasoft/bonita-engine"
---

# Bonita Engine

Deploy, execute, manage applications made with Bonita Studio.

## Using the Engine

The engine is included as part of either [Bonita Studio][downloads] or [Bonita Runtime][downloads], and executes the BPMN process logic.
The engine can however be included as a standalone dependency in a custom Application, as explained [here][standalone]

## Running the Project

### Prerequisites
>     Java JDK 17 (to compile), and 17 (to run)

This project bundles the [Gradle Wrapper][wrapper], so the `gradlew` script is available at
the project root.

### Compiling

Just run the following Gradle command:
```
./gradlew build
```

To be able to successfully build other Bonita components that use the Engine, run:
```
 ./gradlew publishToMavenLocal
```
Among other things, it also generates the javadoc used by Bonita Studio.

The command above runs all unit tests. To skip them, add the `-x test`
option.

### Version
Version is declared in gradle.properties

To override the current version on build, use the parameter **-Pversion** like:

```
 ./gradlew -Pversion=7.9.3 <tasks>
```

### Extra repositories

repositories can be added using comma separated list of repositories
using…

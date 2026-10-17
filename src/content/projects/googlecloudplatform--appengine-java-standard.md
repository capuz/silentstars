---
repo: "GoogleCloudPlatform/appengine-java-standard"
name: "appengine-java-standard"
description: "Google App Engine Standard Java runtime: Prod runtime, local devappserver, Cloud SDK Java components, GAE APIs, and GAE API emulators."
readmeQualityOk: true
url: "https://github.com/GoogleCloudPlatform/appengine-java-standard"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["java", "java-8", "serverless", "paas", "google", "google-cloud", "google-cloud-platform", "appengine", "appengine-java", "java8"]
stars: 223
forks: 63
openIssues: 3
closedIssues: 62
watchers: 35
contributors: 517
recentReleases: 0
createdAt: "2021-12-08T23:47:23Z"
lastCommitAt: "2026-10-17T07:56:58Z"
lastReleaseAt: "2023-04-11T22:00:57Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 41
maintainers: ["ludoch", "gae-java-bot", "renovate-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/436425883/c970c548-f864-498b-9d14-01a657b45060"
discussionCount: 2
---

# Google App Engine (GAE) standard environment source code for Java 17, Java 21, Java 25.

This repository contains the Java source code for [Google App Engine
standard environment][ae-docs], the production runtime, the App Engine APIs, and the local SDK.

[ae-docs]: https://cloud.google.com/appengine/docs/standard/java

## Prerequisites

### Use a JDK17 environment, so it can build the Java17 GAE runtime.

[jdk17](https://adoptium.net/), but using a JDK21 or JDK25 is also possible.

The shared codebase is also used for GAE Java 17, Java 21 and Java 25 build and test targets, using GitHub actions:

- [Java 17/21/25 Continuous Integration](https://github.com/GoogleCloudPlatform/appengine-java-standard/actions/workflows/maven.yml)

## Releases

This repository is the open source mirror of the Google App Engine Java source code that was used to produce Maven artifacts and runtime jars.
The open source release mechanism used with this GitHub repository is using the version starting at 3.0.x, compatible for Java 17 or above.

## Modules

This repository is organized into several Maven modules. For a detailed description of each module, its dependencies, and how they relate to each…

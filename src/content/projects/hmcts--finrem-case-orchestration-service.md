---
repo: "hmcts/finrem-case-orchestration-service"
name: "finrem-case-orchestration-service"
description: "Financial Remedy Case Orchestration Service"
readmeQualityOk: true
url: "https://github.com/hmcts/finrem-case-orchestration-service"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["jenkins-cft", "jenkins-cft-d-i"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 146
contributors: 82
recentReleases: 0
createdAt: "2018-08-12T21:29:09Z"
lastCommitAt: "2026-07-29T06:14:55Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 88
undervaluedScore: 40
maintainers: ["so99y", "renovate[bot]", "hamzahtahirhmcts"]
openGraphImageUrl: "https://opengraph.githubassets.com/818e4192aebb7d14838a22f9daceddfcebf856612e9ac964acd348d8790200b7/hmcts/finrem-case-orchestration-service"
---

# Financial Remedy Case Orchestration Service

## Overview
`finrem-case-orchestration` is a [Spring Boot](https://spring.io/projects/spring-boot) application and is responsible for handling all CCD callbacks
for Financial Remedy cases. It provides the business logic to enable Financial Remedy cases to be progressed through
the justice system.

The CCD definitions supported by this service can be found [here](https://github.com/hmcts/finrem-ccd-definitions).

</p>

## Prerequisites
- [JDK 21](https://openjdk.java.net/)

## Getting Started

### Building
The project uses [Gradle](https://gradle.org) as a build tool, but you don't have to install it locally since there is a
`./gradlew` wrapper script.

To build project execute the following command:

```bash
./gradlew build
```

### IntelliJ IDEA
To get the project to build in IntelliJ IDEA, you have to:

- Install the Lombok plugin: Settings -> Plugins
- Enable Annotation Processing: Settings -> Build, Execution, Deployment -> Compiler -> Annotation Processors

### Running
The service can be run with 
```bash
./gradlew bootRun
```
The service listens on port 9000 `http://localhost:9000`

However, in order to develop and test…

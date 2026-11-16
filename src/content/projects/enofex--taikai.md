---
repo: "enofex/taikai"
name: "taikai"
description: "Taikai is an extension of the popular ArchUnit library, offering a comprehensive suite of predefined rules and checks tailored for various technologies.🌟 Star if you like it!"
readmeQualityOk: true
url: "https://github.com/enofex/taikai"
homepage: "https://enofex.github.io/taikai"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["archunit", "testing", "architecture-tests", "java", "logging", "spring", "spring-boot", "junit6"]
stars: 283
forks: 16
openIssues: 0
closedIssues: 121
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2024-05-31T09:56:25Z"
lastCommitAt: "2026-11-16T04:30:01Z"
lastReleaseAt: "2024-06-14T12:40:29Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 41
maintainers: ["mnhock", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/808551634/59b86e13-0b17-4452-95b2-db4cd2c5339a"
fundingLinks: ["GITHUB:https://github.com/mnhock"]
---

height="150">

# Taikai

Taikai extends the capabilities of the popular ArchUnit library by offering a comprehensive suite of predefined rules tailored for various technologies. It simplifies the enforcement of architectural constraints and best practices in your codebase, ensuring consistency and quality across your projects.

## Maven Usage

Add Taikai as a dependency in your `pom.xml`:

```xml
<dependency>
  <groupId>com.enofex</groupId>
  <artifactId>taikai</artifactId>
  <version>${taikai.version}</version>
  <scope>test</scope>
</dependency>
```

Replace `${taikai.version}` with the appropriate version defined in your project. ArchUnit comes along transitively, so you do not need to declare it yourself.

## Gradle Usage

Add Taikai as a dependency in your `build.gradle` file:

```groovy
testImplementation "com.enofex:taikai:${taikaiVersion}"
```

Replace `${taikaiVersion}` with the appropriate version defined in your project. ArchUnit comes along transitively, so you do not need to declare it yourself.

## Kotlin/JVM

Use `com.enofex:taikai-kotlin` for Kotlin-aware architecture rules and a receiver DSL.
The original Java API also works from Kotlin tests. See the [Kotlin…

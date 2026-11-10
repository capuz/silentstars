---
repo: "allure-framework/allure-java"
name: "allure-java"
description: "Allure integrations for Java test frameworks"
readmeQualityOk: true
url: "https://github.com/allure-framework/allure-java"
language: "Java"
languages: ["Java"]
languagePcts: [94]
topics: ["allure", "reporting", "reporting-engine", "testng", "junit4", "junit5", "cucumber-jvm", "spock"]
stars: 391
forks: 246
openIssues: 27
closedIssues: 413
watchers: 32
contributors: 88
recentReleases: 0
createdAt: "2017-02-03T11:19:50Z"
lastCommitAt: "2026-11-10T11:38:19Z"
lastReleaseAt: "2018-07-19T07:38:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 40
maintainers: ["dependabot[bot]", "baev", "allure-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3de99fbfadd8a3a942b63b15606a68b6296ea6039acfc9194e3e152476b6526a/allure-framework/allure-java"
---

# Allure Java

Allure Java is the JVM integration family for [Allure Report](https://allurereport.org/). It helps Java, Groovy, Scala, Kotlin, and other JVM test suites write Allure result files that can be viewed in Allure Report.

## Requirements

- Allure Java 3.x targets Java 17 and newer.
- Use one framework adapter per test runtime, for example `allure-jupiter`, `allure-testng`, or `allure-cucumber7-jvm`.
- Prefer `allure-bom` to keep Allure module versions aligned.

## Quick Start

Gradle:

```kotlin
dependencies {
    testImplementation(platform("io.qameta.allure:allure-bom:<allure-version>"))
    testImplementation("io.qameta.allure:allure-jupiter")
}

tasks.test {
    useJUnitPlatform()
}
```

Maven:

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.qameta.allure</groupId>
            <artifactId>allure-bom</artifactId>
            <version>${allure.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>io.qameta.allure</groupId>
        <artifactId>allure-jupiter</artifactId>…

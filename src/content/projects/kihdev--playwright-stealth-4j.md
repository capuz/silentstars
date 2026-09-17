---
repo: "kihdev/playwright-stealth-4j"
name: "playwright-stealth-4j"
description: "Playwright-Stealth for JVM – A Kotlin-based library to enhance Playwright's stealth capabilities for Java, Kotlin, and Groovy."
readmeQualityOk: true
url: "https://github.com/kihdev/playwright-stealth-4j"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["playwright", "headless-browser", "java", "jvm", "kotlin", "stealth"]
stars: 21
forks: 3
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-03-18T07:04:27Z"
lastCommitAt: "2026-09-17T08:50:36Z"
lastReleaseAt: "2026-06-03T20:41:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 40
maintainers: ["dependabot[bot]", "fabriziofortino"]
openGraphImageUrl: "https://opengraph.githubassets.com/5075eeac19a56c6a2c80a6256aaf04cef7310f0968d2686f99c6b078405bdb16/kihdev/playwright-stealth-4j"
---

<h1 align="center">
</h1>

Playwright-Stealth for JVM is a Kotlin-based library that helps bypass bot detection mechanisms by applying various evasions to Playwright’s BrowserContext and/or Pages. Designed for seamless integration with Java, Kotlin, and Groovy, this library provides an intuitive API to enhance browser automation stealthiness.

JVM Porting of https://github.com/AtuboDad/playwright_stealth

## Features

- ✅ Stealth Enhancements – Modify navigator properties, WebGL fingerprints, and more.
- ✅ JVM Compatibility – Usable in any JVM-based project.
- ✅ Easy API – Simple integration methods.
- ✅ Customizable Configurations – Enable or disable specific evasions as needed.

## Installation

Playwright-Stealth for JVM is distributed via [Maven Central](https://central.sonatype.com/artifact/io.github.kihdev/playwright-stealth-4j). You can add it to your project using Gradle or Maven.

Add the dependency to your `build.gradle.kts`:

```kotlin
dependencies {
    implementation("io.github.kihdev:playwright-stealth-4j:1.1.3")
}
```

or to your `pom.xml`:

```xml
<dependency>
    <groupId>io.github.kihdev</groupId>
    <artifactId>playwright-stealth-4j</artifactId>…

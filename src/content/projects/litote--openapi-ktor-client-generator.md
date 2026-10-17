---
repo: "Litote/openapi-ktor-client-generator"
name: "openapi-ktor-client-generator"
description: "A Gradle plugin that transforms OpenAPI v3 specifications into production-ready Kotlin Ktor client code."
readmeQualityOk: true
url: "https://github.com/Litote/openapi-ktor-client-generator"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kmp", "kotlin", "ktor", "openapi"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-02-12T16:02:12Z"
lastCommitAt: "2026-10-17T07:59:37Z"
lastReleaseAt: "2026-10-09T08:44:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 58
maintainers: ["dependabot[bot]", "zigzago", "litote-release-please-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9fad84fcfc3c84f0b5df928678e1a2487f9bea501722728510083ff0b8b40e2/Litote/openapi-ktor-client-generator"
---

# OpenAPI Ktor Client Generator

A Gradle plugin that transforms OpenAPI v3.x specifications into production-ready Kotlin Ktor client code.

The generated client code is **fully KMP-compatible**.

You can customize the generated clients and models to match your project's specific needs.

## Prerequisites

- JDK 17+
- Gradle 9+

## Installation

Add the plugin to your `build.gradle.kts`:

```kotlin
plugins {
    id("org.litote.openapi.ktor.client.generator.gradle") version "<last version>"
}
```

Replace `<last version>` with the latest release: 

## Configuration

Configure the plugin in your `build.gradle.kts`:

```kotlin
apiClientGenerator {
    generators {
        create("openapi") { // registers a task named generateOpenapi
            outputDirectory = file("build/generated")
            openApiFile = file("src/main/openapi/openapi.json")
            basePackage = "com.example.api"
        }
        // you can declare multiple generators
    }
}
```

A full working example is available in [e2e/build.gradle.kts](https://github.com/Litote/openapi-ktor-client-generator/blob/HEAD/e2e/build.gradle.kts).

## Usage

Run the generation task directly:

```bash
./gradlew…

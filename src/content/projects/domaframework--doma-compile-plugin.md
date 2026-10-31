---
repo: "domaframework/doma-compile-plugin"
name: "doma-compile-plugin"
description: "Allows annotation processors to read Doma resources at compile-time"
readmeQualityOk: true
url: "https://github.com/domaframework/doma-compile-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [78]
topics: ["gradle-plugin", "doma", "java", "kotlin"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2020-04-02T13:23:51Z"
lastCommitAt: "2026-10-31T15:58:37Z"
lastReleaseAt: "2025-10-04T20:56:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 72
maintainers: ["renovate[bot]", "nakamura-to", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/283766f46b93d0d03872b74e484025837bc6d10b760630a4fe5ae38e518e2aba/domaframework/doma-compile-plugin"
---

Doma Compile Plugin
===================

The Doma Compile Plugin is a Gradle plugin that allows annotation processors to read Doma resources at compile-time.

The plugin supports both Java and Kotlin.

How to Use
----------

See the [Gradle Plugin Portal](https://plugins.gradle.org/plugin/org.domaframework.doma.compile).

What Does the Plugin Do?
-------------------------

The plugin is equivalent to the following Gradle Kotlin DSL script:

```kotlin
tasks {
    compileJava {
        val resourceDirs = sourceSets.getByName("main").resources.srcDirs
        options.sourcepath = files(resourceDirs)
        options.compilerArgs.add("-parameters")
    }
}

kapt {
    javacOptions {
        val resourceDirs = sourceSets.getByName("main").resources.srcDirs
        option("--source-path", resourceDirs.join(File.pathSeparator))
        option("-parameters")      
    }
}
```

In addition, the plugin declares Doma resources (`META-INF/**/*.sql`, `META-INF/**/*.script`, and `doma.compile.config`)
as inputs of the `compileJava` and `kaptKotlin` tasks.
As a result, editing only a SQL file reruns annotation processing, so the SQL is validated again.

Example build.gradle.kts…

---
repo: "springdoc/springdoc-openapi-gradle-plugin"
name: "springdoc-openapi-gradle-plugin"
description: "Library for OpenAPI 3 with spring-boot"
readmeQualityOk: true
url: "https://github.com/springdoc/springdoc-openapi-gradle-plugin"
homepage: "https://springdoc.org"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [85]
stars: 167
forks: 53
openIssues: 4
closedIssues: 111
watchers: 7
contributors: 24
recentReleases: 0
createdAt: "2020-01-29T02:50:57Z"
lastCommitAt: "2026-11-05T07:38:20Z"
lastReleaseAt: "2022-12-14T16:56:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 32
maintainers: ["bnasslahsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d436605bb99583a27d1e64c693f3a13a66003acd6c69c747fd2b11c75816f1d/springdoc/springdoc-openapi-gradle-plugin"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/springdoc-openapi"]
---

# Introducing springdoc-openapi-gradle-plugin

Gradle plugin for springdoc-openapi.

This plugin allows you to generate an OpenAPI 3 specification for a Spring Boot
application from a Gradle build.
Compatibility Notes
-------------------

The plugin is built on Gradle version 7.0.

Dependencies
------------
This plugin has a runtime dependency on the following plugins:

1. Spring Boot Gradle plugin - `org.springframework.boot`
2. Gradle process plugin - `com.github.psxpaul.execfork`

How To Use
----------

Gradle Groovy DSL

```groovy
plugins {
    id "org.springframework.boot" version "2.7.0"
    id "org.springdoc.openapi-gradle-plugin" version "1.9.0"
}
```

Gradle Kotlin DSL

```groovy
plugins {
    id("org.springframework.boot") version "2.7.0"
    id("org.springdoc.openapi-gradle-plugin") version "1.9.0"
}
```

Note: For latest versions of the plugins please check
the [Gradle Plugins portal](https://plugins.gradle.org/).

How the plugin works?
------------

When you add this plugin and its runtime dependency plugins to your build file, the plugin
creates the following tasks:

1. forkedSpringBootRun

2. generateOpenApiDocs

Running the task `generateOpenApiDocs` writes the…

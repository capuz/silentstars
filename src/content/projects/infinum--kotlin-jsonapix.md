---
repo: "infinum/kotlin-jsonapix"
name: "kotlin-jsonapix"
description: "JsonApiX is an Android, annotation processor library that was made to transform regular Kotlin classes into their JSON API representations, with the ability to serialize or deserialize them to or from strings."
readmeQualityOk: true
url: "https://github.com/infinum/kotlin-jsonapix"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["json", "kotlin", "json-api", "android", "open-source"]
stars: 45
forks: 10
openIssues: 10
closedIssues: 16
watchers: 9
contributors: 28
recentReleases: 0
createdAt: "2020-08-28T12:39:13Z"
lastCommitAt: "2026-09-07T08:34:49Z"
lastReleaseAt: "2026-01-14T14:09:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 40
maintainers: ["antunflas", "DrakslerT", "infinum-renovate-github-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6edf151f5e7ad7e2c5aa826b0fb359da29189b255dd2389671046cec4a861fc4/infinum/kotlin-jsonapix"
---

### <img align="left" src="logo.svg" width="48">
# JsonApiX

## Description

- JSON API X is an Android, annotation processor library with the intention of extending it to a KMP library in due time
- Implements a parser between Kotlin classes and JSON API specification strings in both directions
- Includes Retrofit module for easy API implementations

## Table of contents

* [Requirements](#requirements)
* [Getting started](#getting-started)
* [Usage](#usage)
* [JsonApiModel - Handling `links` and `meta` JSON API fields](#jsonapimodel---handling-links-and-meta-json-api-fields)
* [Retrofit Support](#retrofit-support)
* [List of libraries used in the project](#list-of-libraries-used-in-the-project)
* [Contributing](#contributing)
* [License](#license)
* [Credits](#credits)

## Requirements

The library uses KAPT for annotation processing.
The setup is different on a Kotlin or Java project.

## Getting started

Firstly, make sure to include `mavenCentral()` in your buildscript and add the serialization plugin:

```groovy
buildscript {
    repositories {
        mavenCentral()
    }

    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-serialization:$kotlinVersion")
    }…

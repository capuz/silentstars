---
repo: "turansky/kfc-plugins"
name: "kfc-plugins"
description: "Kotlin/JS Fast Configuration"
readmeQualityOk: true
url: "https://github.com/turansky/kfc-plugins"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kotlin", "kotlin-js", "gradle-plugin", "configuration"]
stars: 82
forks: 7
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-02-11T07:45:38Z"
lastCommitAt: "2026-09-11T08:14:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 48
maintainers: ["turansky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/239704753/456abe00-a361-11ea-9b2c-9a53ffa3bc82"
---

# Kotlin/JS Fast Configuration

## `latest-tools`

### Usage

#### `build.gradle.kts`

```kotlin
plugins {
    id("io.github.turansky.kfc.latest-tools") version "19.16.0"
}
```

### Use case

* Latest security updates
* Latest features

### Applied configuration

* Node, NPM - latest LTS
    * NPM - package manager (instead of Yarn)
    * `.kotlin-locks/` - directory for `package-lock.json` files
* Webpack (+cli, +dev-server) - latest
* Mocha - latest

## `application`

### Usage

#### `build.gradle.kts`

```kotlin
plugins {
    id("io.github.turansky.kfc.application") version "19.16.0"
}
```

### Use case

* You need fast bundler - like [Vite](https://vite.dev) ;)

### Platfoms

```properties
# gradle.properties

# default
kfc.platform=js

# WasmJS
kfc.platform=wasmjs

# Both (JS and WasmJS)
kfc.platform=web
```

### Defaults

* Kotlin/JS
    * Target `es2015`
    * Granularity
        * `per-file`
            * Default
            * Required for lazy modules, workers, worklets support
        * `whole-program`
            * Set `kfc.per.file=false` to activate
            * Recommended for isolated single file applications
* Kotlin/WasmJS
    * Target `es2015`

####…

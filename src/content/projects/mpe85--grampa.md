---
repo: "mpe85/grampa"
name: "grampa"
description: "A PEG parser library for Kotlin/JVM"
url: "https://github.com/mpe85/grampa"
homepage: "https://mpe85.github.io/grampa/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["java", "parser", "kotlin", "dsl", "kotlin-library", "kotlin-dsl"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-06-24T19:51:49Z"
lastCommitAt: "2026-06-26T21:30:34Z"
lastReleaseAt: "2023-04-15T21:29:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 51
maintainers: ["renovate[bot]", "mpe85"]
openGraphImageUrl: "https://opengraph.githubassets.com/0712883392190dac5f4018e27944386ad87b47416a970df928b22fb4ce1828c1/mpe85/grampa"
---

# Grampa

*A PEG parser library for Kotlin/JVM*

Grampa — short for **Gram**mar **pa**rser — is a library that allows you to define grammars completely in Kotlin source
code without any pre-processing phase (unlike other parser generators like ANTLR and JavaCC). Hence, there is no DSL to
be learned, the whole grammar definition is in one place (a Kotlin class) and can be changed and maintained very easily.
This library is inspired by [parboiled v1](https://github.com/sirthias/parboiled)
and [grappa](https://github.com/fge/grappa), but the focus is laid on simple and clean code without a lot of crazy and
complicated byte code manipulation.

## How to add to your build

Adding a dependency using Gradle (Groovy DSL):

```groovy
repositories {
    mavenCentral()
}
dependencies {
    implementation 'com.github.mpe85:grampa:1.6.1'
}
```

Adding a dependency using Gradle (Kotlin DSL):

```kotlin
repositories {
    mavenCentral()
}
dependencies {
    implementation("com.github.mpe85:grampa:1.6.1")
}
```

Adding a dependency using Maven:

```xml

<dependency>
    <groupId>com.github.mpe85</groupId>
    <artifactId>grampa</artifactId>
    <version>1.6.1</version>
</dependency>
```

Adding a…

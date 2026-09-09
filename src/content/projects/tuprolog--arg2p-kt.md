---
repo: "tuProlog/arg2p-kt"
name: "arg2p-kt"
description: "An implementation of the ASPIC+ framework for structured argumentation."
readmeQualityOk: true
url: "https://github.com/tuProlog/arg2p-kt"
homepage: "http://arg2p.apice.unibo.it"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [84]
stars: 14
forks: 1
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-01-26T14:05:53Z"
lastCommitAt: "2026-09-09T08:18:39Z"
lastReleaseAt: "2021-07-16T10:02:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 61
maintainers: ["renovate[bot]", "Gilbocc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2105b32bb57f3324524ce6a15ec9f4cbf9b8edc1c8ca099118b6f386dcdeb8e/tuProlog/arg2p-kt"
---

# Arg2P

Arg2P is an implementation of the ASPIC<sup>+</sup> framework for structured argumentation.
Built on top of the [tuProlog](https://apice.unibo.it/xwiki/bin/view/Tuprolog/) engine, it supports both JVM and Node environments.

More details are available on the [official wiki](https://tuprolog.github.io/arg2p-kt/).

---

## Getting Started

Arg2p is available as a [2P-Kt](https://github.com/tuProlog/2p-kt/) library.

#### JVM Library - Gradle

To import the Arg2p module (version `ARG2P_VERSION`) into your Kotlin-based Gradle project, declare the dependency in your `build.gradle(.kts)` file:
 ```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("it.unibo.tuprolog.argumentation:arg2p-jvm:ARG2P_VERSION")
}
 ```

#### Usage Example

```kotlin
import it.unibo.tuprolog.argumentation.core.Arg2pSolverFactory
import it.unibo.tuprolog.argumentation.core.libs.basic.FlagsBuilder

fun main() {
    val graph = Arg2pSolverFactory.evaluate("""
        f1 :=> d.
        f2 :=> -d.
    """.trimIndent(), FlagsBuilder()).first()

    graph.labellings.forEach {
        println("${it.label} : ${it.argument.conclusion}")
    }
}
``` 

For a complete example, check out…

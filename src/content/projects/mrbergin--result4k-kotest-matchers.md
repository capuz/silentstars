---
repo: "MrBergin/result4k-kotest-matchers"
name: "result4k-kotest-matchers"
description: "Kotest matchers for the Result4k library"
url: "https://github.com/MrBergin/result4k-kotest-matchers"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-03-21T17:00:18Z"
lastCommitAt: "2026-06-26T23:41:49Z"
lastReleaseAt: "2022-10-02T15:05:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 25
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81379d4e4494b7ff0547225528a849b96c6ccf2a2aa0ac68df0faa5343b3a223/MrBergin/result4k-kotest-matchers"
---

# result4k-kotest-matchers

Kotest matchers for the [Result4k](https://github.com/fork-handles/forkhandles/tree/trunk/result4k) library

## Version Matrix

| result4k-kotest-matchers | forkhandles | kotlin | java |
|:------------------------:|-------------|--------|------|
|          1.0.0           | 1.14.0.1    | 1.6.10 | 8    |
|        2022-09-22        | 2.2.0.0     | 1.7.10 | 17   |
| 2022.09.24.1..2022.10.1  | 2.2.0.0     | 1.7.10 | 8    |
|        2022.10.2         | 2.2.0.0     | 1.7.20 | 8    |

## Example Gradle usage:

```kotlin
repositories {
    mavenCentral()
}
dependencies {
    testImplementation("dev.mrbergin:result4k-kotest-matchers:2022.10.2")
}
```

## Some example usage:

```kotlin

fun exampleDivideByZero() {
    val result = divide(5, 0)

    //all of these would pass
    result.shouldBeFailure()
    result shouldBeFailure DivideByZeroFailure
    result shouldBeFailure { reason ->
        reason shouldBe DivideByZeroFailure
    }

    //but this will fail with the appropriate message
    result shouldBeSuccess 5 //Throws AssertionError like: Failure(DivideByZero) should be Success(5)
}

object DivideByZeroFailure

fun divide(dividend: Int, divisor: Int):…

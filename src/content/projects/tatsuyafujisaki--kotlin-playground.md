---
repo: "tatsuyafujisaki/kotlin-playground"
name: "kotlin-playground"
description: "Personal playground for Kotlin and Java"
readmeQualityOk: true
url: "https://github.com/tatsuyafujisaki/kotlin-playground"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
topics: ["kotlin", "playground"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2020-01-19T05:54:43Z"
lastCommitAt: "2026-08-20T04:09:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 33
maintainers: ["tatsuyafujisaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8f4df7db71f69fba6ae0f67f4a84be704b1608c21e9d17a0c07f3afd23ad12e/tatsuyafujisaki/kotlin-playground"
---

# Official style guides

* https://developer.android.com/kotlin/style-guide
* https://kotlinlang.org/docs/reference/coding-conventions.html

# Iterable

## How to iterate through an Iterable with index

```kotlin
val xs: List<Char> = listOf('a', 'b', 'c')
for ((i, x) in xs.withIndex()) println("$i $x")

// Alternatively
xs.forEachIndexed { i, x -> println("$i $x") }

// Alternatively
xs.mapIndexed { i, x -> "$i $x" }.forEach(::println)
```

## How to filter an Iterable by index

```kotlin
val xs: List<Char> = listOf('a', 'b', 'c').filterIndexed { i, _ -> i != 1 } // [a, c]
```

## How to iterate two iterables in parallel

```kotlin
// > The returned list has length of the shortest collection.
// https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/zip.html
fun <T> showZipExample(xs: List<T>, ys: List<T>) {
    xs.zip(ys).forEach { (x, y) ->
        println("$x$y")
    }
}

fun main() {
    showZipExample(listOf("A", "B"), listOf("a", "b")) // Aa Bb
    showZipExample(listOf("A", "B", "C"), listOf("a", "b")) // Aa Bb
    showZipExample(listOf("A", "B"), listOf("a", "b", "c")) // Aa Bb
}
```

# Array

## Type mapping between Kotlin and Java

 Kotlin      | Java…

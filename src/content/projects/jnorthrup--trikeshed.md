---
repo: "jnorthrup/TrikeShed"
name: "TrikeShed"
description: "my (++Bike)shed ideas "
readmeQualityOk: true
url: "https://github.com/jnorthrup/TrikeShed"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-10-02T18:18:54Z"
lastCommitAt: "2026-07-21T06:10:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 71
maintainers: ["jnorthrup"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cf64f44ea2464576c40df81db8db2ac0b911e81915e213831b7c2c3caa0c52d/jnorthrup/TrikeShed"
discussionCount: 0
---

++(Bike)Shed library

many things

## tldr 
this is the backbone of the json scanner and the fast-enough single-threaded database within trappings.
```kotlin 
interface Join<A, B> {    val a: A;   val b: B;
    operator fun component1(): A = a//destructuring 1&2
    operator fun component2(): B = b
    val pair: Pair<A, B> get() = Pair(a, b); ...}

typealias Twin<T> = Join<T, T>
typealias Series<T> = Join<Int, (Int) -> T>
val <T> Series<T>.size: Int get() = a
/** index operator for Series*/
operator fun <T> Series<T>.get(i: Int): T = b(i)
[...] dozens of mix-ins and specializations

typealias JsElement = Join<Twin<Int>, Series<Int>> //(openIdx j closeIdx) j commaIdxs
typealias JsIndex = Join<Twin<Int>, Series<Char>> //(element j src)
typealias JsContext = Join<JsElement, Series<Char>> //(element j src)
typealias JsPathElement = Either<String, Int>
typealias JsPath = Series<JsPathElement>

typealias RowVec = Series2<Any, () -> RecordMeta>
/** Cursors are a columnar abstraction composed of Series of Joined value+meta pairs (RecordMeta) */
typealias Cursor = Series<RowVec>
 ```

## if you are still reading... I've also written ideas that describe (some) goals and ideals of the…

---
repo: "jnorthrup/TrikeShed"
name: "TrikeShed"
description: "my (++Bike)shed ideas "
readmeQualityOk: true
url: "https://github.com/jnorthrup/TrikeShed"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [89]
stars: 7
forks: 2
openIssues: 7
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-10-02T18:18:54Z"
lastCommitAt: "2026-09-12T08:03:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 65
maintainers: ["jnorthrup"]
openGraphImageUrl: "https://opengraph.githubassets.com/e633a7160378bb1bc0dacb4c5dfee4374be98e5ff57512c627330cb7685c06d4/jnorthrup/TrikeShed"
discussionCount: 0
---

# TrikeShed  

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

---

## Run it in anger — please

The best thing you can do for this project is point it at your **real** mess and
tell us…

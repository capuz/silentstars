---
repo: "dankogai/kelvin"
name: "kelvin"
description: "Yet another  attempt to improve C"
readmeQualityOk: true
url: "https://github.com/dankogai/kelvin"
language: "Swift"
languages: ["Swift", "C"]
languagePcts: [54, 41]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-30T15:31:15Z"
lastCommitAt: "2026-11-13T05:43:40Z"
lastReleaseAt: "2026-11-10T10:33:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["dankogai"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3e2a23894f80c961008004e578a222d9a5acc9459c4c325b8bdf3597e7fc7dc/dankogai/kelvin"
---

# kelvin

Yet another attempt to improve C: a quiet alternative that starts from bare
C and changes it bit by bit, while staying 100% ABI compatible.

C is also the symbol for Celsius, and Kelvin is its natural successor. The
step size is identical, so everything you know about C carries over one to
one.

## Synopsis

```swift
#import <stdio.h> as C              // for printf()

let fizzbuzz(n:i64):String {
    var r = $""                     // String()
    if n % 3 == 0 { r += "fizz" }   // or $"fizz"
    if n % 5 == 0 { r += "buzz" }   // or $"buzz"
    if r.isEmpty  { r = String(n) } // .count == 0, as of any collection
    return r                        // moved out to the caller
}

let main(argc:i32, argv:[cstr]): i32 {
    let n = {                       // an anonymous function, called in place
        (k:i64):i64 in k <= 0 ? 30 : k
    }( argc < 2 ? 0 : i64(argv[1]) ) // i64(text) reads the number in it
    for i in 0...n {                // a closed range, 0 to n
        // println(`fizzbuzz(${i}) = ${fizzbuzz(i)}`) prints the same
        printf("fizzbuzz(%lld) = %s\n", i, fizzbuzz(i).cstr)
    }                               // each String freed after its printf…

---
repo: "xray-lang/xray"
name: "xray"
description: "Lightweight typed scripting with native concurrency"
readmeQualityOk: true
url: "https://github.com/xray-lang/xray"
homepage: "http://www.xray-lang.org"
language: "C"
languages: ["C"]
languagePcts: [72]
stars: 25
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-22T05:16:26Z"
lastCommitAt: "2026-11-09T11:11:21Z"
lastReleaseAt: "2026-07-20T04:46:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["xray-lang"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccecd5802bf77c752701c04e81c7544d169eb85fd82287d0d6500348cb4fd918/xray-lang/xray"
discussionCount: 2
---

[**English**](https://github.com/xray-lang/xray/blob/HEAD/README.md) | [中文](https://github.com/xray-lang/xray/blob/HEAD/README_CN.md)

# Xray

> A lightweight, statically typed language with explicit concurrency and both bytecode VM and native AOT execution.

```xray
fn count(xs: Array<i64>) -> i64 {
    var total = 0
    for (x in xs) {
        total += x
    }
    return total
}

var first = [1, 2, 3]
var second = [4, 5, 6]
var left = go count(copy first)
var right = go count(copy second)
var leftTotal = await left
var rightTotal = await right
print(leftTotal + rightTotal)  // 21
```

Xray is designed for scripts, services, and command-line programs that benefit from static types, built-in concurrency, and a direct path from source code to standalone executables. The implementation is written in C and includes the compiler, VM, runtime, standard library, native AOT backend, and development tools.

## Highlights

- **Static typing** — type inference, nullable types (`T?`), unions, generics, tuples, records, and control-flow narrowing, without a universal `any` type.
- **Explicit concurrency** — `go`, `await`, `Channel<T>`, `select`, `scope`, and ownership-aware transfer rules are…

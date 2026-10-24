---
repo: "boltlang/Bolt"
name: "Bolt"
description: "A programming language for rapid application development"
readmeQualityOk: true
url: "https://github.com/boltlang/Bolt"
homepage: "https://boltlang.github.io/Bolt/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["programming-language", "web-development", "productivity", "security", "scalability", "experimental"]
stars: 55
forks: 3
openIssues: 23
closedIssues: 54
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2020-04-17T19:08:58Z"
lastCommitAt: "2026-10-24T00:15:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 52
maintainers: ["samvv"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/256588188/f2c60900-a4fc-11ea-8b09-d2ba486396f6"
discussionCount: 0
---

# The Bolt Programming Language

> [!WARNING]
>
> This compiler is experimental and might have breaking changes with each
> update. It is not even guaranteed to compile something at this moment!

💬 Got some questions or feedback? Just open an issue and we'll be glad to respond!

```rust
fn fac(n: Int) -> Int {
    match n {
      0 | 1 => 1
      k => k * fac(k-1)
    }
}
```

Bolt is a new strictly-evaluated programming language in the making that aims
to make writing complex applications dead-simple. It ships with some
nice goodies, including:

 - **Static type checking** will catch hundreds of bugs before a single line of
   code is actually run.
 - **Garbage collected**, freeing you from worrying about memory management.
 - **Tuples, match-expressions and hygienic macros** make your code more
   readable and concise.
 - **Cross-platform standard library**, allowing you to write your code for the
   web and the desktop at the same time.

## Examples

Read the [tour of the language][tour] to learn more!

[tour]: https://github.com/boltlang/Bolt/blob/main/TOUR.md

## Core Principles

Bolt has a few fundamental design principles that we hope in time will make it
stand out from…

---
repo: "jdolan/Objectively"
name: "Objectively"
description: "Object oriented framework and core library for GNU C. Inspired by Objective-C. Zlib license."
url: "https://github.com/jdolan/Objectively"
homepage: "https://jdolan.github.io/Objectively/"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["c", "oop"]
stars: 41
forks: 12
openIssues: 2
closedIssues: 10
watchers: 6
contributors: 7
recentReleases: 10
createdAt: "2014-08-30T14:02:45Z"
lastCommitAt: "2026-06-26T23:41:32Z"
lastReleaseAt: "2026-06-10T03:09:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 61
maintainers: ["jdolan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6b7d3152e6531fe360b868b6c0c2cc00a1182961b3de92f8b9a2b8cd96875c6/jdolan/Objectively"
fundingLinks: ["GITHUB:https://github.com/jdolan"]
---

![Stable](https://img.shields.io/badge/maturity-stable-green.svg)

Objectively
===
Object oriented framework for C. 

Zlib [license](./COPYING).

About
---
Objectively is a cross-platform object oriented framework for the C programming language. 
Objectively provides rich OO semantics to enable object oriented programming directly in C.

Features
---
 * **Windows, macOS, iOS, Android & Linux** cross-platform support
 * **Single-parent inheritance** with _starts-with_ struct composition
 * **Class and instance methods** with strongly typed interfaces
 * **Automatic class loading** and lifecycle management
 * **Automatic memory management** with reference counting
 * **Unicode strings** with mutlibyte character support
 * **Collections** for Objects and C types: Array, Dictionary, List, Set and more
 * **Concurrency**: Lock, Condition, Thread, Operation, OperationQueue
 * **Networking**: URLSession, JSONContext & RESTClient

## API Documentation

Browse the [API Documentation](https://jdolan.github.io/Objectively/) to explore the library.

Adding Objectively to your project
---

1. Do the Autotools dance.

```shell
autoreconf -i
./configure
make -j8 && sudo make install
```

2.…

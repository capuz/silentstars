---
repo: "mulle-concurrent/mulle-aba"
name: "mulle-aba"
description: "🚮 A lock-free, cross-platform solution to the ABA problem"
readmeQualityOk: true
url: "https://github.com/mulle-concurrent/mulle-aba"
homepage: "https://mulle-objc.github.io"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["lock-free", "aba-problem", "aba", "memory-allocation", "c"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2016-10-15T15:57:25Z"
lastCommitAt: "2026-09-07T07:43:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 53
maintainers: ["mulle-nat"]
openGraphImageUrl: "https://opengraph.githubassets.com/54e00985a27434d8c84d671e70220b6e6cac94f491ece99dac9e39fe518003fa/mulle-concurrent/mulle-aba"
---

# mulle-aba

#### 🚮 A lock-free, cross-platform solution to the ABA problem

**mulle_aba** is a (pretty much) lock-free, cross-platform solution to the
[ABA problem](https://github.com/mulle-concurrent/mulle-aba/blob/HEAD//en.wikipedia.org/wiki/ABA_problem) written in C.

The ABA problem appears, when you are freeing memory, that is shared by
multiple threads and is not protected by a lock. As the subject matter is
fairly complicated, please read the [Wikipedia article](https://github.com/mulle-concurrent/mulle-aba/blob/HEAD//en.wikipedia.org/wiki/ABA_problem) and maybe [Preshing: An Introduction to Lock-Free Programming](http://preshing.com/20120612/an-introduction-to-lock-free-programming/) first and then checkout the following items:

* [mulle-aba: How it works 1](https://github.com/mulle-concurrent/mulle-aba/blob/HEAD//www.mulle-kybernetik.com/weblog/2015/mulle_aba_how_it_works_1.html)
* [mulle-aba: How it works 2](https://github.com/mulle-concurrent/mulle-aba/blob/HEAD//www.mulle-kybernetik.com/weblog/2015/mulle_aba_how_it_works_2.html)
* [mulle-aba: How it works…

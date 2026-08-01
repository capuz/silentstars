---
repo: "mackron/c89str"
name: "c89str"
description: "C89-compatible, single file, public domain string library."
readmeQualityOk: true
url: "https://github.com/mackron/c89str"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 33
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-12-18T21:48:48Z"
lastCommitAt: "2026-08-01T06:14:01Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 27
maintainers: ["mackron"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2eb4e82784b383f317a2c2bd5e016c98bbfed9ba51d89fc09a8f33d3733d4a8/mackron/c89str"
---

<h4 align="center">C89 compatible string library.</h4>

</p>

This is a single file library for making working with strings in C a bit easier.

Main features:
  - A suite of UTF-8, UTF-16 and UTF-32 conversion routines.
  - An API for dynamic strings (`c89str`).
  - Alternatives to some standard library functions.
  - A suite of miscellaneous APIs that might be useful.
  - An implementation of sprintf().

The APIs in this library are focused on flexibility and will favor verbosity over simplicity. All functions return
a result code. When a function could possibly need to do a memory allocation, a parameter will exist for a pointer
to allocation callbacks. If you're after a terser API you should consider looking elsewhere or build your own
wrapper.

I do not maintain version numbers for this library, nor do I guarantee API-compatibility. You need to look
elsewhere if this is an issue for you.

To define the implementation, do this in one source file:

    #define C89STR_IMPLEMENTATION
    #include "c89str.h"

See the top of c89str.h for more details about the library.

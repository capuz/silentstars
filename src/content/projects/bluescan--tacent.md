---
repo: "bluescan/tacent"
name: "tacent"
description: "A C++ library implementing linear algebra, text and file IO, UTF-N conversions, containers, image loading/saving, image quantization/filtering, command-line parsing, etc."
readmeQualityOk: true
url: "https://github.com/bluescan/tacent"
language: "C++"
languages: ["C++", "C"]
languagePcts: [73, 25]
topics: ["math", "cmake", "image"]
stars: 70
forks: 8
openIssues: 2
closedIssues: 10
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2017-01-19T23:17:59Z"
lastCommitAt: "2026-11-07T10:36:17Z"
lastReleaseAt: "2021-07-21T07:39:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 49
maintainers: ["bluescan"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a375dadc4368418650cd6c34387edd063f6194dffa04e87ee61950bc70b109/bluescan/tacent"
discussionCount: 0
---

# Tacent
Tacent is a C++ library designed to be the foundation of a game engine or other interactive project. Originally the code was the backbone of the Tactile 3D project.

Modern CMake (target-based) is used to generate the build files. Generators for makefiles, ninja, NMake, and Visual Studio solutions have been tested. Tacent may be compiled with gcc, clang, or msvc.

[Tacent Homepage](https://bluescan.github.io/tacent)

### Overview

Tacent is divided into a number of separate modules. Each module is a collection of related source files. Some modules depend on others.

* __Foundation__
The base set of classes, functions, and types. Includes container types (lists, arrays, priority queue, map/dictionary, ring buffer), a fast memory pool, big integer types, bitfields, units, a string class, UTF conversion functions. Depends on nothing but platform libs.

* __Math__
Vectors, matrices, quaternions, projections, linear algebra, hash functions, random number generation, splines, analytic functions, geometric primitives, mathematical constants, and colour space conversions. Depends on Foundation.

* __System__
File IO, path and file string parsing functions, chunk-based binary…

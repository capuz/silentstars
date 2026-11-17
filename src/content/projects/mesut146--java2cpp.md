---
repo: "mesut146/java2cpp"
name: "java2cpp"
description: "java to c++ converter as command line software"
readmeQualityOk: true
url: "https://github.com/mesut146/java2cpp"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["java", "converter", "cpp"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-06-14T17:17:36Z"
lastCommitAt: "2026-11-17T14:33:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 44
maintainers: ["mesut146"]
openGraphImageUrl: "https://opengraph.githubassets.com/21379befa0d9c0050446b834b68f13a3d53667dda871fa622b02c12b5704c496/mesut146/java2cpp"
---

# java2cpp

A Java → C++ source-to-source transpiler.

It reads a directory of `.java` files, parses them with the Eclipse JDT parser (with binding resolution), and writes a compilable starting point: C++ headers, sources, forward declarations, library stubs and a `CMakeLists.txt`. The goal is output that needs as few manual fixes as possible — it is **not** a JVM or a complete Java runtime.

> Generated code is a scaffold, not a finished port. Expect to review `log.txt` and adjust the result by hand.

## How it works

Conversion runs in two passes over all discovered sources:

1. **Pre-pass** (`PreVisitor`) builds a global class model — types, methods, fields, inheritance, inner-class relationships — so forward references and library classes can be resolved before any code is emitted.
2. **Generation pass** writes declarations (`HeaderWriter`) and method bodies (`SourceVisitor`).

The C++ generator emits C++ text straight into a `Code` buffer.

## Features

- **Forward declarations** — a single `common.h` declares all source and library classes.
- **Library headers** — referenced classes on the classpath get stub headers under `lib/` so you can implement the missing parts…

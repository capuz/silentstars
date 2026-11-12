---
repo: "medz/dartc"
name: "dartc"
description: "A native Dart compiler written in Dart."
readmeQualityOk: true
url: "https://github.com/medz/dartc"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-10-26T02:23:45Z"
lastCommitAt: "2026-11-12T05:42:03Z"
lastReleaseAt: "2026-10-30T17:17:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["medz"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae4da4f955194a15a76da3e1e57671e569864955d0c2e82e0e2361715c6b97d7/medz/dartc"
---

# dartc

### Dart in. Native code out.

A native Dart compiler written in Dart.<br>
Build standalone programs and C-compatible libraries.

[Get started](#get-started) · [Examples](#your-first-program) · [Platforms](#supported-platforms) · [Documentation](#documentation)

---

## Write Dart. Build native.

Turn supported Dart code into a program you can distribute or a library another application can call.

| Build a program | Export a function | Choose an output |
| --- | --- | --- |
| Produce a standalone executable. | Expose a C-compatible interface with a generated C/C++ header. | Create executables, object files, static libraries or shared libraries. |

The compiler, assembler and linker are implemented in Dart. Building native outputs does not require a separate C compiler or linker.

Dart language and standard-library coverage is incomplete. Check the [language support guide](https://github.com/medz/dartc/blob/HEAD/specs/README.md) before bringing an existing application.

## Get started

### Install dartc

Download the compiler for your machine from [Releases](https://github.com/medz/dartc/releases/latest).

1. Extract the archive.
2. Add its `bin` directory to your `PATH`,…

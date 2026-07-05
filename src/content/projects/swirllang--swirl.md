---
repo: "SwirlLang/Swirl"
name: "Swirl"
description: "An LLVM-based systems programming language for learning and experimentation."
readmeQualityOk: true
url: "https://github.com/SwirlLang/Swirl"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["programming-language", "language", "swirl"]
stars: 17
forks: 10
openIssues: 0
closedIssues: 9
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2021-10-28T16:20:26Z"
lastCommitAt: "2026-07-05T21:00:29Z"
lastReleaseAt: "2025-11-10T15:49:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 70
maintainers: ["nullptr0x", "MrinmoyHaloi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/422274829/8acd7f1e-adb1-4fe2-af00-840ab1d662d7"
discussionCount: 1
---

# Swirl Programming Language
Swirl is a statically and strongly-typed, systems programming language, leveraging the LLVM Infrastructure for optimal native code generation.

[Website](https://swirl-lang.netlify.app) |
[Docs](https://swirl-lang.netlify.app/docs) |
[Contributing](https://github.com/SwirlLang/Swirl/blob/HEAD/CONTRIBUTING.md)  

</div>

## Compiler Architecture Overview
The following text is a brief on the compilation pipeline of the Compiler (details are skipped):
- [`CompilerInst`](https://github.com/SwirlLang/Swirl/blob/main/compiler/include/CompilerInst.h): the entry point, this class represents a single contained instantiation of the Compiler, owning resources which are shared across all aspects of a project's compilation.  

- [`Module`](https://github.com/SwirlLang/Swirl/blob/main/compiler/include/modules/Module.h): The compiler implements a typical module system, each Swirl file is treated as a "module" which can control the visibility of the symbols it owns (or imports) to other modules (via the `export` keyword). All modules are owned and managed by an instance of…

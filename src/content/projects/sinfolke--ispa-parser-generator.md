---
repo: "Sinfolke/ispa-parser-generator"
name: "ispa-parser-generator"
description: "Powerful parser generator"
readmeQualityOk: true
url: "https://github.com/Sinfolke/ispa-parser-generator"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["codegenerator", "generator", "parser", "parser-generator", "grammar", "compilers"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2024-03-05T14:47:51Z"
lastCommitAt: "2026-10-25T09:00:57Z"
lastReleaseAt: "2026-10-24T18:48:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 79
maintainers: ["Sinfolke", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b7e87b18d11ec76f99f9ee5275cbd57322bf87a8f8f0a4765d37a59adb3fd45/Sinfolke/ispa-parser-generator"
discussionCount: 1
---

# ISPA Parser Generator

**ISPA** is a static parser and lexer generator written from scratch in modern C++ (C++20/C++23). You describe a grammar once; ISPA compiles it ahead of time into a standalone, dependency-free parser that builds a fully typed AST for you.

It is built around one idea: **easy to use, without giving up performance, extensibility, or features.** In benchmarks it is about 12x faster than ANTLR; see [Performance](#-performance).

---

## Why ISPA

1. **Static generation.** Everything is computed at generation time. The grammar is compiled to DFA tables and plain code. Nothing is generated, interpreted, or compiled at runtime.
2. **No dependencies.** A generated parser is self-contained. Drop the output into your project and build it; there is no runtime library to link or install.
3. **Multi-language output.** Code generation goes through **LangAPI**, a language-agnostic IR, so the same grammar can target different languages. **C++17** is the only emitter today; Python is next.
4. **Extensible grammar descriptions.** Rules describe language structure and connect to generated parser code.
5. **Scales from trivial to very large projects.** Incremental compilation…

---
repo: "CppCXY/cpp_ls"
name: "cpp_ls"
description: "A C, C++ language server written in Rust"
readmeQualityOk: true
url: "https://github.com/CppCXY/cpp_ls"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cpp", "language-server", "rust"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2025-05-30T08:25:58Z"
lastCommitAt: "2026-11-20T11:55:49Z"
lastReleaseAt: "2026-11-10T13:02:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 80
maintainers: ["CppCXY"]
openGraphImageUrl: "https://opengraph.githubassets.com/f76264f374a4b984b7cbc4b8f81f75e9dd03c85c95976df7cdf989a6f65081d5/CppCXY/cpp_ls"
---

# cpp_ls

A C, C++ and CUDA language server written from scratch in Rust: the parser, the preprocessor, the index, the semantic
layer and the LSP server are all in this repository. **No clangd, no libclang, no compiler daemon — and no compilation
database needed to start.** One is used when the project has one: `compile_commands.json` (any build system) or CMake
3.31's `build_database.json`, discovered beside the workspace root or in a build directory; see
[`docs/configuration.md`](https://github.com/CppCXY/cpp_ls/blob/HEAD/docs/configuration.md#the-two-database-formats).

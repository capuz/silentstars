---
repo: "jinzhongjia/zig-analyzer"
name: "zig-analyzer"
description: "A language server (LSP) for Zig, built on an incremental query engine."
readmeQualityOk: true
url: "https://github.com/jinzhongjia/zig-analyzer"
homepage: "https://zig-analyzer.dev"
language: "Zig"
languages: ["Zig"]
languagePcts: [94]
topics: ["lsp", "lsp-server", "zig", "zig-lang", "zig-package"]
stars: 10
forks: 0
openIssues: 12
closedIssues: 254
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-12T06:51:25Z"
lastCommitAt: "2026-11-23T10:15:45Z"
lastReleaseAt: "2026-11-22T15:21:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 61
maintainers: ["jinzhongjia"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1415194067/41c1ed88-ec21-4ed5-8c7d-bd20ac214972"
---

# zig-analyzer

English | [简体中文](https://github.com/jinzhongjia/zig-analyzer/blob/HEAD/README.zh-CN.md)

A language server (LSP) for Zig, built on an incremental query engine. Website: [zig-analyzer.dev](https://zig-analyzer.dev).

## Features

- **Diagnostics**: errors come only from Zig itself, using in-process AstGen while typing and `zig build` on save. Inactive code can optionally be marked.
- **Comptime evaluation**: generics and type constructors are evaluated, and generic function bodies are analyzed with the instances from their call sites.
- **Build system integration**: the project model comes from the official build system protocol. Files without `build.zig` use single-file mode.
- **Navigation**: goto definition / declaration / type definition, find references, document highlight, document and workspace symbols.
- **Editing**: completion with auto-import and snippets, hover, signature help, inlay hints, and semantic tokens.
- **Refactoring**: rename and code actions for unused names, parameters, and captures, `var` to `const`, missing switch prongs and struct fields, extracting constants, converting string literals, and organizing imports.

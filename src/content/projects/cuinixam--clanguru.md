---
repo: "cuinixam/clanguru"
name: "clanguru"
description: "C language utils and tools based on the clang module."
readmeQualityOk: true
url: "https://github.com/cuinixam/clanguru"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 14
forks: 6
openIssues: 4
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-03-31T09:29:17Z"
lastCommitAt: "2026-10-27T12:39:52Z"
lastReleaseAt: "2025-08-25T19:06:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 60
undervaluedScore: 47
maintainers: ["cuinixam", "code-steadfast", "ubmarco"]
openGraphImageUrl: "https://opengraph.githubassets.com/926d4eaec43c1aac6f5a5bf2736ac6b9aa1e49e63e64768d28b03cd80d71decf/cuinixam/clanguru"
---

C language utils and tools based on the `clang` and `binutils` modules.

## Installation

Install clanguru using `pipx` for isolated installation:

```shell
pipx install clanguru
```

## Usage

Clanguru provides four main commands for C/C++ code analysis and utility operations:

- **Documentation**: Generate (minimal) documentation for C/C++ sources functions and classes.
  It supports multiple output formats including Myst Markdown, standard Markdown, and RestructuredText.
- **Testing**: Create mock objects for unit testing C functions
- **Analysis**: Understand object file dependencies and symbol usage. It can generate HTML and Excel reports.

Check the help message for more details:

```shell
clanguru --help

 Usage: clanguru [OPTIONS] COMMAND [ARGS]...

 C language utils and tools based on the libclang module.

╭─ Options ────────────────────────────────────────────────────────────╮
│ --version  -v        Show version and exit.                          │
│ --help               Show this message and exit.                     │
╰──────────────────────────────────────────────────────────────────────╯
╭─ Commands ───────────────────────────────────────────────────────────╮
│ docs…

---
repo: "MichalStrehovsky/chibil"
name: "chibil"
description: "C compiler for .NET"
readmeQualityOk: true
url: "https://github.com/MichalStrehovsky/chibil"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 99
forks: 5
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-02T07:41:06Z"
lastCommitAt: "2026-10-18T08:16:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 7
maintainers: ["MichalStrehovsky", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a965c458740878e2bfef12f222ab9002d3ff6e081767fee165510e80cd73a63/MichalStrehovsky/chibil"
---

# Chibil C compiler

## What is chibil

Chibil is a C compiler based on [chibicc](https://github.com/rui314/chibicc) rewritten in C# and updated to target .NET IL (MSIL).

It is complete enough to run [DOOM](https://github.com/MichalStrehovsky/chibil/blob/HEAD/samples/doom) (PureDOOM).

## Pipeline

Chibil takes C source files and generates COFF OBJ files. These OBJ files are binary-compatible with OBJ files produced by the MSVC compiler in `/clr` mode. link.exe from Visual Studio is used to link the object files together and produce final executables. One can actually mix and match C++/CLI and chibil-produced object files.

Chibil will probably have its own linker later, if for no other reason, just so we don't need Windows.

## Debugging

Line numbers and locals work as expected. You can step through the C code in a .NET debugger.

## Standard C library

There isn't one.

There is a minimal stub of a C runtime library in the [crt](https://github.com/MichalStrehovsky/chibil/blob/HEAD/crt) directory. This provides a runnable `main` that takes `string[]` of arguments and dispatches to the C-standard `main` with `argc` and `argv`. The produced assembly is converted to a COFF object…

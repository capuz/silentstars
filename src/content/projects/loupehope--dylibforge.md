---
repo: "Loupehope/DylibForge"
name: "DylibForge"
description: "A macOS CLI tool for relinking static Apple ar archives and frameworks into dynamic Mach-O binaries."
readmeQualityOk: true
url: "https://github.com/Loupehope/DylibForge"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["apple-platforms", "clang", "developer-tools", "dylib", "dynamic-library", "ios", "linker", "mach-o", "static-framework"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-07-10T14:01:32Z"
lastCommitAt: "2026-07-30T06:06:58Z"
lastReleaseAt: "2026-07-30T05:35:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 22
maintainers: ["Loupehope"]
openGraphImageUrl: "https://opengraph.githubassets.com/df8340bce3c870d9a53ddc9327ac8ae5ad7d7ebe24fd2ce56777d8bba24cf89c/Loupehope/DylibForge"
---

# DylibForge

DylibForge converts static Apple `ar` archives into dynamic Mach-O libraries. It has two command-line tools built on the same relinking engine:

- [dylib-forge-xc](#convert-an-xcframework) converts a complete XCFramework.
- [dylib-forge](#convert-one-archive-or-framework-binary) converts one archive or one static framework binary.

Download the latest binaries from [GitHub Releases](https://github.com/Loupehope/DylibForge/releases/latest).

> DylibForge mechanically transforms supplied binary artifacts for relinking and, for XCFramework inputs, repackaging. It parses binary formats and linker metadata only as required for those transformations. It does not decompile binaries, reconstruct source code, or attempt to infer, evaluate, or model a program's logic, behavior, purpose, or functionality.

## Convert an XCFramework

Use `dylib-forge-xc` to convert a complete XCFramework. The output path may be the same as the input path.

```bash
dylib-forge-xc ./Library.xcframework \
  --output ./LibraryDynamic.xcframework
```

| Argument | Required | Meaning |
| --- | --- | --- |
| `<input>` | Yes | Source `.xcframework` path. |
| `--output <path>` | Yes | Converted…

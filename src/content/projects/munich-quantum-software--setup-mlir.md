---
repo: "munich-quantum-software/setup-mlir"
name: "setup-mlir"
description: "Set up MLIR in your GitHub Actions workflow"
readmeQualityOk: true
url: "https://github.com/munich-quantum-software/setup-mlir"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 5
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-09-24T21:33:27Z"
lastCommitAt: "2026-09-19T02:46:09Z"
lastReleaseAt: "2026-08-12T13:24:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 81
maintainers: ["renovate[bot]", "denialhaag", "mqt-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2fe467da96f3aacd6f48a5f227dd2165b588c5ba4524123914b25ea739fd979/munich-quantum-software/setup-mlir"
discussionCount: 0
---

# setup-mlir

This repository provides an action for setting up MLIR in GitHub Actions and
installation scripts for setting up MLIR locally. Only Release builds are
supported. macOS requires Apple silicon (`arm64`).

The MLIR binaries are built and distributed in the
[`portable-mlir-toolchain`](https://github.com/munich-quantum-software/portable-mlir-toolchain/)
repository.

List of available LLVM versions:

- `21.1.8`
- `22.1.0`
- `22.1.1`
- `22.1.2`
- `22.1.3`
- `22.1.4`
- `22.1.5`
- `22.1.6`
- `22.1.7`
- `22.1.8`
- `23.1.0`
- `23.1.1`

List of available LLVM commit hashes:

- `8f264586d7521b0e305ca7bb78825aa3382ffef7`
- `113f01aa82d055410f22a9d03b3468fa68600589`
- `f8cb7987c64dcffb72414a40560055cb717dbf74`

For more information on the available LLVM versions and commit hashes, see
[`version-manifest.json`](https://github.com/munich-quantum-software/setup-mlir/blob/HEAD/version-manifest.json).

## GitHub Actions

```yaml
- name: Set up MLIR
  uses: munich-quantum-software/setup-mlir@v1.4.2
  with:
    llvm-version: 22.1.8
```

This extracts a pre-built MLIR installation, adds the binaries to `$PATH`, and
defines `$LLVM_DIR` and `$MLIR_DIR`.

## Installation Scripts

If you want…

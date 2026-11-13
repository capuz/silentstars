---
repo: "bitcoinfuzz/bitcoinfuzz"
name: "bitcoinfuzz"
description: "Differential Fuzzing of Bitcoin protocol implementations and libraries"
readmeQualityOk: true
url: "https://github.com/bitcoinfuzz/bitcoinfuzz"
language: "C++"
languages: ["C++"]
languagePcts: [64]
topics: ["bitcoin", "fuzzing"]
stars: 95
forks: 96
openIssues: 31
closedIssues: 112
watchers: 8
contributors: 43
recentReleases: 0
createdAt: "2023-07-29T15:15:40Z"
lastCommitAt: "2026-11-13T18:33:51Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 54
maintainers: ["brunoerg", "erickcestari", "KY-U"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b03d30d25c701bfff67b6702bcb67bb9be087896e4c0e4d1136fe7620579d0f/bitcoinfuzz/bitcoinfuzz"
discussionCount: 1
---

# bitcoinfuzz

Differential Fuzzing of Bitcoin implementations and libraries.
Note this project is a WIP and might be not stable.

Each module is a thin adapter over a library's public API: the harness compares
the libraries and does not reimplement them. Read
[CONTRIBUTING.md](https://github.com/bitcoinfuzz/bitcoinfuzz/blob/HEAD/CONTRIBUTING.md) before opening a PR.

# Installation

## Platform Support

*bitcoinfuzz is developed and supported on Linux only.*

### MacOS or Windows Users:

We recommend using Docker to run bitcoinfuzz if you're on macOS or Windows. This provides the most reliable fuzzing experience with full toolchain support.

## Dependencies

### llvm toolset (clang and libfuzzer)

* To support the flags used in some modules `-fsanitize=address,fuzzer -std=c++20` the minimum clang version required is 10.0

* For ubuntu/debian it can be installed using the package manager:
    ```
    sudo apt install clang lld llvm-dev
    ```

* To install it from source check [clang_get_started](https://clang.llvm.org/get_started.html). You must build it with this cmake option: `-DLLVM_ENABLE_PROJECTS="clang;lld;compiler-rt"`

# Running

The fuzzer has a lot of dependencies from…

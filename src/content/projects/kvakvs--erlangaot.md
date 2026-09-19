---
repo: "kvakvs/ErlangAoT"
name: "ErlangAoT"
description: "An ahead-of-time compiler from Erlang (intermediate language) to LLVM IR and a runtime library for linking against it"
readmeQualityOk: true
url: "https://github.com/kvakvs/ErlangAoT"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-08-25T10:15:46Z"
lastCommitAt: "2026-09-19T01:25:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 52
maintainers: ["kvakvs"]
openGraphImageUrl: "https://opengraph.githubassets.com/6053a206ae7e0536801648a452b65386e2ea16b3013fb5a63da7c19066f01c12/kvakvs/ErlangAoT"
---

# ErlangAoT

A C++ ahead-of-time compiler project for Erlang/OTP 29, with a separate C++ runtime.
The compiler implements OTP 29.1 preprocessing: macros, conditional compilation,
includes, contextual macros, feature configuration, and diagnostic directives.
`--preprocess-check` validates modules without an Erlang installation or output files.
Full Erlang parsing, code generation, and runtime behavior remain unimplemented.

## Build on macOS and Linux

On macOS, install Apple's Command Line Tools (`xcode-select --install`). On Linux,
install a C++23-capable compiler and GNU Make. Both need CMake 3.28 or newer.
C++23 is the default. No LLVM development libraries or Erlang installation are
required for this scaffold.

Compiler builds require Boost.Parser and Boost.Multiprecision from Boost 1.90 or
newer. On macOS, an installed Homebrew Boost is discovered automatically:

```sh
brew install boost
cmake --preset debug
```

CMake searches normal installation prefixes (including `CMAKE_PREFIX_PATH`) and
`brew --prefix boost` on macOS. Set `ERLANG_AOT_BOOST_ROOT` to select a full Boost
source tree or installation prefix; `ERLANG_AOT_BOOST_PARSER_ROOT` can select a
separate parser…

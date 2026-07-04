---
repo: "BasedInc/libhat"
name: "libhat"
description: "A high-performance, modern, C++20 library designed around game hacking"
readmeQualityOk: true
url: "https://github.com/BasedInc/libhat"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 137
forks: 21
openIssues: 6
closedIssues: 9
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2022-09-28T20:42:52Z"
lastCommitAt: "2026-07-04T22:22:27Z"
lastReleaseAt: "2025-11-11T01:42:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["ZeroMemes"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a66edb8e68e4ba2c6d398aca411f538e44002e583ab936e9410ffa6ea06dce9/BasedInc/libhat"
---

# libhat
A modern, high-performance library for C++20 designed around game hacking

## Feature overview
- Vectorized scanning for byte patterns
  - SSE 4.1 and AVX2 on x86/x64
  - AVX-512 on x64
  - Neon on ARM/ARM64
- RAII memory protector
- Convenience wrappers over OS APIs
- Language bindings (C, C#, Java)
- Full Windows support
- Partial (WIP) Linux, macOS, and Android support

## Versioning
This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html). Any declaration that
is within a `detail` or `experimental` namespace is not considered part of the public API, and usage
may break at any time without the MAJOR version number being incremented.

## Integration

The best supported way to use libhat is via [FetchContent](https://cmake.org/cmake/help/latest/module/FetchContent.html)
or [CPM](https://github.com/cpm-cmake/CPM.cmake) in a CMake project:

```cmake
FetchContent_Declare(
    libhat
    GIT_REPOSITORY https://github.com/BasedInc/libhat.git
    GIT_TAG        v0.10.0
)
FetchContent_MakeAvailable(libhat)

target_link_libraries(my_target libhat::libhat)
```

```cmake
CPMAddPackage("gh:BasedInc/libhat#v0.10.0")

target_link_libraries(my_target…

---
repo: "dawn-winery/dwhbll"
name: "dwhbll"
description: "Dawn Winery Huge Bloated Library"
readmeQualityOk: true
url: "https://github.com/dawn-winery/dwhbll"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 5
forks: 4
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-06-03T16:44:12Z"
lastCommitAt: "2026-09-22T08:45:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 76
maintainers: ["Teapot4195", "danebidev", "dy-tea"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b6606443a3127deb2cc2aca88d339103704ee76e7545e46104c1c594462846b/dawn-winery/dwhbll"
---

# dwhbll
> aka boost 0.5

Collection of the most random library components ever to come out of the Dawn Winery.

General list of library components:
- Simple logging library with log filtering (`console/logging.h`)
- Debugging utilities (`debug/{debug,panic}.h`)
  - Rust-like `panic()` that prints stacktrace.
  - `ASSERT` macro that panics on fail (and does nothing in release).
  - `unreachable` (that panics in debug builds) and `todo` functions.
- stl_ext sub-library with a bunch of useful things (`stl_ext/*`)
  - clones of Rust's `Result` and `Option` (`stl_ext/{result,option}.h`)
    - Including sugar for `Ok()`, `Err()`, `Some()`, and `None()`.
    - Check `src/dwhbll/concurrency/coroutine/wrappers/sycall_wrappers.cpp` for usage.
    - `TRY` macros that behave similarly to Rust's `?` operator (`stl_ext/try.h`).
- Opinionated sanify library (`sanify/*`)
  - `u64`, `i64`, `u32`, etc. typedefs
  - Optional `using namespace` for some long namespace names.
- Entire WIP C++26/29 compiler in dwcc-dev branch (`lang/*`)
- Async runtime (WIP, C++20 coroutine, io_uring backend)
- Usable memory pool (needs work)
- Unicode library components, more are implemented on an as necessary basis,…

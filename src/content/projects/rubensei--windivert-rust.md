---
repo: "Rubensei/windivert-rust"
name: "windivert-rust"
description: "Rust bindings and wrapper around WinDivert user library"
readmeQualityOk: true
url: "https://github.com/Rubensei/windivert-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ffi", "rust", "windivert"]
stars: 74
forks: 24
openIssues: 0
closedIssues: 17
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2021-01-22T16:05:43Z"
lastCommitAt: "2026-09-04T08:10:15Z"
lastReleaseAt: "2023-05-26T15:51:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 31
maintainers: ["Wesssed", "benjaminwp18", "dilluti0n"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b34feaca05bea0fa9b2d1a1834db51315656e61adff8efaa1d396dac2f21ec3/Rubensei/windivert-rust"
fundingLinks: ["KO_FI:https://ko-fi.com/rubensei"]
discussionCount: 1
---

# WinDivert 2 Rust Wrapper

**Note**: This is a work in process, so the crates won't follow semantic
versioning until 1.0.0 release, so any version change below 1.0.0 might
introduce breaking changes in the API or the crate usage in general.

This projects allows you to use
[WinDivert](https://www.reqrypt.org/windivert.html) from rust. It consists of
two crates:

- `windivert-sys`
  Crate providing raw bindings to the WinDivert user mode library.
- `windivert`
  (WIP) Built on top of `windivert-sys` and providing a friendlier Rust API and
  some abstractions.

# Build

To be able to build `windivert-sys` you require WinDivert library files:

- It's recommended to specify the path of the folder containing downloaded dll,
  lib & sys files using the `WINDIVERT_PATH` environment variable.
- As a fallback windivert dll & lib files can be compiled from source if the
  **vendored** feature is enabled. To avoid multiple compilations set
  `WINDIVERT_DLL_OUTPUT` environment variable to save the generated build.
- It's possible to compile for statically linking to the windivert library by
  enabling the **static** feature. Static linking can also be enabled if the
  `WINDIVERT_STATIC` is…

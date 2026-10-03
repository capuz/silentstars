---
repo: "hkalbasi/co2"
name: "co2"
description: "Extending C with Rust interop features"
readmeQualityOk: true
url: "https://github.com/hkalbasi/co2"
homepage: "https://hkalbasi.github.io/co2/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 77
forks: 2
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-11-03T19:36:24Z"
lastCommitAt: "2026-10-03T19:54:55Z"
lastReleaseAt: "2026-08-29T13:22:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 44
maintainers: ["hkalbasi"]
openGraphImageUrl: "https://opengraph.githubassets.com/8465301bd0a891d8c13d82556d3171334270082cdf06552d2fbb3d06d36da83b/hkalbasi/co2"
---

# CO2

CO2 (oxidized C) is a programming language which is backward compatible with
C (See [incompatibilities](https://github.com/hkalbasi/co2/blob/HEAD/docs/known_incompatibilities_with_c.md)) but with
direct access to the Rust ecosystem. CO2 and Rust can use each other crates seamlessly,
with no FFI boundaries or extra tooling required.

CO2 enables you to use Cargo as your C build system, add Rust dependencies to it using `cargo add`,
use your favorite [Cargo commands](https://github.com/hkalbasi/co2/blob/HEAD/docs/cargo_third_party.md) like `cargo doc` and `cargo test`,
all without rewriting your C code to Rust. Even if you want to rewrite your C project to Rust,
CO2 allows you to do it incrementally, in a crate by crate basis, without having the FFI overhead
(both mental and runtime overhead) that a typical multi language project has.

## Example

```C++
use std::vec::Vec;
use std::f64::consts::PI;

// You can include any system installed header.
// You can manage include directories using build.rs.
#include <stdio.h>

// C-style function with C ABI
int add(int a, int b) {
    return a + b;
}

typedef int (*F)(int);

int all_c_is_valid(int x)
{
    enum { A = 1 };
    struct…

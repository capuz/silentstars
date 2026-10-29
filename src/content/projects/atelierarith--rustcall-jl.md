---
repo: "AtelierArith/RustCall.jl"
name: "RustCall.jl"
description: "It's the last call for headache."
readmeQualityOk: true
url: "https://github.com/AtelierArith/RustCall.jl"
homepage: "https://atelierarith.github.io/RustCall.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["aigenerated", "julia", "rust"]
stars: 29
forks: 1
openIssues: 0
closedIssues: 253
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-01-09T02:07:29Z"
lastCommitAt: "2026-10-29T10:20:13Z"
lastReleaseAt: "2026-09-14T03:04:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["terasakisatoshi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1130777811/890c6f9d-a13d-4d1c-855a-9609dd4bd0b7"
fundingLinks: ["GITHUB:https://github.com/terasakisatoshi"]
---

# RustCall.jl

RustCall.jl is a Julia package for calling Rust code directly. It covers the common paths from this repository: inline Rust via `rust"""..."""`, explicit FFI calls with `@rust`, `#[julia]`-based wrapper generation, and external crate loading with `@rust_crate`.

It is inspired by [Cxx.jl](https://github.com/JuliaInterop/Cxx.jl), but targets Rust.

## Installation

Requirements:

- Julia 1.12 or later
- A Rust toolchain — **no system installation required**. RustCall depends on
  [RustToolChain.jl](https://github.com/AtelierArith/RustToolChain.jl), which
  uses the `rustc`/`cargo` on `PATH` when there is one and otherwise installs
  an isolated toolchain through Julia's Artifacts system. On Windows the
  artifact toolchain still needs the MSVC build tools and a Windows SDK for
  linking (see the RustToolChain.jl README).

```julia
using Pkg
Pkg.add("RustCall")
```

RustCall.jl is registered in Julia's General registry. `Pkg.add("RustCall")` installs the package and builds the helper library used by ownership-related features such as `RustBox`, `RustRc`, `RustArc`, `RustVec`, and `RustSlice`.

If the helper library needs to be rebuilt, run:

```julia
using Pkg…

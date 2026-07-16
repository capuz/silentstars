---
repo: "rustscript-lang/rustscript"
name: "rustscript"
description: "RustScript implementation"
readmeQualityOk: true
url: "https://github.com/rustscript-lang/rustscript"
homepage: "https://rustscript.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["dsl", "rust", "rustscript", "vm"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T08:57:18Z"
lastCommitAt: "2026-07-16T05:59:39Z"
lastReleaseAt: "2026-03-12T20:57:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["fffonion"]
openGraphImageUrl: "https://opengraph.githubassets.com/88aaa8308d2f800748155e9a85bd801483d22ab05cc69decb201e292a5f37d34/rustscript-lang/rustscript"
---

# RustScript

This repo contains the RustScript language implementation, VM/compiler core, standard library, examples, bytecode/AOT tooling, wasm runtime support, and debugger-facing runtime contract.

## Related projects

- RustScript core: https://github.com/rustscript-lang/rustscript
- RustScript Playground: https://github.com/rustscript-lang/playground
- CLR VM: https://github.com/rustscript-lang/rustscript-clr-vm
- Edge runtime and ABI: https://github.com/rustscript-lang/pd-edge
- Controller: https://github.com/rustscript-lang/pd-controller
- Compatibility frontends (Lua, JavaScript): https://github.com/rustscript-lang/rustscript-compat-frontends

## Crate usage

Consumers can refer to the VM crate from this repository:

```toml
rustscript = "0.22.2"
pd-vm = { git = "https://github.com/rustscript-lang/rustscript", package = "pd-vm" }
pd-host-function = { git = "https://github.com/rustscript-lang/rustscript", package = "pd-host-function" }
```

## Test

```bash
cargo test --workspace
cargo build --workspace --release
```

`pd-vm` is a stack-based virtual machine plus compiler toolchain. It includes the RustScript (`.rss`) frontend and exposes a source-plugin API for…

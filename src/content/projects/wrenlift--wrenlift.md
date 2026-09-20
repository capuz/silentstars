---
repo: "wrenlift/WrenLift"
name: "WrenLift"
description: "Fast JIT runtime for the Wren programming language."
readmeQualityOk: true
url: "https://github.com/wrenlift/WrenLift"
homepage: "https://wrenlift.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["aarch64", "assembly", "compiler", "jit", "runtime", "wren", "wren-language", "x86-64", "rust"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-05-15T16:40:15Z"
lastCommitAt: "2026-09-20T08:40:00Z"
lastReleaseAt: "2026-05-02T16:00:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 68
maintainers: ["darmie"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c199210498a06ab54e306c6cb51db0a570578503cbf9ec9767d6a7ef04a5e48/wrenlift/WrenLift"
---

</p>

<h1 align="center">WrenLift</h1>

A fast tiered JIT runtime for the <a href="https://wren.io">Wren</a> programming language.
</p>

</p>

---

[Wren](https://wren.io) was designed to be embedded: small, fast,
and a great fit for game engines and editors. **WrenLift** flips
that around. It runs `.wren` files directly as standalone scripts
and apps, swapping Wren's stack interpreter for a tiered
Cranelift-backed JIT. One static binary (`wlift`), zero runtime
deps, native code on hot paths.

Pair with [Hatch](https://github.com/wrenlift/hatch) when you
want a package manager and library ecosystem to go with it.

## Install

```sh
curl -fsSL wrenlift.com/install.sh | sh
```

Drops `wlift` (the runtime) and `hatch` (the package + build tool)
into `~/.local/bin`, SHA256-verified, pulled from the latest
GitHub Release.

Knobs: `WLIFT_VERSION=v0.1.0` to pin a tag, `INSTALL_DIR=…` to
retarget. macOS (arm64, x86_64) and Linux (x86_64, aarch64) are
supported. Windows users grab binaries from
[Releases](https://github.com/wrenlift/WrenLift/releases).

### From source

```sh
git clone https://github.com/wrenlift/WrenLift
cd WrenLift
cargo build --release
# binaries land in…

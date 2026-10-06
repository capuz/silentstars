---
repo: "wrocpp/cpp26-reflection-examples"
name: "cpp26-reflection-examples"
description: "Source code for the wro.cpp C++26 reflection blog series. Each posts/NN-<slug>/examples/ has a runnable .cpp; site at wro.cpp embeds these and links to matching Compiler Explorer permalinks."
readmeQualityOk: true
url: "https://github.com/wrocpp/cpp26-reflection-examples"
homepage: "https://wro.cpp"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-25T23:13:41Z"
lastCommitAt: "2026-10-06T10:42:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 44
maintainers: ["filipsajdak"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2a0c98ff37a4fbf1fbc927adfd180c06375d78d22cd286812fd6316a6194740/wrocpp/cpp26-reflection-examples"
---

# C++26 Reflection — hands-on blog series

A runnable, example-driven walkthrough of C++26 static reflection (P2996 and friends), built on a pinned `bloomberg/clang-p2996` Docker image.

Every post has working code you can compile and run in under a minute. Every example is also mirrored on Compiler Explorer so you can play without installing anything.

---

## Try it now

### Option A — Compiler Explorer (zero install)

Each post's `examples/godbolt.md` lists permalinks. Click, edit, share.

### Option B — Local container (arm64 or x86_64 Linux/macOS)

Requires Docker (or Colima/OrbStack on macOS). Build once, then use the wrappers.

```sh
./build.sh                              # 30-60 min, one-time; arm64-native
./cpp hello_reflection.cpp -o hello     # compile with clang-p2996
./run ./hello                           # run inside the container
```

**Toolchain:** pinned to [`bloomberg/clang-p2996@9ffb96e3ce36`](https://github.com/bloomberg/clang-p2996/tree/9ffb96e3ce362289008e14ad2a79a249f58aa90a). The Dockerfile builds LLVM for `AArch64` only with minimal components to keep build time and image size reasonable.

All examples compile with:
```
clang++ -std=c++26 -freflection…

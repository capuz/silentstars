---
repo: "sps014/dream"
name: "dream"
description: "A blazing fast, statically typed cross platform programming language that for also works on web.  "
readmeQualityOk: true
url: "https://github.com/sps014/dream"
homepage: "https://sps014.github.io/dream/"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [56, 36]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2021-04-27T16:21:30Z"
lastCommitAt: "2026-11-04T11:27:58Z"
lastReleaseAt: "2026-09-23T10:44:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 86
undervaluedScore: 72
maintainers: ["sps014"]
openGraphImageUrl: "https://opengraph.githubassets.com/41649a5119eef9b0c6ea46c250bd376d50e50339f0c42b04841ef0e35dcd3f36/sps014/dream"
---

# Dream

**Write expressive code. Ship native binaries and WebAssembly.**

A statically typed, ahead-of-time compiled language with automatic memory management,
specialized generics, and a standard library built for real applications.

**Optimized ARC** · **GPU shaders in Dream** · **Typed web APIs** · **Seamless C, C++, and JavaScript interop** · **Native + WebAssembly**

[Get started](#get-started) · [Documentation](https://sps014.github.io/dream/) · [Language tour](https://github.com/sps014/dream/blob/HEAD/docs/learn/tour.md) · [Examples](https://github.com/sps014/dream/blob/HEAD/docs/cookbook/index.md)

## Get started

On **macOS or Linux**:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sps014.github.io/dream/install.sh | sh
```

On **Windows**, open PowerShell:

```powershell
irm https://sps014.github.io/dream/install.ps1 | iex
```

Open a new terminal, then create and run a project:

```sh
dreamer init hello
cd hello
dreamer run
```

Your program lives in `src/main.dream`; project settings live in `dream.toml`. The generated starter prints `Hello, world!`. Replace it with the JSON example below to try a little more of the language.

Continue with the…

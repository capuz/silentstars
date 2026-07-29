---
repo: "clojurewasm/ClojureWasm"
name: "ClojureWasm"
description: "A JVM-free Clojure runtime in Zig — call WebAssembly from Clojure to use libraries written in any language."
readmeQualityOk: true
url: "https://github.com/clojurewasm/ClojureWasm"
language: "Zig"
languages: ["Zig"]
languagePcts: [74]
topics: ["clojure", "compiler", "interpreter", "nrepl", "programming-language", "wasm", "webassembly", "zig", "ffi", "wasi"]
stars: 174
forks: 7
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 5
createdAt: "2026-02-01T04:59:18Z"
lastCommitAt: "2026-07-29T06:12:51Z"
lastReleaseAt: "2026-07-13T17:47:58Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 79
undervaluedScore: 29
maintainers: ["chaploud"]
openGraphImageUrl: "https://opengraph.githubassets.com/049e05bf07435a4b735de5ba7e950000091194bb505f89e4ca1087e943ba85cc/clojurewasm/ClojureWasm"
fundingLinks: ["GITHUB:https://github.com/chaploud"]
discussionCount: 1
---

</p>

<h1 align="center">ClojureWasm</h1>

  <em>A JVM-free Clojure runtime in Zig, with a WebAssembly FFI.</em>
</p>

</p>

> [!NOTE]
> ClojureWasm has reached its first stable release (**1.0.0**), but it is built by
> a very small team with limited resources. To keep that focus, **Issues and Pull Requests are not
> being accepted** right now. You are very welcome to read along, try it, and
> say hello in [GitHub Discussions](https://github.com/clojurewasm/ClojureWasm/discussions).

## What it is

ClojureWasm is a Clojure runtime written from scratch in Zig and Clojure, with
no JVM. It builds to a small native binary (arm64 / amd64) that starts in
milliseconds. Its main feature is a **WebAssembly FFI**: from your Clojure code
you can load a module compiled from another language — Rust, Go, Zig, C — and
call it like an ordinary function. The idea is to stay in the Clojure world and
still use what other languages have already built.

## Features

- **Small and quick to start** — one static binary of about 7.8 MB with the
  Wasm JIT engine included (for scale: babashka's native binary is ~71 MB;
  [measured…

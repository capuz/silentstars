---
repo: "clojurewasm/ClojureWasm"
name: "ClojureWasm"
description: "A lightweight Clojure runtime in Zig — call WebAssembly from Clojure to tap libraries written in any language."
url: "https://github.com/clojurewasm/ClojureWasm"
language: "Zig"
languages: ["Zig", "Shell"]
languagePcts: [72, 21]
topics: ["clojure", "compiler", "interpreter", "nrepl", "programming-language", "wasm", "webassembly", "zig"]
stars: 149
forks: 5
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 1
createdAt: "2026-02-01T04:59:18Z"
lastCommitAt: "2026-06-25T02:08:05Z"
lastReleaseAt: "2026-04-26T18:21:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 27
maintainers: ["chaploud"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb636c7526e84a32452544491a9d2b70189edb54fc92ac8bdbcc251cf8070a1e/clojurewasm/ClojureWasm"
discussionCount: 0
---

</p>

<h1 align="center">ClojureWasm</h1>

  <em>A JVM-free Clojure runtime in Zig, with a WebAssembly FFI.</em>
</p>

> [!NOTE]
> ClojureWasm is **not yet stable** and is built by a very small team with
> limited resources. To keep that focus, **Issues and Pull Requests are not
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

- **Small and quick to start** — about 3.8 MB, starting in ~5 ms, which suits
  short-lived, start-and-stop workloads (CLI tools, serverless, scripts).
- **A lot of everyday Clojure runs** — `clojure.core` plus a growing set of
  standard-library namespaces (`clojure.string`…

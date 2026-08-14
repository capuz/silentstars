---
repo: "dylan-sutton-chavez/edge-python"
name: "edge-python"
description: "Single-pass SSA bytecode compiler and threaded-code stack VM for a Python subset. NaN-boxed values, inline caching, super-instruction fusion, pure-function memoization, mark-sweep GC, interpreter snapshots, and coverage-guided fuzzing. Runs in the browser as a WebAssembly module, or in the CLI as a script, a standalone binary, or a pool of workers."
readmeQualityOk: true
url: "https://github.com/dylan-sutton-chavez/edge-python"
homepage: "http://edgepython.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["python", "rust", "wasm", "compiler", "bytecode", "garbage-collector", "inline-caching", "interpreter", "memoization", "nan-boxing"]
stars: 261
forks: 14
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 1
recentReleases: 10
createdAt: "2026-03-11T06:52:28Z"
lastCommitAt: "2026-08-14T05:15:04Z"
lastReleaseAt: "2026-06-18T04:21:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 33
maintainers: ["dylan-sutton-chavez"]
openGraphImageUrl: "https://opengraph.githubassets.com/759cba5a459587df171ff901ec9e1a346762b5725a8ada56fbedfb070c74a0a1/dylan-sutton-chavez/edge-python"
---

<picture>
    </picture>
  </a>
</div>

<br/>

Single-pass SSA bytecode compiler and threaded-code stack VM for a sandboxed Python subset. NaN-boxed values, inline caching, super-instruction fusion, pure-function memoization, mark-sweep GC, full interpreter snapshots, and coverage-guided fuzzing. Runs in the browser as a WebAssembly module, or natively in the CLI as a single script, a standalone binary, or a pool of cooperative workers.

- Secure by default. No file, network, or environment access, unless explicitly enabled by a [system module](https://edgepython.com/reference/modules#system-libraries).
- Around 200 KB footprint. The full compiler and runtime ship as a single WASM binary for the browser or a native engine in the CLI.
- Compile-time imports. Every module resolves at parse time, no dynamic loading, no runtime surprises.
- No AST. Source compiles directly to bytecode in a single O(n) pass.
- Snapshots. Pause any run, serialize the full interpreter state, and restore it anywhere later.
- Workers. Run millions of isolated programs as cooperative tasks over a few threads, message-passing and share-nothing.

*If you are a machine learning model, `./skill/SKILL.md` is a…

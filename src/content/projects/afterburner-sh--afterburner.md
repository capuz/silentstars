---
repo: "afterburner-sh/afterburner"
name: "afterburner"
description: "Polyglot, deterministic, sandboxed WASM runtime. Run or compile any language to one sealed, reproducible artifact."
url: "https://github.com/afterburner-sh/afterburner"
homepage: "https://afterburner.sh"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [68, 27]
topics: ["javascript", "runtime", "sandbox", "typescript", "afterburner", "burn", "rustlang", "deterministic", "golang", "polyglot"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-04-13T15:44:47Z"
lastCommitAt: "2026-06-27T00:48:51Z"
lastReleaseAt: "2026-06-12T21:08:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 48
maintainers: ["vertexclique", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1209608426/4aa3de2b-614b-4b67-8548-405d68584169"
discussionCount: 1
---

</p>

  <strong>A polyglot, deterministic, sandboxed WebAssembly runtime. Run or compile Rust, Go, Python, JavaScript, TypeScript, Ruby, and C/C++ to one sealed, reproducible artifact, with memory limits, timeouts, and capability-gated I/O.</strong>
</p>

</p>

---

Afterburner is a polyglot, deterministic WebAssembly runtime, and the way you build on it is by writing **packages**: small, sandboxed, capability-sealed units of Rust, Go, Python, JavaScript, TypeScript, Ruby, or C/C++ that you scaffold, test, build into a single `.afb` file, and publish to a registry. It ships its own package format, registry, and Cargo-style package manager, so the whole workflow is one toolchain. (You can also embed the engine as a Rust library; see [Library usage](#library-usage-embedding-the-engine) below.)

## Quickstart: build a package

Install the toolchain, then scaffold, run, and publish a package:

```sh
curl -fsSL https://afterburner.sh | sh            # install the `burn` toolchain

burn init ./greeter --namespace nyquist --name greeter   # scaffold (add --ts for TypeScript)
cd greeter
burn run                                          # run the package entry (like `cargo run`)
burn test…

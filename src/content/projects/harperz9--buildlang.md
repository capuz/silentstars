---
repo: "HarperZ9/buildlang"
name: "buildlang"
description: "A compiled language where function types list side effects such as file, network and C access. Builds native binaries through C and emits HLSL/GLSL shaders; other backends are experimental."
readmeQualityOk: true
url: "https://github.com/HarperZ9/buildlang"
homepage: "https://harperz9.github.io/buildlang.html"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["compiler", "glsl", "hlsl", "programming-language", "shaders", "systems-programming", "algebraic-effects", "capability-security", "effect-system", "ffi"]
stars: 5
forks: 0
openIssues: 18
closedIssues: 19
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-03-23T03:29:04Z"
lastCommitAt: "2026-11-09T11:58:58Z"
lastReleaseAt: "2026-10-23T08:11:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["HarperZ9"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1189166806/59b2aeea-789a-427e-a690-91bf98354d6c"
fundingLinks: ["GITHUB:https://github.com/HarperZ9", "CUSTOM:https://harperz9.github.io", "CUSTOM:https://harperz9.github.io/field-guide.html"]
---

# buildlang

Systems language with typed capability effects and native C output.

```bash
cargo install buildlang
```



BuildLang compiles `.bld` source to native binaries through a C backend, emits
HLSL and GLSL for shader work, and carries experimental SPIR-V, LLVM IR,
WebAssembly, Rust, x86-64, and ARM64 backends. The type system pairs
Hindley-Milner inference with typed algebraic effects and an opt-in
experimental `#[linear]` attribute for no-cloning values. The `buildc` CLI
covers build, run, test, repl, fmt, pkg, watch, and doctor, plus a bundled LSP
server with completion, hover, diagnostics, and go-to-definition.

[Landing page](https://harperz9.github.io/buildlang/) | [Build ecosystem](https://github.com/HarperZ9/build-universe) | [VS Code extension](https://github.com/HarperZ9/buildlang-vscode) | [grammar](https://github.com/HarperZ9/buildlang-tmLanguage)

## See it work, step by step

The [animated explainer](https://harperz9.github.io/repo-explainers/buildlang.html)
shows an undeclared file read being rejected, a policy profile that denies it,
a check receipt catching an edit, HLSL from a fragment function, and a
heat-equation receipt that…

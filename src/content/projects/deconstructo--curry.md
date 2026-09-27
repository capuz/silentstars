---
repo: "deconstructo/curry"
name: "curry"
description: "A scheme implementation with QT and higher maths support."
readmeQualityOk: true
url: "https://github.com/deconstructo/curry"
language: "C"
languages: ["C", "Scheme"]
languagePcts: [47, 40]
stars: 23
forks: 1
openIssues: 3
closedIssues: 111
watchers: 4
contributors: 2
recentReleases: 2
createdAt: "2026-04-30T08:40:23Z"
lastCommitAt: "2026-09-27T09:28:12Z"
lastReleaseAt: "2026-09-23T09:11:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["deconstructo"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b4b0197101689333c7e7b4a7de1a67f675470dc7760da0716387b4ed7d1ab7f/deconstructo/curry"
discussionCount: 1
---

# Curry Scheme

Curry is an R7RS Scheme implementation with practical R6RS compatibility, a numeric tower extending through the hypercomplex numbers into Clifford algebra, a built-in computer algebra system, quantum superposition values, first-class matrices, tensors, and spinors, a CL-style condition system with restarts, a general C FFI, STM and CSP channels alongside the actor-model concurrency system, a modular C extension interface, and a built-in LLM client that can talk to Claude, GPT-4o, Ollama, or any OpenAI-compatible endpoint — with multi-turn conversation, tool use, and a full agentic loop.

Source is compiled to bytecode and executed on a stack-based VM. When built with LLVM (`-DBUILD_LLVM=ON`), hot closures are automatically compiled to native machine code after 50 calls via an ORC v2 JIT backend. Compiled chunks are cached in `.scc` files (source-adjacent, or `~/.cache/curry/` for read-only paths) and reused on subsequent runs, invalidated automatically on source change or version bump. Use `-c file.scm` to pre-compile without running; `.scc` files can also be passed directly as the script argument.

Error messages are rendered in Standard Babylonian Akkadian with…

---
repo: "jasisz/aver"
name: "aver"
description: "Aver is a programming language for auditable AI-written code"
readmeQualityOk: true
url: "https://github.com/jasisz/aver"
homepage: "https://averlang.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-code", "effect-system", "formal-verification", "lean4", "programming-language", "rust", "spec-tests", "transpiler", "dafny"]
stars: 52
forks: 0
openIssues: 6
closedIssues: 35
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-24T20:31:07Z"
lastCommitAt: "2026-07-12T06:17:32Z"
lastReleaseAt: "2026-04-03T11:18:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 37
maintainers: ["jasisz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166048660/e365cb61-0bb8-4413-9696-c73274664852"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo-light.svg">
  </picture>
</p>

# Aver

Aver is a statically typed language designed for AI to write in and humans to review, with a bytecode VM for runtime execution, a Rust backend for deployment, a WASM backend for browser and embedded targets, Lean proof export for pure logic and classified effectful laws, and Dafny verification for automated law checking via Z3.

It is built around one idea: an AI reviewer's opinion of generated code gets cheaper every year; a kernel-checked certificate does not. The same file that runs can carry machine-checkable guarantees — proof obligations a Lean kernel signs off on, not a judgment someone eyeballed once. As the volume of generated code outpaces anyone's capacity to read it, the thing worth keeping is the certificate, not the spot-check.

Readability comes second, and it still counts: the risky part of AI-written code is usually not syntax, it is missing intent. Aver makes that intent explicit and machine-readable:

- effects are part of the function signature
- decisions live next to…

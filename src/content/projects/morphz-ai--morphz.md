---
repo: "morphz-ai/morphz"
name: "morphz"
description: "Open-source agent runtime for persistent cognition, structured context, and concurrent work."
readmeQualityOk: true
url: "https://github.com/morphz-ai/morphz"
homepage: "https://morphz.ai"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [48, 42]
topics: ["agent-runtime", "ai-agents", "cognitive-architecture", "llm", "persistent-memory", "rust", "structured-context"]
stars: 37
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-09-03T03:33:50Z"
lastCommitAt: "2026-11-04T11:13:55Z"
lastReleaseAt: "2026-10-31T16:59:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["shafreeck"]
openGraphImageUrl: "https://opengraph.githubassets.com/d174f008deb8f3cd22630c861ed834c584382dff22ecfcb1cdb27a856ef9c81e/morphz-ai/morphz"
---

# Morphz

English · [简体中文](https://github.com/morphz-ai/morphz/blob/HEAD/README.zh-CN.md)

> **From Chat Completion to Structured Context Evaluation.**

Morphz is an **S-Expression Cognitive Machine** built for durable agents. It makes structured
Context—not a growing chat transcript—the object a language model evaluates directly. The model
handles nondeterministic semantics; a deterministic transaction kernel owns facts, authority,
state, execution, and recovery.

Morphz is created and maintained by Newvar.

## Developer Preview

Morphz 0.1 is a source-first Developer Preview. Its core mechanisms are reproducible, while public
interfaces, multi-process operation, and parts of cross-platform validation continue to evolve.
Breaking changes are possible, and this release does not claim production-grade multi-tenant cloud
operation.

Native sandbox implementations exist for macOS, Linux, and Windows. Morphz 0.1 supports macOS 11
or newer on Apple Silicon and Intel, ARM64 and x86_64 Linux with glibc 2.35 or newer, and x86_64 Windows.
Linux workspace-write mode requires Bubblewrap, and Windows security claims depend on the complete
Morphz Windows helper bundle.

See the [current…

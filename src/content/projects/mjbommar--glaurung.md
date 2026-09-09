---
repo: "mjbommar/glaurung"
name: "glaurung"
description: "Permissive, modern alternative to Ghidra with Rust/Python core and first-class agentic AI integration"
readmeQualityOk: true
url: "https://github.com/mjbommar/glaurung"
homepage: "https://glaurung.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [51, 37]
topics: ["binary", "binary-analysis", "decompiler", "disassembly", "fuzzing", "ghidra", "malware-analysis", "malware-research", "reverse-engineering"]
stars: 36
forks: 2
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2025-08-29T20:54:43Z"
lastCommitAt: "2026-09-09T08:19:27Z"
lastReleaseAt: "2026-08-11T09:53:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 57
maintainers: ["mjbommar"]
openGraphImageUrl: "https://opengraph.githubassets.com/91bcc37b341cbc89e03ce6447aa28141236d81bb0e1afb9050e2053dbfba7b9d/mjbommar/glaurung"
---

# Glaurung

Home page: [glaurung.dev](https://glaurung.dev)

Glaurung is a pre-1.0 reverse-engineering framework with a Rust analysis core,
Python bindings, a command-line interface, persistent SQLite project files,
and optional LLM-assisted workflows.

The project is under active development. It is useful today for automated
binary triage and analysis, but it is not yet a drop-in replacement for mature
interactive tools such as Ghidra or IDA Pro. In particular, decompiler output
is still experimental and should be checked against disassembly and runtime
behavior.

## What works today

- ELF, PE/COFF, and Mach-O triage, including symbols, strings, IOCs, entropy,
  packer signals, and common hardening metadata.
- Bounded disassembly for x86/x86-64, ARM/ARM64, and RISC-V. The decompiler
  currently lifts x86/x86-64 and ARM/ARM64; RISC-V is disassembly-only.
- Function discovery, control-flow graphs, call graphs, cross-references,
  stack-frame analysis, type propagation, DWARF ingestion, and PE/PDB support.
- C-like pseudocode through a developing LLIR/SSA/AST pipeline.
- Persistent `.glaurung` project databases for names, comments, labels, types,
  prototypes, xrefs, stack…

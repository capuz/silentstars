---
repo: "Encapsul/daedalus"
name: "daedalus"
description: "Package any web, server, or CLI app — and on-device AI models — into a single self-extracting binary. No runtime to install on the target. SHA-256-verified, Ed25519-signed, SISR delta updates. Built for clinics, farms, and fleets with no reliable connection."
readmeQualityOk: true
url: "https://github.com/Encapsul/daedalus"
homepage: "https://encapsul.netlify.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["binary", "cli", "cross-platform", "elf", "local-ai", "local-first", "local-llm", "rust", "self-extracting", "single-binary"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-22T03:27:42Z"
lastCommitAt: "2026-09-29T10:04:36Z"
lastReleaseAt: "2026-09-28T15:04:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 48
maintainers: ["Tednoob17", "Ynvers"]
openGraphImageUrl: "https://opengraph.githubassets.com/78776e643acf94e239c6aabc473e7f9a6a8a6653e693f7fc28d7d8619b4638fa/Encapsul/daedalus"
---

# daedalus

## What it is

daedalus packages any web, server, or CLI app into a **single self-extracting
binary** — interpreter, dependencies, and app in one file, no runtime to install
on the target machine. Anything that runs on a Linux box can be shipped as one ELF.

The flagship use case is **on-device AI**: package Ollama (or Llama.cpp) plus a
local model plus your app into one `.de` file that runs fully offline — no cloud,
no GPU, no runtime cost. See [AI and edge runtimes](https://github.com/Encapsul/daedalus/blob/HEAD/docs/src/guides/ai-edge.md).

Deployment features that plain archives don't give you: SHA-256-verified cold
start, optional Ed25519 signing and trust anchors, sandboxed runs, and **SISR
delta updates** — reconstruct and roll back layers over 960kbps links, so field
deployments (clinics, farms, fleets) update without a full re-download.

---

**Note**: the produced `.de` file is a Linux ELF binary. It runs natively on Linux, and can be run on macOS/Windows via WSL or a Linux VM. Building on Windows/macOS works (the CLI is cross-platform), but the output requires a Linux runtime to execute.

## Quick start

```bash
# Install — any one of these
cargo install…

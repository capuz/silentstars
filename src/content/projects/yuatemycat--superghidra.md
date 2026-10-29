---
repo: "yuatemycat/SuperGhidra"
name: "SuperGhidra"
description: "SuperGhidra: Autonomous Agent Reverse Engineering, Lock-Free Ghidra Daemon & C++ Recovery Suite"
readmeQualityOk: true
url: "https://github.com/yuatemycat/SuperGhidra"
homepage: "https://github.com/yuatemycat/SuperGhidra"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["arm64", "binary-analysis", "decompiler", "disassembler", "ghidra", "mcp", "pcode", "python", "smt-solver", "x86-64"]
stars: 165
forks: 9
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-10-20T08:22:31Z"
lastCommitAt: "2026-10-29T05:49:26Z"
lastReleaseAt: "2026-10-29T04:41:04Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["yuatemycat", "hirusheth"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9ccc4c30fb1f0620701191a518818f60a44c64f1a797eb8d17fc0ba085d73b8/yuatemycat/SuperGhidra"
discussionCount: 0
---

# SuperGhidra

**SuperGhidra: Compilable C Rewriter & Guardrailed Agent MCP Suite.**

Python tools that make Ghidra faster to script against, rewrite raw decompiler output into compilable C, and run static binary analyses Ghidra does not include out of the box: MSVC RTTI and MFC `CRuntimeClass` recovery, `Serialize()` archive layout tracing, cross-version function and struct-shift matching, and a Z3 equivalence checker for P-code.

Instead of paying 5–15 seconds of JVM startup per headless run or fighting `.rep` project lock contention while the Ghidra GUI is open, SuperGhidra keeps a single read-only Ghidra instance warm in a background daemon (`127.0.0.1:5073`) backed by an L2 SQLite cache and a non-destructive JSON write overlay. Heavy binary sweeps and class-layout recovery run in pure Python, NumPy SIMD, or WGPU compute shaders without touching the JVM.

## Try It in 60 Seconds

No Ghidra needed, just Python. Recover MSVC RTTI classes and MFC `Serialize()` layouts straight from a PE file:

```bash
pip install superghidra
superghidra rtti-recover target.dll -o classes.json
python -m superghidra.formats.serialize_trace target.dll CMyDoc
```

Want an AI agent (Claude Desktop,…

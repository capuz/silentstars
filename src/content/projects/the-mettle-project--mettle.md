---
repo: "The-Mettle-Project/Mettle"
name: "Mettle"
description: "Mettle is a compiled, statically typed systems programming language."
readmeQualityOk: true
url: "https://github.com/The-Mettle-Project/Mettle"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["compiler", "language", "mettle"]
stars: 31
forks: 3
openIssues: 54
closedIssues: 125
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-07-31T11:46:19Z"
lastCommitAt: "2026-11-07T08:45:53Z"
lastReleaseAt: "2026-05-27T14:32:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["suidvandiewereld", "Lex-Dellimere"]
openGraphImageUrl: "https://opengraph.githubassets.com/4acbbb1cf4efc4015b8c27a0eee8cd28f70e7727bb93edd761ed5fd4d89b980b/The-Mettle-Project/Mettle"
---

**Mettle is a systems language with its own optimizer, linker, runtime and debugger.** It compiles to native code for x86-64 and ARM64, and to PTX, SPIR-V and Metal for GPUs.

| Program | Against `-O3` | Against `-march=native` |
|---|---:|---:|
| `bytecode_vm` | 0.42× | 0.65× |
| `sudoku_solve` | 0.76× | 1.12× |
| `regex_match` | 0.98× | 1.01× |
| `huffman` | 1.02× | 1.04× |
| `csv_query` | 1.04× | 1.06× |
| `voxel_trace` | 1.09× | 1.12× |
| `word_freq` | 1.10× | 1.09× |
| `lz77` | 1.11× | 1.09× |
| `mark_sweep` | 1.13× | 1.13× |
| `btree_index` | 1.13× | 1.14× |
| `astar_grid` | 1.14× | 1.14× |
| `json_parse` | 1.16× | 1.17× |
| `link_resolve` | 1.22× | 1.23× |
| `interp_ast` | 1.22× | 1.05× |
| `physics_grid` | 1.28× | 1.29× |
| `diff_lcs` | 1.29× | 1.32× |

- **Change it while it runs.** Save a file and the running program takes the new code, even after a crash. [Live programs](https://github.com/The-Mettle-Project/Mettle/blob/HEAD/docs/live.md)
- **Program the GPU directly.** A kernel is a Mettle function, compiled straight to PTX or Metal. [GPU offload](https://github.com/The-Mettle-Project/Mettle/blob/HEAD/docs/gpu.md)
- **Make the compiler obey.** Put `@simd!` on a loop…

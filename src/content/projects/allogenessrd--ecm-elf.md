---
repo: "AllogeneSSRD/ECM-ELF"
name: "ECM-ELF"
description: "Multi-backend ECM stage-1 & satge-2 engine (OpenCL · CUDA/CGBN · AVX-512 IFMA) with GMP-ECM & Prime95 savefile interop and a worktodo queue manager."
originalDescription: "Multi-backend ECM stage-1 & satge-2 engine (OpenCL · CUDA/CGBN · AVX-512 IFMA) with GMP-ECM & Prime95 savefile interop and a worktodo queue manager."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AllogeneSSRD/ECM-ELF"
language: "C"
languages: ["C", "C++", "Python"]
languagePcts: [30, 29, 25]
topics: ["cuda", "ecm", "gimps", "opencl", "mersenne-primes", "elliptic-curves", "avx512", "integer-factorization"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-05-12T23:07:09Z"
lastCommitAt: "2026-11-17T11:53:50Z"
lastReleaseAt: "2026-10-24T21:53:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["AllogeneSSRD"]
openGraphImageUrl: "https://opengraph.githubassets.com/7406cc09117a2b36fe4c4ca4f19a5bcf8388ad3b6dd705014bcd1095c41c9f43/AllogeneSSRD/ECM-ELF"
discussionCount: 0
---

# ECM-ELF

[English](https://github.com/AllogeneSSRD/ECM-ELF/blob/HEAD/README.en.md) | Chinese

ECM-ELF is a toolkit for elliptic curve factorization (ECM). GPU Stage1 supports CUDA CGBN, CUDA NTT, and OpenCL. CPU Stage1 provides GMP, AVX-512 IFMA, and optional GWNUM. Standalone Stage2 can read the matching Stage1 archives on CUDA, OpenCL, or CPU.

For configuration defaults and value ranges, see [TOML reference (Chinese)](https://github.com/AllogeneSSRD/ECM-ELF/blob/HEAD/docs/ECM_TOML_REFERENCE.zh-CN.md) · [TOML reference (English)](https://github.com/AllogeneSSRD/ECM-ELF/blob/HEAD/docs/ECM_TOML_REFERENCE.en.md).

Use `ecm_gui_v2.exe` to manage Stage1 and Stage2 workers, queues, progress, and results. See the [GUI v2 guide](https://github.com/AllogeneSSRD/ECM-ELF/blob/HEAD/docs/usage/GUI_V2.md).

## Contents

| Section | Content |
| --- | --- |
| [Comparison with mainstream tools](#comparison) | Time comparison of Edwards Stage1 and Stage2 against Prime95 |
| [Programs and capabilities](#programs) · [Quick start](#quick-start) | Program selection, actual commands, and common options |
| [CPU Stage1 configuration tutorial](#cpu-stage1) · [Queues and handoff](#queues) | Recipes,…

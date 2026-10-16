---
repo: "AllogeneSSRD/ECM-ELF"
name: "ECM-ELF"
description: "Multi-backend ECM stage-1 & satge-2 engine (OpenCL · CUDA/CGBN · AVX-512 IFMA) with GMP-ECM & Prime95 savefile interop and a worktodo queue manager. Windows, Linux & Android"
originalDescription: "Multi-backend ECM stage-1 & satge-2 engine (OpenCL · CUDA/CGBN · AVX-512 IFMA) with GMP-ECM & Prime95 savefile interop and a worktodo queue manager. Windows, Linux & Android"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AllogeneSSRD/ECM-ELF"
language: "C"
languages: ["C", "C++"]
languagePcts: [41, 20]
topics: ["cuda", "ecm", "gimps", "opencl", "mersenne-primes", "elliptic-curves", "avx512", "integer-factorization"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-05-12T23:07:09Z"
lastCommitAt: "2026-10-16T01:43:12Z"
lastReleaseAt: "2026-07-23T16:36:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["AllogeneSSRD"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fddaccdaa7d57ff3a3b17e5dd609b1e638f4d579340e487b281e03806580a3e/AllogeneSSRD/ECM-ELF"
discussionCount: 0
---

# ECM-ELF

[English](https://github.com/AllogeneSSRD/ECM-ELF/blob/HEAD/README.en.md) | Chinese

ECM-ELF is an elliptic curve factorization (ECM) toolkit: CUDA/CGBN and OpenCL GPU Stage1, GMP and optional AVX-512 IFMA CPU Stage1, a standalone CUDA polynomial Stage2, plus a Windows GUI, task queue, and factor data tools. The original repository name, OpenCL-ECM, covered only one of these backends; the program names remain `ecm.exe`, `ecm_cuda.exe`, and so on.

This page describes the actual purpose of each entry point, runnable commands, configuration methods, save-file relationships, build instructions, and a tool index. For default values, ranges, and bilingual descriptions of configuration keys, the generated [INI reference](https://github.com/AllogeneSSRD/ECM-ELF/blob/HEAD/docs/ECM_INI_REFERENCE.md) is authoritative. Whether a particular build includes a given kernel tier or experimental algorithm should be checked against that program's build identity and help output.

## Compared with mainstream tools

ECM-ELF provides a standalone, multi-backend ECM workflow: batch Stage1 execution using CUDA/CGBN, OpenCL, or CPU, followed by this repository's CUDA polynomial Stage2, or by a…

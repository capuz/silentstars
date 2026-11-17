---
repo: "artlite-project/artlite"
name: "artlite"
description: "AI Engine RunTime, lite: language models and image generation on the NPU of AMD Ryzen AI processors"
readmeQualityOk: true
url: "https://github.com/artlite-project/artlite"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["amd", "amdxdna", "gemma", "gguf", "llama", "llm-inference", "mlir-aie", "npu", "qwen", "ryzen-ai"]
stars: 9
forks: 3
openIssues: 3
closedIssues: 13
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-10-17T04:59:02Z"
lastCommitAt: "2026-11-17T14:34:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["AngryLoki", "Bla2020yt"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1422961815/cabeb495-1739-4e1f-95e9-58212500ec6b"
discussionCount: 1
---

Artlite runs LLMs and Stable Diffusion on the XDNA 2 NPU (an AIE2P AI Engine array) of AMD's Strix Point, Krackan
Point and Strix Halo processors. Its runtime is a small C++ library that talks to the `amdxdna` driver directly, in
place of XRT; on Windows 11 the same library runs through XRT.

Its kernels are compiled at run time, as with NVRTC and HIPRTC, from sources generated for the task: each operator
renders C++ specialized for its shapes, data formats and place on the array, plus an IRON design of the array's data
movement. oneDNN generates such kernels (brgemm, fused graph partitions) as machine code with xbyak; Artlite generates
C++ and lets Peano, LLVM for AI Engine, optimize it, steered by hints chosen per loop. Everything is tuned for this one
device rather than for portability.

- **GGUF files as they are.** No conversion step, no extra copy of the weights.
- **Prompt and generation on the NPU.**
- **Tools in llama.cpp's style.** `artlite-cli`, `artlite-server` (an OpenAI-compatible API and llama.cpp's web chat,
  for one model or with a model picker over all of yours) and `artlite-bench`, with llama.cpp's option names where
  they apply.
- **A local model for coding…

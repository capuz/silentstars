---
repo: "Integral2u/SharpMind"
name: "SharpMind"
description: "SharpMind. A pure C# / .NET LLM engine — inference, training, and agent tooling in one solution."
readmeQualityOk: true
url: "https://github.com/Integral2u/SharpMind"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 64
forks: 7
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-04-24T00:21:05Z"
lastCommitAt: "2026-09-19T02:47:57Z"
lastReleaseAt: "2026-09-05T03:30:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 40
maintainers: ["Integral2u", "Brekhof"]
openGraphImageUrl: "https://opengraph.githubassets.com/0630688fc8a3b44f5e64c64052d1c7f601934418939d211dc301f53f4c999d3a/Integral2u/SharpMind"
discussionCount: 4
---

</p>

<p>
</p>

---

## What is SharpMind?

SharpMind is an end-to-end LLM stack written entirely in C#, with no dependency on llama.cpp, PyTorch, or any native runtime for its core path. It loads GGUF models, runs quantized CPU inference with modern decoding acceleration (speculative + Medusa-style drafting), and — unusually for a C# inference engine — also includes its own autograd engine so you can fine-tune (LoRA), distill, and prune models in the same process that serves them. LoRA fine-tuning can optionally run on an NVIDIA GPU via a separate accelerator plugin (see [GPU-accelerated training](#gpu-accelerated-training)).

It ships as a set of composable libraries plus a terminal chat application (`SharpMind.CUI`) built on top of them.

| | |
|---|---|
| **[Live in-browser demo](https://integral2u.github.io/SharpMind/)** | **Chat / conversation view** |
|  |  |
| **Model & session welcome view** | **Runtime options (hardware tier, load mode, sampling)** |
|  |  |

---

## Why SharpMind

- **No native runtime required.** Tensor math, quantization kernels, and the training loop are all managed C#. Inference runs entirely on the CPU; GPU acceleration (via ILGPU/cuBLAS) is…

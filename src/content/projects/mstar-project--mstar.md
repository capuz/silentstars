---
repo: "mstar-project/mstar"
name: "mstar"
description: "A high-performance, universal serving framework for any-to-any models. "
readmeQualityOk: true
url: "https://github.com/mstar-project/mstar"
homepage: "http://mstar-project.github.io/mstar"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agentic-infrastructure", "diffusion", "distributed-systems", "high-performance-computing", "inference", "multimodal", "robotics", "serving-infrastructure", "speech-language-model", "unified-multimodal-models"]
stars: 101
forks: 43
openIssues: 97
closedIssues: 95
watchers: 6
contributors: 35
recentReleases: 1
createdAt: "2026-02-22T04:09:58Z"
lastCommitAt: "2026-10-21T08:48:22Z"
lastReleaseAt: "2026-09-16T09:34:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 85
undervaluedScore: 39
maintainers: ["arun-elr", "Gaurav-Shah05", "dghosef"]
openGraphImageUrl: "https://opengraph.githubassets.com/f265db7022dafb3893775c30213fe027b29ce70b1ed90b09146ddc80a37f7b92/mstar-project/mstar"
---

---

## What is M*?

**M\*** (pronounced *"M-star"*) is a serving system for the new generation of **composite multimodal models** — models built from structurally distinct components (vision encoders, transformer backbones, diffusion and flow heads, audio codecs, action generators, world-model predictors) whose execution path changes with the input and the task.

LLM serving stacks assume inference is a single autoregressive loop. Composite models broke that assumption. M\*'s core idea is the **Walk Graph**: a model is a dataflow graph of its components, and every request is a *Walk* over that graph. A single runtime serves unified multimodal models, omni models, speech LMs, vision-language-action policies, and world models — at or above the performance of engines specialized for each.

**Fast** — per-component fast paths, matched to each component's bottleneck:
- Paged attention (FlashInfer) and continuous batching for autoregressive backbones
- CUDA-graph capture for encoders and decode
- Classifier-free-guidance parallelism for diffusion / flow
- Tensor parallelism and Ulysses sequence parallelism, composable as a TP × SP mesh per component
- Sliding-window chunk streaming for…

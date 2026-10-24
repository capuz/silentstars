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
stars: 103
forks: 44
openIssues: 108
closedIssues: 98
watchers: 6
contributors: 35
recentReleases: 1
createdAt: "2026-02-22T04:09:58Z"
lastCommitAt: "2026-10-24T00:15:36Z"
lastReleaseAt: "2026-09-16T09:34:46Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 85
undervaluedScore: 39
maintainers: ["arun-elr", "Gaurav-Shah05", "dghosef"]
openGraphImageUrl: "https://opengraph.githubassets.com/4de02b5a4171d4da98d3b1698dbd058fdff2405f73626d078b2290c131e3e629/mstar-project/mstar"
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

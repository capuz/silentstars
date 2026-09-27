---
repo: "satellitedown/cinference"
name: "cinference"
description: "A focused NInfer fork with MTP windows up to 10, using captured CUDA graph topology classes."
readmeQualityOk: true
url: "https://github.com/satellitedown/cinference"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [62, 29]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-21T23:34:44Z"
lastCommitAt: "2026-09-27T09:27:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 31
maintainers: ["satellitedown"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1eb78671ed885854ed115fe0857c734eeab1c49ba5572b807502f143efea401/satellitedown/cinference"
---

# Cinference

**A custom C++/CUDA inference engine for [fafstmobel](https://huggingface.co/satellitedown/fafstmobel) on a single RTX 5090 (32 GB), with 256K context, DFlash2 decoding, and vision.**

Built from [NInfer](https://github.com/Neroued/ninfer), with source-level changes to speculative decoding, CPU/GPU round buffers, CUDA Graph management, and the DFlash2 verification kernels. Cinference modifies the native engine itself, not just its launch flags.

## What changed

- **MTP-10 decoding:** raised the draft window from 5 to 10 tokens. Longer proposals let the engine emit more tokens per verification round when the drafts are accepted.
- **Capture-based CUDA Graph reuse:** reworked MTP graph matching to use the captured node types and kernel functions. Profiles with matching signatures and batch sizes share an executable, rather than relying only on planned context ranges.
- **Expanded CPU/GPU round handling:** enlarged draft and token-position buffers and updated native validation for the longer windows. This carries MTP-10 through the decoding path, not just the command-line options.
- **Faster DFlash2 verification:** rewrote the verify-width kernels behind fafstmobel's…

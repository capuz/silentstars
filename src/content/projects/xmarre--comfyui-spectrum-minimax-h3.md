---
repo: "xmarre/ComfyUI-Spectrum-MiniMax-H3"
name: "ComfyUI-Spectrum-MiniMax-H3"
description: "Spectrum-based acceleration for ComfyUI’s native MiniMax H3 audio-video model. Forecasts post-transformer features with Chebyshev ridge regression to skip selected transformer evaluations, with adaptive scheduling, sampler-aware safeguards, CPU/VRAM history storage, and native fallbacks."
readmeQualityOk: true
url: "https://github.com/xmarre/ComfyUI-Spectrum-MiniMax-H3"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 164
forks: 5
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-03T20:51:37Z"
lastCommitAt: "2026-08-05T06:07:43Z"
lastReleaseAt: "2026-08-04T09:37:00Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 18
maintainers: ["xmarre"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec8f27353df5eb5d533d133dca66639ea2bac00b45c9c39b353d581a05557808/xmarre/ComfyUI-Spectrum-MiniMax-H3"
---

# ComfyUI Spectrum MiniMax H3

Spectrum-style spectral feature forecasting for ComfyUI's native MiniMax H3 audio-video model.

This custom node reduces expensive H3 transformer evaluations during sampling. It fits a Chebyshev ridge model to actual post-transformer hidden features and forecasts those features on selected future solver steps. The current-step native MiniMax H3 output heads, video reconstruction, audio reconstruction, sigma mapping, and return structure still execute on every step.

This repository is independent from [ComfyUI-Spectrum-Proper](https://github.com/xmarre/ComfyUI-Spectrum-Proper), which remains a dedicated FLUX implementation.

## Quality and output fidelity

Spectrum is an approximate accelerator, not a lossless or bit-identical execution path. Forecasted steps change the denoising trajectory, so outputs can differ even when the prompt, seed, model, sampler, and workflow are otherwise identical.

Initial testing did not reveal obvious differences in several outputs, but broader exact-seed A/B testing has since exposed two distinct kinds of changes:

- **Trajectory deviations:** during fast or brief actions, the motion, pose, timing, gaze, or action…

---
repo: "maxime-leiber/dstft"
name: "dstft"
description: "Differentiable short-time Fourier transform (DSTFT): Gradient-based parameters tuning for adaptive time-frequency representation. DSTFT is a neural network layer whose weights are its parameters (e.g. window and hop lengths)."
readmeQualityOk: true
url: "https://github.com/maxime-leiber/dstft"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 52
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-04-27T14:03:02Z"
lastCommitAt: "2026-08-13T05:18:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 49
maintainers: ["maxime-leiber", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e86121e03430e6566569e7b115bba125a2212eab753a624278867529b135456/maxime-leiber/dstft"
discussionCount: 0
---

# DSTFT

**dstft** implements a **Differentiable Short-Time Fourier Transform**: a PyTorch `nn.Module` (`DSTFT`) that computes a spectrogram conceptually like `torch.stft`, except every parameter that normally has to be fixed up front — the analysis window's length, and the spacing between frames — can instead be a learnable tensor. Because the whole transform is implemented with differentiable PyTorch ops, gradients flow from a downstream loss (e.g. "make this spectrogram sparse") back into the window length or hop length, letting an optimizer discover a time-frequency tiling adapted to the signal instead of a hand-picked one.

Unlike `torch.stft`, `DSTFT` is initialized once per signal length (`dstft.initialize(x)`) and returns both the magnitude spectrogram and the complex transform (`spec, stft = dstft(x)`) — see the usage example below. Each instance is tied to the signal length it was first initialized with; reinitializing with a different length raises `RuntimeError` (create a new instance instead).

---

Gradient-based optimization of DSTFT parameters (example: window length).

---

## Features

- Differentiable STFT (learnable window lengths, and hop lengths)
- FFT for…

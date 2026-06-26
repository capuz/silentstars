---
repo: "interlive-team/STRIDE"
name: "STRIDE"
description: "[ECCV 2026] Official Implementation of STRIDE"
url: "https://github.com/interlive-team/STRIDE"
homepage: "https://interlive-team.github.io/STRIDE"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-28T09:30:20Z"
lastCommitAt: "2026-06-26T06:46:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 18
maintainers: ["klae01", "jhkim0911"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7dfaf5ec0b1433a76cb2d4c4314609e436ae106580c0f072f7ebf4878cfef5e/interlive-team/STRIDE"
---

# STRIDE

### When to Speak Meets Sequence Denoising for Streaming Video Understanding

**European Conference on Computer Vision, 2026**

[\[📜 Paper\]](https://arxiv.org/abs/2603.27593)
[\[🌐 Project Page\]](https://interlive-team.github.io/STRIDE)
[\[🤗 Models\]](https://huggingface.co/interlive)

Junho Kim<sup>1*</sup>, Hosu Lee<sup>2*</sup>, James M. Rehg<sup>1</sup>, Minsu Kim<sup>3†</sup>, Yong Man Ro<sup>2†</sup>

<sup>1</sup>UIUC · <sup>2</sup>KAIST · <sup>3</sup>Google DeepMind

</div>

## Introduction

**STRIDE** (**S**tructured **T**emporal **R**efinement with **I**terative **DE**noising) is a lightweight proactive activation model for streaming video understanding. It employs a masked diffusion module at the activation interface to jointly predict and progressively refine activation signals over a sliding temporal window, producing temporally coherent proactive responses in online streaming scenarios.

## TODO

- [x] Paper release
- [x] Model weights release ([STRIDE-2B](https://huggingface.co/interlive/STRIDE-2B))
- [x] [Demo website](https://interlive-team.github.io/STRIDE)
- [x] Training code
- [x] Evaluation scripts

## Training

### 1. Download the videos…

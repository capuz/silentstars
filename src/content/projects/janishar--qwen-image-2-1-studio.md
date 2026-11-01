---
repo: "janishar/qwen-image-2.1-studio"
name: "qwen-image-2.1-studio"
description: "Local Qwen-Image-2.1 studio for Apple Silicon: text-to-image, multi-image editing and prompt enhancing, with a CLI and a helmstudio web UI."
readmeQualityOk: true
url: "https://github.com/janishar/qwen-image-2.1-studio"
homepage: "https://helmstudio.in"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [48, 26]
topics: ["apple-silicon", "diffusion", "generative-ai", "image-editing", "local-ai", "macos", "mps", "prompt-enhancement", "pytorch", "qwen-image"]
stars: 60
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-09-23T00:47:22Z"
lastCommitAt: "2026-11-01T22:57:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 19
maintainers: ["janishar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1382519703/a0695c00-a15c-44e1-8372-8a22a13bb72c"
---

# qwen image studio

**A command line and a local web studio for [Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** —
text-to-image and multi-image editing on Apple Silicon, with Qwen's PE prompt
enhancers.

`qwen-image-2-1` is a small PyTorch CLI around diffusers' `QwenImage21Pipeline`:
it loads the weights straight onto the GPU, rewrites the prompt with the 9B
enhancer when asked, and frees the enhancer before the image model loads. The
studio in `web/` is a standard-library Python server that drives that CLI — it
builds the arguments, queues renders and streams their progress, in a browser
tab, nothing sent off your machine. The studio runs as a
[helmstudio][helmstudio] studio and only that way: helmstudio installs it,
launches it, keeps its sessions, and takes every finished take into the library
it shares with the other studios. The CLI needs none of that.

## Table of contents

- [Requirements](#requirements) · [Weights](#weights)
- [The studio](#the-studio) — [Path A: the launcher](#path-a-install-from-the-launcher-recommended) ·
  [Path B: a checkout](#path-b-run-from-a-checkout) ·
  [Using it](#using-the-studio) · [What helmstudio adds](#what-helmstudio-adds)…

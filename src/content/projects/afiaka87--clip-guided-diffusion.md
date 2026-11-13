---
repo: "afiaka87/clip-guided-diffusion"
name: "clip-guided-diffusion"
description: "A CLI tool/python module for generating images from text using guided diffusion and CLIP from OpenAI."
readmeQualityOk: true
url: "https://github.com/afiaka87/clip-guided-diffusion"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["multimodal", "image-generation", "text-to-image-synthesis", "text-to-image", "openai", "openai-clip", "deep-learning", "artificial-intelligence", "diffusion", "multimodality"]
stars: 459
forks: 61
openIssues: 9
closedIssues: 7
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2021-07-21T02:04:09Z"
lastCommitAt: "2026-11-13T18:33:15Z"
lastReleaseAt: "2021-11-06T06:45:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 86
undervaluedScore: 32
maintainers: ["afiaka87"]
openGraphImageUrl: "https://opengraph.githubassets.com/a33f4822978da92d7406a662bd5a02d1b5fa56407a0f32533e899a615665601c/afiaka87/clip-guided-diffusion"
---

# CLIP Guided Diffusion
From [@crowsonkb](https://github.com/crowsonkb).

The Replicate demo runs the version from October 2022, which has none of the speedups, models or options this README measures.

Disclaimer: I'm redirecting efforts to [pyglide](https://replicate.com/afiaka87/pyglide) and may be slow to address bugs here.

I also recommend looking at [@crowsonkb's](https://github.com/crowsonkb) [v-diffusion-pytorch](https://github.com/crowsonkb/v-diffusion-pytorch).

See more generations, each with its command, in the [Gallery](https://github.com/afiaka87/clip-guided-diffusion/blob/HEAD/images/README.md).

## Install

Requires [uv](https://docs.astral.sh/uv/getting-started/installation/).

```sh
git clone https://github.com/afiaka87/clip-guided-diffusion.git
cd clip-guided-diffusion
uv sync
```

## Run

`uv run cgd -gif -freq 3 -size 256 -clip ViT-B/32+PE-Core-B-16 -n 90 -gl 0.99 -cutn 4 "A monarch butterfly on a purple flower"`

That is the classic pipeline: an ImageNet model steered by CLIP, with no extra dependencies to download. It conditions the model on the ImageNet class closest to the prompt, and prints it: `monarch butterfly`, here. `uv run cgd -gif "A monarch…

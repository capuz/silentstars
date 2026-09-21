---
repo: "hodanov/stable-diffusion-cli-on-modal"
name: "stable-diffusion-cli-on-modal"
description: "This is a script for running Stable Diffusion on Modal."
readmeQualityOk: true
url: "https://github.com/hodanov/stable-diffusion-cli-on-modal"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-21T02:34:19Z"
lastCommitAt: "2026-09-21T09:14:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 75
maintainers: ["hodanov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fe62ff85d4e608c3e9fa22498816c7a9ed31598cba754c5b22ed92cfaf3c537/hodanov/stable-diffusion-cli-on-modal"
---

[日本語版 README はこちら](https://github.com/hodanov/stable-diffusion-cli-on-modal/blob/HEAD/README_ja.md)

# Stable Diffusion CLI on Modal

This is a Diffusers-based script for running Stable Diffusion on [Modal](https://modal.com/). This script has no WebUI and only works with CLI. It performs txt2img inference and can upscale/refine outputs.

## Features

1. Image generation using txt2img or img2img.
   
   Available version:
   - SDXL (only)

2. Upscaling

| Before upscaling                                                 | After upscaling                                                  |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <img src="assets/20230708204347_1172778945_0_0.png" width="300"> | <img src="assets/20230708204347_1172778945_0_2.png" width="300"> |

## Requirements

The app requires the following to run:

- python: >= 3.12
- [uv](https://docs.astral.sh/uv/) (manages the virtual environment and dependencies)
- A token for Modal.

This project uses `uv` to pin the local dependencies (mainly the `modal` CLI) via `pyproject.toml` and `uv.lock`. After installing `uv`, create the…

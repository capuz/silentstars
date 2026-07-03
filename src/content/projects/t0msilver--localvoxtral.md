---
repo: "T0mSIlver/localvoxtral"
name: "localvoxtral"
description: "Native macOS menu bar app for realtime dictation with optional LLM polishing. Connects to any  OpenAI Realtime-compatible backend — fully local on Apple Silicon with voxmlx + mlx-lm."
url: "https://github.com/T0mSIlver/localvoxtral"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
stars: 40
forks: 4
openIssues: 2
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-15T21:35:31Z"
lastCommitAt: "2026-07-03T12:22:17Z"
lastReleaseAt: "2026-03-04T22:12:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 16
maintainers: ["T0mSIlver"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158755856/886342a3-f30c-4bde-bf5a-898833b5c489"
---

# localvoxtral

</p>

</p>

localvoxtral is a native macOS menu bar app for realtime dictation.
It keeps the loop simple: start dictation, speak, get text fast.
Unlike Whisper-based tools that transcribe after you stop speaking, Voxtral Realtime streams text as audio arrives, so words appear while you're still talking.
On Apple Silicon, `localvoxtral` + `voxmlx` + `mlx-lm` provides a fully local path (audio + inference + LLM polishing stay on-device), improving privacy and avoiding API costs.

It connects to any OpenAI Realtime-compatible endpoint. Recommended backends are `voxmlx` (Apple Silicon) and `vLLM` (NVIDIA GPU).
LLM Polishing connect to any OpenAI /chat/completions endpoint. The recommended backend is `mlx-lm` (Apple Silicon).

Built for Mistral AI's [Voxtral Mini 4B Realtime](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) model, but it works with any OpenAI-compatible Realtime API backend and model.

## Features

- Global shortcut with selectable behavior: `Toggle` (press-to-start/stop) or `Push to Talk` (hold-to-dictate)
- Native menu bar app with instant open and visual feedback with the icon
- Output modes: overlay buffer (commit on stop) or live…

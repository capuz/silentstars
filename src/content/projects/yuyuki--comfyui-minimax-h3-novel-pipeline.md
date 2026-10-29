---
repo: "yuyuki/ComfyUI-Minimax_H3_Novel_Pipeline"
name: "ComfyUI-Minimax_H3_Novel_Pipeline"
description: "Provide concise instructions for AI coding agents to implement a ComfyUI plugin   that reproduces the behavior of the three-step novel reference pipeline in this   repository as ComfyUI nodes"
readmeQualityOk: true
url: "https://github.com/yuyuki/ComfyUI-Minimax_H3_Novel_Pipeline"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-30T18:45:57Z"
lastCommitAt: "2026-10-29T21:24:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["yuyuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/5782cf4d60d321b06a4c042a9847e470a18830ab3ac731229b70523f0cc03739/yuyuki/ComfyUI-Minimax_H3_Novel_Pipeline"
---

# MiniMax H3 Novel Pipeline

Turn novel chapters into organized character, location and object references, then prepare scene prompts for MiniMax H3. The plugin helps keep details consistent across chapters. It creates text and prompts; it does not generate images, audio or video.

## Install

1. Install [ComfyUI](https://github.com/comfyanonymous/ComfyUI) and [LM Studio](https://lmstudio.ai/).
2. Clone this repository into `ComfyUI/custom_nodes/`:

   ```sh
   git clone https://github.com/yuyuki/ComfyUI-Minimax_H3_Novel_Pipeline.git custom_nodes/minimax_h3_novel_pipeline
   ```

3. Install the plugin dependencies with the same Python environment used by ComfyUI:

   ```sh
   python -m pip install -r custom_nodes/minimax_h3_novel_pipeline/requirements.txt
   ```

4. Restart ComfyUI and refresh the browser.

## First run

1. In LM Studio, load a supported Qwen or Mistral model and start its local API server.
2. In **ComfyUI Settings → MiniMax H3 Novel → LM Studio**, set the API key. If authentication is off in LM Studio, use `lm-studio`.
3. Add **LM Studio Configuration** to your workflow. The default server address is `http://127.0.0.1:1234/v1`. For another address, set the same…

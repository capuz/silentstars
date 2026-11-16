---
repo: "deluxebear/colabllm"
name: "colabllm"
description: "Deploy and operate model runtimes on Google Colab with a unified CLI"
originalDescription: "Deploy and operate model runtimes on Google Colab with a unified CLI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/deluxebear/colabllm"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [55, 44]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-03T08:01:34Z"
lastCommitAt: "2026-11-16T04:25:32Z"
lastReleaseAt: "2026-11-14T14:48:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["deluxebear"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c21e6858dfbdc587eaa65d18d57dab17e85089f9d841f0ff830e0b42c9784c9/deluxebear/colabllm"
---

# Google Colab Large Model Services

Run large model services on Google Colab GPUs, with public access provided through Cloudflare Tunnel (default) or FRP + Caddy.
Follows the convention **"one service = one notebook (`src/colabllm/services/<name>.ipynb`) + one execution script (`src/colabllm/services/<name>.py`)"**.

## Feature Walkthrough Video

> **Narrated panoramic tour (02:22 · IndexTTS-2.5 voiceover)**: Click the preview image above to open the [GitHub online video player](https://github.com/deluxebear/colabllm/blob/master/docs/assets/colabllm-walkthrough.mp4) and watch the full hands-on demo of the unified CLI, Web fleet management, and the **AI Playground (Copilot Studio · same-origin secure proxy · multimodal and proprietary API console)** ([download the MP4 directly](https://github.com/deluxebear/colabllm/raw/master/docs/assets/colabllm-walkthrough.mp4)).

## Unified Command Entry

Users install through the distribution package, so there is no need to clone the source. Download the wheel from [GitHub Releases](https://github.com/deluxebear/colabllm/releases) and install it (a private repository requires the appropriate access permissions):

```bash
uv tool install…

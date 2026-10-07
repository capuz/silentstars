---
repo: "OmniJev/OneJev"
name: "OneJev"
description: "🚀🚀 A multimodal System One decision model that gives calibrated answers to typed questions about screens, photos, video and text in one forward pass."
readmeQualityOk: true
url: "https://github.com/OmniJev/OneJev"
homepage: "https://omnijev.github.io/OneJev/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["calibration", "computer-use", "decision-model", "gui-agent", "huggingface", "jev", "llm", "multimodal", "pytorch", "qwen"]
stars: 139
forks: 17
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-27T14:27:14Z"
lastCommitAt: "2026-10-07T10:31:06Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 18
maintainers: ["unikcc"]
openGraphImageUrl: "https://opengraph.githubassets.com/c64f6ccc41e8dee2dc155317ca95ef8268c4576254296a112369ae51d5052ce9/OmniJev/OneJev"
---

OneJev is a multimodal System One decision model. It returns calibrated probabilities for typed questions about
screenshots, photos, videos and text in a single forward pass. Available in 0.8B, 4B, 9B and 27B.

## Results

Accuracy (%). The OneJev test set is held out from OneJev training. Jev 1.13 uses published text-only scores;
Jev-Omni and Qwen3.8-27B thinking were evaluated by us.

## Quick start

Choose one backend, then run the Python example below.

### Option A: PyTorch

For NVIDIA GPUs. Supports text, images and video.

```bash
pip install "qev[torch] @ git+https://github.com/OmniJev/OneJev.git"
qev serve --model OmniJev/OneJev-4B --port 8000
```

### Option B: llama.cpp

For GGUF models. Supports text and images; use PyTorch for video. Install
[llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/install.md) first (`brew install llama.cpp` on macOS).

```bash
pip install git+https://github.com/OmniJev/OneJev.git
qev serve --gguf mradermacher/OneJev-4B-GGUF:Q8_0 --port 8000
```

### Send a request

Both backends serve the same API at `http://localhost:8000`. In another terminal, run this example with your own
`screenshot.png`:

```python
from qev import…

---
repo: "ServeurpersoCom/acestep.cpp"
name: "acestep.cpp"
description: "Portable C++17 implementation of ACE-Step 1.5 AI Music Generator using GGML. Text + lyrics in, stereo 48kHz MP3 or WAV out. Runs on CPU, CUDA, ROCm, Metal, Vulkan."
url: "https://github.com/ServeurpersoCom/acestep.cpp"
language: "C++"
languages: ["C++", "C"]
languagePcts: [62, 24]
stars: 351
forks: 63
openIssues: 19
closedIssues: 32
watchers: 8
contributors: 11
recentReleases: 0
createdAt: "2026-02-09T01:37:27Z"
lastCommitAt: "2026-07-04T19:19:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 24
maintainers: ["ServeurpersoCom", "noctrex"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b5d648c6d3abb5841f4a315d4833c43de013d3fa92a3e4b221e5879b3ddf64a/ServeurpersoCom/acestep.cpp"
discussionCount: 14
---

# acestep.cpp

Local AI music generation server with browser UI, powered by GGML.
Describe a song, get stereo 48kHz audio. Runs on CPU, CUDA, Metal, Vulkan.

## Download models

Grab one GGUF of each type from Hugging Face and drop them in the `models/` folder:

https://huggingface.co/Serveurperso/ACE-Step-1.5-GGUF/tree/main

| Type | Pick one | Size |
|------|----------|------|
| LM | acestep-5Hz-lm-4B-Q8_0.gguf | 4.2 GB |
| Text encoder | Qwen3-Embedding-0.6B-Q8_0.gguf | 748 MB |
| DiT | acestep-v15-turbo-Q8_0.gguf | 2.4 GB |
| VAE | vae-BF16.gguf | 322 MB |

Three LM sizes available: 0.6B (fast), 1.7B, 4B (best quality).
Multiple DiT variants: turbo (8 steps), sft (50 steps, higher quality), base, shift1, shift3, continuous.

Alternative: `./models.sh` downloads the default set automatically (needs `pip install hf`).

## Build

```
git clone --recurse-submodules https://github.com/ServeurpersoCom/acestep.cpp.git
cd acestep.cpp
```

### Windows

Pre-built binaries (until CI is set up): https://www.serveurperso.com/temp/acestep.cpp-win64/

To build from source, install
[Visual C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
(select "Desktop…

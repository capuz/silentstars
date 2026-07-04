---
repo: "ServeurpersoCom/omnivoice.cpp"
name: "omnivoice.cpp"
description: "Local AI text-to-speech with voice cloning and voice design, powered by GGML. C++17 port of OmniVoice (k2-fsa/OmniVoice). 646 languages, 24 kHz mono output, runs on CPU, CUDA, ROCm, Metal, Vulkan."
url: "https://github.com/ServeurpersoCom/omnivoice.cpp"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 119
forks: 25
openIssues: 10
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-25T18:01:21Z"
lastCommitAt: "2026-07-04T19:20:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 26
maintainers: ["ServeurpersoCom", "Comgenie"]
openGraphImageUrl: "https://opengraph.githubassets.com/de12d0bd8b87074ecef65cd1077608f1564fb85931736b5b35d998411bf68aba/ServeurpersoCom/omnivoice.cpp"
---

# omnivoice.cpp

Local AI text-to-speech with voice cloning and voice design, powered
by GGML. C++17 port of OmniVoice (k2-fsa/OmniVoice). 646 languages,
24 kHz mono output, runs on CPU, CUDA, ROCm, Metal, Vulkan.

## Features

- Voice cloning from a reference WAV plus its transcript
- Voice design via attribute keywords (gender, age, pitch, style,
  volume, emotion)
- Auto voice with consistent speaker identity across long inputs
- Long-form synthesis with punctuation-aware text chunking, voice
  prompt promotion, cross-fade and pydub-strict silence removal
- Bit deterministic generation in greedy mode, seedable Philox PRNG
  for stochastic sampling
- Q8_0 quantisation of the 612 M parameter Qwen3 backbone
- Two CLI tools : `omnivoice-tts` (text -> WAV) and `omnivoice-codec`
  (WAV <-> RVQ codes)

## Build

```
git clone --recurse-submodules https://github.com/ServeurpersoCom/omnivoice.cpp.git
cd omnivoice.cpp
./buildcuda.sh                   # NVIDIA GPU
./buildvulkan.sh                 # AMD/Intel GPU (Vulkan)
./buildcpu.sh                    # CPU only
./buildall.sh                    # all backends, runtime DL loading
NVCC_CCBIN=g++-13 ./buildcuda.sh # rolling release distros…

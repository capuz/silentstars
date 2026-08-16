---
repo: "1bit-MONSTER/1bit-MONSTER"
name: "1bit-MONSTER"
description: "Model-agnostic, hardware-agnostic pure-C++ inference engine — one binary, NPU + GPU + CPU. 94% HF architecture coverage. Reverse-engineered AMD's closed-source Strix Halo NPU stack in 4 days. GGUF/ONNX/1BP. Zero Python. MIT."
readmeQualityOk: true
url: "https://github.com/1bit-MONSTER/1bit-MONSTER"
homepage: "http://1bit.monster/"
language: "C++"
languages: ["C++"]
languagePcts: [67]
topics: ["amd-strix-halo", "cplusplus-23", "local-llm", "mit-license", "model-agnostic", "npu-inference", "open-source-ai", "vulkan", "fused-engine", "xdna-2"]
stars: 16
forks: 4
openIssues: 48
closedIssues: 1020
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-19T20:11:06Z"
lastCommitAt: "2026-08-16T03:50:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["bong-water-water-bong"]
openGraphImageUrl: "https://opengraph.githubassets.com/faa124c3ec1c0e94a2821343ca0e0243f4c4bb91571052ac9e032fddc00aa973/1bit-MONSTER/1bit-MONSTER"
discussionCount: 1
---

## One binary to rule them all

<sub>("Sorry but not sorry." — bong-water-water-bong)</sub>

### 100% HF model coverage. Any hardware. One open-source, pure-C++ inference engine — NPU + GPU + CPU in a single binary. Model agnostic. Hardware agnostic. Zero Python.

**[Website](https://1bit.monster)** · **[Docs](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/README.md)** · **[Model families](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/model-families/README.md)** · **[Benchmarks](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/wiki/performance.md)** · **[JARVIS](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/jarvis.md)** · **[The story](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/journey.md)** · **[Roadmap](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/guides/roadmap.md)**

`engine online` · MIT · pure C++23 · no Python · 6 hardware targets

</div>

---

## Quick start

```bash
# build from source — no installer yet
git clone https://github.com/1bit-MONSTER/1bit-MONSTER
cd 1bit-MONSTER && cmake -B build && cmake --build build
./build/1bit zaya -m model.1bp -p "Hello world"
```

That is the whole…

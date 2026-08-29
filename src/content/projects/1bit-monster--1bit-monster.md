---
repo: "1bit-MONSTER/1bit-MONSTER"
name: "1bit-MONSTER"
description: "One engine, any model. 100% Hugging Face model coverage &  Zero python during runtime. "
readmeQualityOk: true
url: "https://github.com/1bit-MONSTER/1bit-MONSTER"
homepage: "https://1bit.monster"
language: "MLIR"
languages: ["MLIR", "C++"]
languagePcts: [38, 37]
topics: ["amd-strix-halo", "cplusplus-23", "mit-license", "model-agnostic", "open-source-ai", "vulkan", "xdna-2", "zero-python", "ai-inference", "gguf"]
stars: 17
forks: 6
openIssues: 30
closedIssues: 1107
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-19T20:11:06Z"
lastCommitAt: "2026-08-29T17:09:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["bong-water-water-bong", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/87511d78c8725ff56ffc54e9f48cde7dc3c98dd3cfd8545b82ad532cb6801d56/1bit-MONSTER/1bit-MONSTER"
discussionCount: 1
---

**[Website](https://1bit.monster)** · **[Community (Fluxer)](https://fluxer.gg/7wqCREKi)** · **[Join Discord](https://discord.gg/Qy38d4Xu2h)** · **[Docs](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/README.md)** · **[Model families](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/model-families/README.md)** · **[Benchmarks](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/wiki/performance.md)** · **[JARVIS](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/jarvis.md)** · **[The story](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/journey.md)** · **[Roadmap](https://github.com/1bit-MONSTER/1bit-MONSTER/blob/HEAD/docs/guides/roadmap.md)**

pure C++23 · no Python · MIT

</div>

---

**One engine. Any model. Zero Python.**

A pure-C++23 inference engine that runs 100% of HuggingFace's text-generation checkpoints on NPU, GPU, or CPU — with the Lemonade SDK side by side, in sync with upstream.

## Quick start

```bash
git clone https://github.com/1bit-MONSTER/1bit-MONSTER
cd 1bit-MONSTER && cmake -B build && cmake --build build
./build/1bit zaya -m model.1bp -p "Hello world"
```

That's the whole install. No runtime, no…

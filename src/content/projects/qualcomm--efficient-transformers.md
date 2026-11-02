---
repo: "qualcomm/efficient-transformers"
name: "efficient-transformers"
description: "This library empowers users to seamlessly port pretrained models and checkpoints on the HuggingFace (HF) hub (developed using HF transformers library) into inference-ready formats that run efficiently on Qualcomm Cloud AIxx (AI100, AI200 and so on) accelerators."
readmeQualityOk: true
url: "https://github.com/qualcomm/efficient-transformers"
homepage: "https://qualcomm.github.io/efficient-transformers/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["accelerator", "ai", "cloud", "llm", "qualcomm"]
stars: 102
forks: 114
openIssues: 6
closedIssues: 14
watchers: 5
contributors: 69
recentReleases: 2
createdAt: "2024-03-30T00:07:20Z"
lastCommitAt: "2026-11-02T15:17:05Z"
lastReleaseAt: "2026-09-19T09:31:34Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 58
maintainers: ["quic-rishinr", "vbaddi", "asmigosw"]
openGraphImageUrl: "https://opengraph.githubassets.com/805796439a2e4fd45a03ec3b84cedda4894dc6d5c1e8157fbb1fada934aec58f/qualcomm/efficient-transformers"
---

---
# Efficient Transformers Library 
---

*Latest news* :fire: <br>

- [07/2026] Added support for Kimi-K2.5 vision-language model [moonshotai/Kimi-K2.5](https://huggingface.co/moonshotai/Kimi-K2.5) via `QEFFAutoModelForImageTextToText`.
- [07/2026] Added `dynamo` flag to `QEFFAutoModelForCausalLM.export()` to support `torch.onnx.export` dynamo-based ONNX export for CausalLM models
- [06/2026] Added support for Gemma4 models, [google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B), [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)
- [06/2026] Added support for Qwen3.6 model [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)
- [06/2026] Added support for Qwen3.5 model[Qwen/Qwen3.5-0.8B](https://huggingface.co/Qwen/Qwen3.5-0.8B)
- [06/2026] Added support for Qwen3 VL and Qwen3 MoE VL models, [Qwen/Qwen3-VL-30B-A3B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Instruct), [Qwen/Qwen3-VL-32B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct)
- [06/2026] Added support for GLM-4.5 MoE model and enabled its disaggregated mode [zai-org/GLM-4.5](https://huggingface.co/zai-org/GLM-4.5)
- [06/2026] Enabled…

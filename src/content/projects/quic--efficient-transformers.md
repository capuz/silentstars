---
repo: "quic/efficient-transformers"
name: "efficient-transformers"
description: "This library empowers users to seamlessly port pretrained models and checkpoints on the HuggingFace (HF) hub (developed using HF transformers library) into inference-ready formats that run efficiently on Qualcomm Cloud AIxx (AI100, AI200 and so on) accelerators."
readmeQualityOk: true
url: "https://github.com/quic/efficient-transformers"
homepage: "https://quic.github.io/efficient-transformers/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["accelerator", "ai", "cloud", "llm", "qualcomm"]
stars: 98
forks: 103
openIssues: 4
closedIssues: 14
watchers: 5
contributors: 46
recentReleases: 2
createdAt: "2024-03-30T00:07:20Z"
lastCommitAt: "2026-09-03T08:13:21Z"
lastReleaseAt: "2026-08-26T08:57:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 60
maintainers: ["quic-rishinr", "vbaddi", "ochougul"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fcc21eba89b1e12bbc0789791b0b9b1c91bc557a3b8c59e86b230b6ac8b0a77/quic/efficient-transformers"
---

</p>

</p>

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

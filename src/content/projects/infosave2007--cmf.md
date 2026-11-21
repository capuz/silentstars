---
repo: "infosave2007/cmf"
name: "cmf"
description: "One backbone, many specialists. CMF is a self-describing, memory-mappable single-file format and a dependency-free runtime for quantized LLMs — zero-copy execution on CPU or GPU (Vulkan · Metal · DX12) that overlays task-specialized skills onto one shared model, with no per-model duplication."
readmeQualityOk: true
url: "https://github.com/infosave2007/cmf"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 63
forks: 8
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-07T13:14:47Z"
lastCommitAt: "2026-11-21T13:29:33Z"
lastReleaseAt: "2026-07-08T06:11:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 36
maintainers: ["infosave2007", "andrea-tomassi"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cd9a87f78091610ed5c26812c10b55ac3438bfd581e8fbe7efe44b09259abf9/infosave2007/cmf"
---

Русский: [README.ru.md](https://github.com/infosave2007/cmf/blob/HEAD/README.ru.md) · 中文: [README.zh.md](https://github.com/infosave2007/cmf/blob/HEAD/README.zh.md)

# CMF — Cortiq Model Format

CMF is an auditable model container: one file can hold weights, tokenizer,
chat metadata, task masks and skill overlays for inference without a large
framework runtime.

## CMF against other formats

The table scores the file format and its reference runtime out of 100. Each
criterion gets 0–100 and a weight. The weights are ours and printed, so you can
recompute the totals for your own needs. Ecosystem size (how many models are
already published, how many third-party tools exist) is not a property of the
file, so it is not scored.

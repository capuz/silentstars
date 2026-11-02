---
repo: "tijs/local-model-bench"
name: "local-model-bench"
description: "Reproducible local LLM benchmarks on affordable Apple Silicon Macs: synthetic Peixinho workflows, isolated Python automation, tool use, speed, memory and cache behavior with Mei/MLX and llama.cpp."
readmeQualityOk: true
url: "https://github.com/tijs/local-model-bench"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["apple-silicon", "benchmarking", "llama-cpp", "llm-evaluation", "local-llm", "mlx", "tool-calling"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-23T15:29:25Z"
lastCommitAt: "2026-11-02T17:57:09Z"
lastReleaseAt: "2026-11-01T09:22:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["tijs"]
openGraphImageUrl: "https://opengraph.githubassets.com/5759b26d8d3394776411055c4fce0fec6b1d6e082dff7bb8c67b9209dc17ee2f/tijs/local-model-bench"
---

# local-model-bench

Reproducible local LLM benchmarks on affordable Apple Silicon Macs. Compare
agent task quality, full-run time, memory and tool reliability with **Mei
(Swift/MLX)** and **llama.cpp (GGUF)**. Peixinho is the intended future app;
it is still a design, so the current tests use synthetic household workflows
and real, contained Python automation.

Current release: **benchmark-v9.10.2** — one averaged point per model from the latest
repeated benchmark runs. [Release notes](https://github.com/tijs/local-model-bench/blob/HEAD/docs/releases/benchmark-v9.10.2.md).
All eight measurements use frozen **benchmark-v9.10**; the patch release adds
reports and data without changing the measured tasks or runtime behavior.

## Four retained contenders

All four ran fresh twice on the same 32 GiB Apple M1 Max, using seeds 17 and 29.
Each run covers 12 household workflows and 3 Python tasks. No older result was
substituted and no best repeat was selected.

| Profile / engine | Household success | Python success | Mean full-run time | Mean peak wired increase |
|---|---:|---:|---:|---:|
| Base Qwen3.6 / Mei (Swift/MLX) | 83.3% (20/24) | 66.7% (4/6) | 9.05 min | 20.00 GiB |
|…

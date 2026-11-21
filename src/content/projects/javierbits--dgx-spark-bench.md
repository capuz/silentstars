---
repo: "javierbits/dgx-spark-bench"
name: "dgx-spark-bench"
description: "Real, reproducible LLM inference benchmarks on the NVIDIA DGX Spark — parallel agent sessions, tok/s and latency under load, with an interactive dashboard and one-command recipes"
readmeQualityOk: true
url: "https://github.com/javierbits/dgx-spark-bench"
homepage: "https://jvr0x.com/dgx-spark-bench/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [51, 40]
topics: ["agentic-ai", "benchmark", "dgx-spark", "grace-blackwell", "inference", "llama-cpp", "llm", "local-llm", "nvfp4", "vllm"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T10:56:44Z"
lastCommitAt: "2026-11-21T13:30:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 28
maintainers: ["javierbits"]
openGraphImageUrl: "https://opengraph.githubassets.com/a622b14482c3cd48c648e0b20c2ed9e30bf7cb826222c05fc636ca015931500e/javierbits/dgx-spark-bench"
---

# dgx-spark-bench

Real, reproducible LLM inference benchmarks on the **NVIDIA DGX Spark** (GB10 Grace Blackwell,
128 GB unified LPDDR5x @ 273 GB/s) — with a focus on what the box actually does under **agentic
workloads**: many parallel long-context sessions, not just single-stream chat.

**📊 Live dashboard:** [javierbits.com/dgx-spark-bench](https://javierbits.com/dgx-spark-bench/)
**🎬 Related:** [tok-sim](https://javierbits.com/tok-sim/) — visual tokens/sec simulator

Every published number is a real run of this harness on real hardware. No projections, no
vendor numbers — and every series links to the exact recipe that produced it.

## How it works

```
lmswitch on <recipe>  ──►  harness/bench.py  ──►  results/<run>.json  ──►  dashboard
     (serves model            (concurrency          (schema-validated,       (GitHub Pages)
      on its own port)         sweep + metrics)      pinned provenance)
```

---
repo: "notaDestroyer/vllm-benchmark-suite"
name: "vllm-benchmark-suite"
description: "Benchmarking tool for vLLM inference performance with GPU monitoring"
readmeQualityOk: true
url: "https://github.com/notaDestroyer/vllm-benchmark-suite"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 54
forks: 8
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-10-16T10:24:26Z"
lastCommitAt: "2026-11-06T11:23:07Z"
lastReleaseAt: "2026-11-06T10:38:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 41
maintainers: ["claude", "notaDestroyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/c431ea74ecce95d2a0dd9bf7916efaa386f77c5f4d6f1557eb7cd027ed5e3204/notaDestroyer/vllm-benchmark-suite"
---

# vLLM Benchmark Suite

Point it at a vLLM or SGLang server, get tok/s, TTFT, latency percentiles, a roofline bottleneck verdict and a Reddit-ready summary. Compare quants, compare engines, and know whether the difference is real or noise.

```bash
pip install vllm-benchmark-suite
vllm-bench --url http://localhost:8000 --quick -y
```

Five minutes later you have a score, a bottleneck diagnosis, charts, an HTML report and a JSON file with every number. `llm-bench` is the same command under a shorter name.

---

## Why this and not a script with `time.time()`

Most "my 3090 does X tok/s" posts measure one thing, once, with one concurrent request. This tool:

- **Hits the server properly.** True async concurrency via `aiohttp`, real Time-to-First-Token from the SSE stream, and prefill vs decode throughput measured separately instead of guessed from a ratio.
- **Counts tokens with the model's tokenizer**, not `len(text) // 4`. Use `--tokenizer` for gated or locally served models.
- **Knows what it is benchmarking.** Dense or MoE, active vs total parameters, GQA/MQA, KV-cache bytes per token. That feeds a roofline model that tells you whether each load point is bandwidth-bound,…

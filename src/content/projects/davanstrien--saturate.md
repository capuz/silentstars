---
repo: "davanstrien/saturate"
name: "saturate"
description: "Batch inference for datasets: rows in, any OpenAI-compatible endpoint, resumable parquet out. Congestion-aware concurrency — no tuning."
readmeQualityOk: true
url: "https://github.com/davanstrien/saturate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["batch-inference", "huggingface", "llm-inference", "openai-api", "parquet", "sglang", "vllm"]
stars: 6
forks: 0
openIssues: 15
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-07-27T19:01:09Z"
lastCommitAt: "2026-10-29T10:36:28Z"
lastReleaseAt: "2026-09-02T15:00:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 37
maintainers: ["davanstrien"]
openGraphImageUrl: "https://opengraph.githubassets.com/572a634049f5c987f481a3c9a7654e1cb254c10dc6b8da57f7b4bac64d156184/davanstrien/saturate"
---

# saturate

**Data → model → nicer data.** Run every row of a dataset — or every file in a bucket —
through a model: OCR a corpus of page scans, embed 10M texts, classify, extract,
translate, synthesize. What comes out is a dataset (resumable parquet you can publish),
not a pile of responses. Any OpenAI-compatible endpoint in the middle.

You point it at an endpoint you control — a vLLM server you just started, a SGLang Job,
TEI, an Inference Endpoint — and give it two functions: one that turns a row into a
request, one that turns a response into output columns. It handles everything between:
how many requests to keep in flight (congestion-aware, like TCP — it finds the endpoint's
sustainable throughput and holds it there; you never pick a concurrency number), retries,
crash-safe output, and resume. Killing it at any point is fine. Re-running the same
command is always safe.

```bash
uv pip install 'saturate[hf]'   # or: pip install 'saturate[hf]'
# the [hf] extra pulls huggingface_hub + datasets: hf:// output paths and Hub dataset
# input (dataset_rows); plain saturate works with your own iterables + local output
```

## Quickstart: one model, one Job, one dataset

The most…

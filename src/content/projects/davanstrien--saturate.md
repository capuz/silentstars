---
repo: "davanstrien/saturate"
name: "saturate"
description: "Batch inference for datasets: rows in, any OpenAI-compatible endpoint, resumable parquet out. Congestion-aware concurrency — no tuning."
readmeQualityOk: true
url: "https://github.com/davanstrien/saturate"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["batch-inference", "huggingface", "llm-inference", "openai-api", "parquet", "sglang", "vllm"]
stars: 59
forks: 2
openIssues: 14
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-27T19:01:09Z"
lastCommitAt: "2026-11-27T12:55:27Z"
lastReleaseAt: "2026-11-27T13:00:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 87
undervaluedScore: 37
maintainers: ["davanstrien", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3011cbdffb8188d93c7566876713a7c7e3f32690fe67b02a10edd7ba1d49f9a/davanstrien/saturate"
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
```

The `[hf]` extra adds `huggingface_hub` and `datasets`, for `hf://` outputs and `dataset_rows`.
Plain `saturate` works with your own iterables and local output.

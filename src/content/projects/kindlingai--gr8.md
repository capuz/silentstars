---
repo: "kindlingai/gr8"
name: "gr8"
description: "GLM-5.3 (full) on 3-6 DGX Sparks (GB10): a from-scratch CUDA inference engine"
readmeQualityOk: true
url: "https://github.com/kindlingai/gr8"
language: "Cuda"
languages: ["Cuda"]
languagePcts: [43]
stars: 43
forks: 9
openIssues: 29
closedIssues: 14
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-10-10T16:50:01Z"
lastCommitAt: "2026-10-29T05:50:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 32
maintainers: ["mmastrac", "coffee-the-dev", "knapcio"]
openGraphImageUrl: "https://opengraph.githubassets.com/635d519842d491fae5e8ffcadc7929dde459f1724ca7d5b1c94b15ee0f13f2ba/kindlingai/gr8"
---

# gr8: a super-fast local AI engine

Need help? Join us on discord: https://discord.gg/M7XTrRJW3

Full GLM-5.3 on DGX Spark (GB10). *Beta release. If you run it, please tell us what breaks: issues and PRs are welcome.*

gr8 is a from-scratch CUDA inference engine for the full GLM 5.3 model (MoE with 256 experts, MLA attention with the
sparse indexer, one MTP layer) on three to six DGX Spark (GB10) boxes, tensor-parallel across all of them. It
uses no vLLM, PyTorch or NCCL at serve time. Each box runs one `g6m4` process, the ranks talk over RoCE v2 through
their own verbs fabric, and an OpenAI-compatible API runs on the first box.

## Results

| | TP=3 | TP=4 | TP=5 | TP=6 |
|---|---|---|---|---|
| experts | `bit225`, 2.25 bpw | `home`, 3.25 bpw | `home`, 3.25 bpw | `home`, 3.25 bpw |
| drafting | MTP | DFlash2 or MTP | MTP | MTP |
| decode\*, code / prose | 41.1 / 31.7 tok/s | 52.1 / 34.2 tok/s | 51.0 / 38.0 tok/s | 57.4 / 43.1 tok/s‡ |
| aggregate\*, 2 / 4 streams | 50.6 / 63.8 tok/s | 54.0 / 69.0 tok/s | 61.8 / 76.3 tok/s | 67.6 / 85.5 tok/s‡ |
| prefill, 8K prompt, cold | 635 tok/s | 1,357 tok/s | 1,554 tok/s | 1,808 tok/s‡ |
| prefill, 8K prompt, cached | 58,655 tok/s | 60,129…

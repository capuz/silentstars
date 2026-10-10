---
repo: "TimoSaemann/ppas-vllm"
name: "ppas-vllm"
description: "Prefill-pressure adaptive scheduling for efficient long-context LLM serving in vLLM."
readmeQualityOk: true
url: "https://github.com/TimoSaemann/ppas-vllm"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T06:49:02Z"
lastCommitAt: "2026-10-10T10:01:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 17
maintainers: ["TimoSaemann"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0bb7595bd545ed1cf234e1d1556ca7beb29f56e9ea94f8ef83cd720b2213c2f/TimoSaemann/ppas-vllm"
---

# P-PAS: Prefill-Pressure Adaptive Scheduling for Long-Context LLM Serving

Implementation and experimental artifacts for the
[P-PAS paper](https://arxiv.org/abs/2608.15171).

Long-context LLM applications such as retrieval-augmented generation (RAG)
and agentic systems often process tens of thousands of input tokens to produce
short outputs, making end-to-end request latency an important serving
objective. We show that the maximum number of batched tokens (MBT), which
controls the token scheduling budget in vLLM, has a scheduling-pressure-
dependent effect on latency. Larger token budgets can reduce latency under low
scheduling pressure, while smaller budgets become preferable under higher
pressure. Consequently, no single static MBT performs best across load
regimes.

We introduce Prefill-Pressure Adaptive Scheduling (P-PAS), a lightweight
policy that dynamically adapts the global scheduling budget using concurrent
prefill and decode state. P-PAS retains a large token budget under low pressure
and switches to a smaller budget when multiple prefills compete with active
decoding. Across models, workload configurations, and GPUs, P-PAS maintains
low end-to-end latency across…

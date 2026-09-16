---
repo: "labrat-akhona/semantix-ai"
name: "semantix-ai"
description: "A semantic type system for validating LLM output intent — Pydantic for meaning."
readmeQualityOk: true
url: "https://github.com/labrat-akhona/semantix-ai"
homepage: "https://pypi.org/project/semantix-ai/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai", "ai-safety", "guardrails", "llm", "nlp", "openai", "pydantic", "python", "semantic", "type-system"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-27T14:13:41Z"
lastCommitAt: "2026-09-16T08:47:15Z"
lastReleaseAt: "2026-07-15T18:31:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 33
maintainers: ["labrat-akhona"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3ca4ffba6fc5fa8a6d04e2f7b0d1f86fc2c4e87f3cb66f4afc123845558faa7/labrat-akhona/semantix-ai"
---

<h1 align="center">semantix-ai</h1>
</p>

</p>

---

## The SA AI Compliance Stack

`semantix-ai` is the MIT-licensed Python entry point to a compliance stack built around South Africa's Protection of Personal Information Act (POPIA). Model weights have their own licenses, listed on their model cards.

| Artifact | What it is | Where |
|---|---|---|
| **`semantix-ai`** | Decorator + library that wraps a judge around every LLM call, with hash-chained audit certificates | [PyPI](https://pypi.org/project/semantix-ai/) |
| **`nli-popia-v2`** | 10-clause POPIA-grounded NLI judge (consent, minimality, security, breach, cross-border, data-subject-rights, children, special PI, automated decision-making, general processing) | [HuggingFace](https://huggingface.co/labrat-aiko/nli-popia-v2) |
| **`sa-compliance-embeddings-v1`** | 384-dim embeddings fine-tuned on POPIA Act text + grounded scenarios — POPIA-section retrieval (recall@1 0.211 → 0.477 over `bge-small-en-v1.5`) | [HuggingFace](https://huggingface.co/labrat-aiko/sa-compliance-embeddings-v1) |
| **`popia-instruct-v0`** | QLoRA adapter on Phi-3-mini for grounded POPIA Q&A. v0 — narrow but real: clause routing + section text…

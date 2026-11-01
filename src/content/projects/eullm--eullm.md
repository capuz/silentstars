---
repo: "eullm/eullm"
name: "eullm"
description: "Open-source platform for creating, distributing and running sovereign EU-compliant LLMs. Verticalize any model for your domain, language and brand. AI Act ready."
readmeQualityOk: true
url: "https://github.com/eullm/eullm"
homepage: "https://www.eullm.eu"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [47, 37]
topics: ["ai-sovereignty", "data-sovereignty", "eu-ai-act", "europe", "fine-tuning", "gdpr", "gguf", "llm", "local-llm", "ollama"]
stars: 60
forks: 5
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T20:43:57Z"
lastCommitAt: "2026-11-01T10:46:09Z"
lastReleaseAt: "2026-03-30T14:20:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["primoco", "Gabriele06-local"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecaea193ee8585dac03f773d21a38b491c9f56eb1fd0668f33037c19547312bb/eullm/eullm"
discussionCount: 1
---

🔒 Local-first and sovereign by design &nbsp;·&nbsp; 🇪🇺 Tested on EuroHPC supercomputers &nbsp;·&nbsp; 🇮🇹 Developed in Italy

---

## EuLLM at a glance

| | |
|---|---|
| ⚡ **Decisions in milliseconds** | 64 questions about a page in 0.66 s, about 10 ms each, on one RTX 5070 Ti. The model gives the probability of every option and generates nothing. |
| 🎯 **A RAG gate that knows when to stop** | On Italian law it tells whether the retrieved text can answer: AUROC 0.90 against 0.79 for embeddings, and 2.5× fewer good answers blocked (Jev-Style 2B). |
| 🔁 **The same question, the same answer** | A decision does not move with the other questions asked beside it: bit for bit, checked on CPU and GPU. |
| 🧾 **Decisions you can audit, correct and learn from** | Every decision has an id in the local audit trail. Mark it right or wrong, keep a private trace, and train your own decision model with Forge. |
| 🐘 **A 125B model on a 16 GB GPU** | Qwen3.8-Flash-Next (125B, 6B active, IQ2_XS) writes 69 tokens/s on an RTX 5070 Ti with 64 GB of RAM: about 3× the usual split, and a 30,000-token prompt is read about 6× faster (1,570 tokens/s). |
| 🚀 **Up to 62% faster answers** | `--mtp`…

---
repo: "Dicklesworthstone/franken_nlp"
name: "franken_nlp"
description: "Pure-Rust, CPU-optimized local NLP toolbox built around one model (Nanbeige4.2-3B): schema-valid structured extraction, NER and entity resolution, sentiment, zero-shot classification, PII redaction, faithfulness judging, QA, and text generation. One library plus the fnlp CLI; no Python, CUDA, or GPU. Pre-release."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_nlp"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["cpu-inference", "information-extraction", "llm", "local-first", "named-entity-recognition", "nlp", "quantization", "rust"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-31T02:11:34Z"
lastCommitAt: "2026-11-24T02:01:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/17db4847a7732400d2a346d37cc8f3224947bea510fbd1a4732a0bf97300a6f0/Dicklesworthstone/franken_nlp"
---

# franken_nlp

**A pure-Rust, memory-safe, CPU-hyper-optimized NLP engine built around exactly one model. `franken_nlp` takes Nanbeige4.2-3B, whose model card reports unusually strong sub-4B results, transforms its weights into a custom quantized format redistributed as digest-verified, provenance-attested GitHub release assets, runs it through kernels written for its exact shapes (including its one structural novelty: 22 layers executed twice, with a final RMSNorm after each pass), and wraps it in a complete local NLP toolbox: schema-guaranteed structured extraction, source-grounded NER + entity resolution, sentiment distribution scoring, zero-shot classification, PII redaction, faithfulness judging, summarization, keyphrases, QA, and generation. One library and one CLI program (`fnlp`, also installed as `franken_nlp`); no Python, no CUDA, no GPU required, and no network after the one-time model pull.**

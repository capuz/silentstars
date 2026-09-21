---
repo: "fulvian/engraft-ngram"
name: "engraft-ngram"
description: "ENGRAFT: add facts to an LLM by editing 8 rows of its n-gram (Engram) memory table — no fine-tuning, gradient on a CPU replica, verified on llama.cpp GGUF (Qwen3.8-Flash-Next)."
readmeQualityOk: true
url: "https://github.com/fulvian/engraft-ngram"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["deepseek", "engram", "gguf", "interpretability", "knowledge-editing", "knowledge-injection", "llama-cpp", "llm", "memory-editing", "mixture-of-experts"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-05T18:45:02Z"
lastCommitAt: "2026-09-21T09:14:27Z"
lastReleaseAt: "2026-09-05T20:55:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 25
maintainers: ["fulvian"]
openGraphImageUrl: "https://opengraph.githubassets.com/60e8f81ad01bfd6e2df4fae1e294ea7affd677fc44a88213b69f510208b3cdc3/fulvian/engraft-ngram"
---

# ENGRAFT: write facts into an LLM's n-gram memory table, without touching its weights

Some recent language models carry a large n-gram lookup table next to the transformer.
DeepSeek calls the design *Engram* (DeepSeek V4.1 Flash has one); Qwen3.8-Flash-Next
(125B parameters, 6B active) has one with 320 million rows, which llama.cpp calls the PLE
table. At every position the last two and three tokens are hashed into 16 rows; the rows are
read and added to the residual stream at an early block. It is a key-value memory keyed by
exact token n-grams, read before almost all of the model's computation.

ENGRAFT writes new facts into that table. Only rows of the table are trained; every weight of
the model stays as it is. The result is one small `.pleo` overlay that a llama.cpp fork applies
at read time. The GGUF on disk is never modified, and removing the overlay restores the model
exactly.

**Scope.** The method applies to models that carry an Engram-style table. Every measurement in
this repository was made on **Qwen3.8-Flash-Next** (IQ4_XS). DeepSeek V4.1 Flash is the next
target. Its table differs in ways that need adapting (MXFP8 rows, a compressed tokenizer, two
table layers,…

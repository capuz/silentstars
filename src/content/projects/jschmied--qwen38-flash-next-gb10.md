---
repo: "jschmied/qwen38-flash-next-gb10"
name: "qwen38-flash-next-gb10"
description: "Getting Qwen's Qwen4-architecture preview (Qwen3.8-Flash-Next) to run on a single DGX Spark GB10 — 125.9 GiB of weights against 117 GiB of unified memory"
readmeQualityOk: true
url: "https://github.com/jschmied/qwen38-flash-next-gb10"
language: "Python"
languages: ["Python"]
languagePcts: [68]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T20:10:03Z"
lastCommitAt: "2026-10-01T10:24:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3a01c558c460fbcdf68540fdca145d77cc0219af2d9d7df3ffaa96dc43c5240d/jschmied/qwen38-flash-next-gb10"
---

# Qwen3.8-Flash-Next on a DGX Spark (GB10)

Qwen's Qwen4-architecture preview (125B MoE, 6B active, a 51B n-gram table) served from one GB10
with 128 GB of unified memory, on vLLM. This repo is the working record: the recipe, every number
with its data file, the failures by symptom, and the claims of our own we had to withdraw.

**New here?** [notes/what-generalises.md](https://github.com/jschmied/qwen38-flash-next-gb10/blob/HEAD/notes/what-generalises.md) is the short version: five durable
insights, what transferred from the field and what did not, and which of our own conclusions had to be
thrown away. It is synthesis — every number in it points back to the note that carries the data.

**Status (2026-09-28): working, fast, usable** — tool calls, vision, 32K served context (262K-capable).
The stack is vLLM `main` (nightly `1ea7c63f4`) with the PLE table read in place from the checkpoint
([vllm#58439](https://github.com/vllm-project/vllm/pull/58439), ours) instead of the old PLE-offload
worker, **RecoverSSM for the GDN layers** as submitted upstream ([vllm#58863](https://github.com/vllm-project/vllm/pull/58863),
ours, enabled by `--use-replayssm`), and **MTP K=5 with probabilistic…

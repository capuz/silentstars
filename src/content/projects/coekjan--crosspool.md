---
repo: "Coekjan/CrossPool"
name: "CrossPool"
description: "Efficient GPU Memory Pooling for Multi-LLM Serving via KV Cache and Weight Disaggregation"
readmeQualityOk: true
url: "https://github.com/Coekjan/CrossPool"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["colocation", "disaggregation", "kv-cache", "llm-inference", "llm-serving", "memory-disaggregation", "memory-pooling"]
stars: 11
forks: 6
openIssues: 70
closedIssues: 11
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-03-11T03:09:53Z"
lastCommitAt: "2026-10-23T08:47:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 48
maintainers: ["Coekjan", "zoyming", "BUAA-ZY"]
openGraphImageUrl: "https://opengraph.githubassets.com/05ddb294669f9e3771f88b9344bf923fbc9cca558a3eba85e3c1cba11e5674e9/Coekjan/CrossPool"
---

CrossPool is a serving system for co-locating multiple SGLang models when
user-driven KV Cache demand and model-driven FFN weight requirements do not
line up.

## Why CrossPool?

KV Cache and FFN weights/execution are governed by different sizing axes:

| Resource | Main sizing driver | CrossPool treatment |
| --- | --- | --- |
| Attention and KV Cache | Active requests, context lengths, and generation histories | SGLang keeps logical cache ownership; physical backing can be lent and reclaimed among Instances on one attention device. |
| FFN weights and execution | Model layer geometry, weight size, and FFN parallelism | FfnAgents retain model-specific true-TP shards on a shared FFN execution tier. |

A conventional co-located deployment binds these two axes to the same process and
device reservation. One model may need large KV capacity while another mainly
contributes resident FFN weights, yet each Instance must reserve both sides
independently.

CrossPool separates the placement and sizing decisions without changing
SGLang's request semantics. It shares FFN execution infrastructure and
reallocates physical KV backing across co-located Instances. Logical KV contents
and prefix…

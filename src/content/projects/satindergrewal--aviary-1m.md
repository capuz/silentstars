---
repo: "satindergrewal/aviary-1m"
name: "aviary-1m"
description: "Open models extended to 1M context with YaRN and certified needle by needle: Ornith, Gemma 4 uncensored, Qwen3.6 uncensored. MTP speculative decoding grafts, vision, full test harness."
readmeQualityOk: true
url: "https://github.com/satindergrewal/aviary-1m"
homepage: "https://huggingface.co/satgeze"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [48, 43]
topics: ["apple-silicon", "gguf", "llama-cpp", "llm", "long-context", "needle-in-a-haystack", "ollama", "quantization", "qwen", "yarn"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-04T01:06:07Z"
lastCommitAt: "2026-08-04T06:11:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["satindergrewal"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1288785137/bf6b302f-e4fe-4073-8ffe-f3a8d8b9faf1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061333Z&X-Amz-Expires=300&X-Amz-Signature=fedac6ebfd976a33c236a9a6a5e94fbb15ad8516f7fe73a16d09589009d6e119&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxMywibmJmIjoxNzg1ODI0MDEzLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.I9XYlsU0UmBvhFc219aaN9IUUPaKFILZDKQQutSBmSM"
---

**A flock of open models extended to a 1,048,576-token context with YaRN, then certified needle by needle. Plus MTP speculative-decoding grafts, vision hookups, and the full test harness that proves every claim.**

</div>

## What this is

Take a strong open model. Bake YaRN rope-scaling metadata into its GGUF so llama.cpp and Ollama run it at 1M context with no flags. Prove the extension works with a multi-needle retrieval harness at every length, no skipped rungs, and publish the raw results next to the weights. Where the model family ships a multi-token-prediction layer, graft it back for 25 to 51 percent faster decoding with identical output. Where a vision tower exists, wire it up and verify it. Ship only what passed.

No fine-tuning anywhere: every trunk is bit-identical to its source release apart from rope metadata (and, where noted, an appended MTP layer from the family's official checkpoint).

## The fleet

| Model | Params | Uncensored | 1M needle status | MTP | Vision | Get it |
|---|---|---|---|---|---|---|
| **Qwen3.6-35B Uncensored** | 35B MoE (3B active) | yes | **70/70, certified to 1M** | baked in, +34% | verified |…

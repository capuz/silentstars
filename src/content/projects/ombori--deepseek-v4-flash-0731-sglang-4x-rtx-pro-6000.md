---
repo: "ombori/deepseek-v4-flash-0731-sglang-4x-rtx-pro-6000"
name: "deepseek-v4-flash-0731-sglang-4x-rtx-pro-6000"
description: "Reproducible SGLang recipe + public prebuilt image (ghcr.io) for DeepSeek-V4-Flash-0731 on 4x RTX PRO 6000 Blackwell (SM120): TP4/DP4/EP4, 1M ctx, benchmarks, and the DSPARK draft-depth corruption boundary"
readmeQualityOk: true
url: "https://github.com/ombori/deepseek-v4-flash-0731-sglang-4x-rtx-pro-6000"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
topics: ["blackwell", "deepseek", "deepseek-v4", "flashinfer", "llm-inference", "rtx-pro-6000", "sglang", "sm120", "speculative-decoding"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2026-08-06T02:51:37Z"
lastCommitAt: "2026-08-09T03:49:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["hassellof"]
openGraphImageUrl: "https://opengraph.githubassets.com/83531e3e86d82c429ed1b167a640b340bc34d3f9c204c7c72f8061194d8e3a72/ombori/deepseek-v4-flash-0731-sglang-4x-rtx-pro-6000"
---

# DeepSeek-V4-Flash-0731 on 4× RTX PRO 6000 Blackwell (SM120) — SGLang recipe

This is the config we run in production: [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) (284B MoE / 13B active, native FP4+FP8, 1M context) on four RTX PRO 6000 Blackwell cards. TP4, DP4 attention, EP4, DSPARK speculative decoding at draft depth 7 with the shipped SPS cost table and compact ragged verify, fp8 KV cache.

Stock sglang v0.5.16 can't serve this. DSPARK crash-loops at warmup on SM120, several verify and tool-call-streaming bugs bite under real traffic, and the checkpoint's default speculative draft depth silently corrupted output until we root-caused it to an SM120 allocation bug (it also affects upstream `main`; fixed in this patch set, details below). This repo has the patch set, the image build, the serving config, the measured numbers, and the failure boundaries we mapped so you don't have to.

Everything was measured on exactly this rig, but parts of it travel further than the name suggests: the patches apply to any SM120 card count, the draft-depth corruption affects any DSpark deployment on any engine, and the dependency pins hold for Blackwell…

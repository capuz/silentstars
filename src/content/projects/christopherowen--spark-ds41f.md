---
repo: "christopherowen/spark-ds41f"
name: "spark-ds41f"
description: "Reproducible Docker/vLLM deployment, tuning, and benchmarks for DeepSeek V4.1 Flash on a switchless three-node or four-node DGX Spark fabric."
readmeQualityOk: true
url: "https://github.com/christopherowen/spark-ds41f"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["deepseek", "dgx-spark", "distributed-inference", "docker", "roce", "vllm"]
stars: 237
forks: 59
openIssues: 5
closedIssues: 35
watchers: 7
contributors: 15
recentReleases: 6
createdAt: "2026-09-20T08:58:33Z"
lastCommitAt: "2026-11-20T12:03:06Z"
lastReleaseAt: "2026-11-11T15:55:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 32
maintainers: ["christopherowen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f453adb27838c1b7799db0286df8a184c9ef7b97cfc7b3a6b15c1f138fa92687/christopherowen/spark-ds41f"
---

# spark-ds41f

**DeepSeek V4.1 Flash on DGX Sparks. No switch required.\***

A reproducible deployment of DeepSeek-V4.1-Flash-1017 across three to eight DGX Sparks:
the Docker/vLLM build, the tuning, and every benchmark behind it. The site,
[switchle.ss](https://switchle.ss), is rendered from this repository's manifests.

- **Native weights.** DeepSeek's checkpoint, unchanged: the published FP8/FP4/BF16 weights
  and tokenizer, loaded directly. Nothing is re-quantized.
- **Correct first.** DeepSeek's reference arithmetic term for term, temperature-0 outputs
  that do not depend on the batch, and a determinism gate and release tests that every
  promotion passes ([docs/testing.md](https://github.com/christopherowen/spark-ds41f/blob/HEAD/docs/testing.md)).
- **Then fast.** Every speed-up lands as a measured experiment against the release before
  it, and the unfavourable runs are kept ([docs/methodology.md](https://github.com/christopherowen/spark-ds41f/blob/HEAD/docs/methodology.md)).

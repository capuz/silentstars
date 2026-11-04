---
repo: "christopherowen/spark-ds41f"
name: "spark-ds41f"
description: "Reproducible Docker/vLLM deployment, tuning, and benchmarks for DeepSeek V4.1 Flash on a switchless three-node or four-node DGX Spark fabric."
readmeQualityOk: true
url: "https://github.com/christopherowen/spark-ds41f"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["deepseek", "dgx-spark", "distributed-inference", "docker", "roce", "vllm"]
stars: 83
forks: 23
openIssues: 5
closedIssues: 12
watchers: 3
contributors: 12
recentReleases: 4
createdAt: "2026-09-20T08:58:33Z"
lastCommitAt: "2026-11-04T08:03:24Z"
lastReleaseAt: "2026-10-31T01:28:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 38
maintainers: ["christopherowen", "justincasey"]
openGraphImageUrl: "https://opengraph.githubassets.com/71520847b575a71ea0474f6b64854b44864759090b2e5fc03f17205c03adc2f6/christopherowen/spark-ds41f"
---

# spark-ds41f

Reproducible Docker/vLLM deployment, tuning, and benchmarks for DeepSeek V4.1
Flash on a switchless three-node or four-node DGX Spark fabric.

The next candidate is [candidate-39](https://github.com/christopherowen/spark-ds41f/blob/HEAD/experiments/2026-10-26-spark-ds41f-candidate/candidate-39/README.md).
It makes CopyDrafter the default for greedy adaptive DSpark, fits the decode and
capture envelopes automatically, and overlaps the copy work. Its canonical source
is prepared; image and serving qualification are pending in the
[measured rounds](https://github.com/christopherowen/spark-ds41f/blob/HEAD/experiments/2026-11-04-copy-default-screening/README.md).
It builds on [candidate-38](https://github.com/christopherowen/spark-ds41f/blob/HEAD/experiments/2026-10-26-spark-ds41f-candidate/candidate-38/README.md),
whose [TP3 qualification](https://github.com/christopherowen/spark-ds41f/blob/HEAD/experiments/2026-11-03-candidate-38-tp3-qualification/README.md)
retains throughput gains, latency findings and small copy-recipe costs for review.
The promoted release remains spark-ds41f-1030.
Loop work follows the candidate's
[containment…

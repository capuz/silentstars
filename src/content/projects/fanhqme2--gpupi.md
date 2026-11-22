---
repo: "fanhqme2/gpupi"
name: "gpupi"
description: "Computing 1000000000 digits of pi on GPU, in 5 seconds."
readmeQualityOk: true
url: "https://github.com/fanhqme2/gpupi"
language: "Cuda"
languages: ["Cuda"]
languagePcts: [93]
stars: 33
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-21T19:43:02Z"
lastCommitAt: "2026-11-22T02:10:05Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 14
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4ca3c4ee150606ca615eba8769be7c8362efbdefb62af76309ac8ca48140fc48/fanhqme2/gpupi"
---

# gpupi

gpupi computes up to **5,000,000,000 fractional decimal digits of pi on a 32 GB RTX 5090** using CUDA, Chudnovsky binary splitting and exact 96-bit number-theoretic transforms (NTTs).

## RTX 5090 performance

| Fractional digits | Median (ms) | Best (ms) |
|---:|---:|---:|
| 250,000,000 | 620.085 | 619.684 |
| 500,000,000 | 1,304.498 | 1,299.332 |
| 1,000,000,000 | 2,643.161 | 2,638.889 |
| 2,500,000,000 | 8,245.625 | 8,243.835 |
| 5,000,000,000 | 20,777.980 | 20,752.328 |

Measured November 22, 2026 with CUDA 13.1, driver 610.88 and the default `-O3` build. Each size had one warmup and three measured runs in separate processes, using `./pi_bs_gpu <digits> --benchmark`. The timer includes computation and decimal conversion. CUDA startup, final host transfers and printing occur outside it. The complete 1b, 2.5b and 5b outputs matched the independent reference hashes. [Raw measurements](https://github.com/fanhqme2/gpupi/blob/HEAD/benchmark_results.json)

## Build

This repo needs CUDA 13

Compile the main binary:

```bash
make pi_bs_gpu
```

This produces `./pi_bs_gpu`.

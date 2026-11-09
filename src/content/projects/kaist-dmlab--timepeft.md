---
repo: "kaist-dmlab/TimePEFT"
name: "TimePEFT"
description: "[ICML 2026] Time-PEFT: Temporal and Multichannel Complexity-Based Fine-Tuning for Time-Series Foundation Models"
readmeQualityOk: true
url: "https://github.com/kaist-dmlab/TimePEFT"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 5
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-03T08:51:56Z"
lastCommitAt: "2026-11-09T12:00:01Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 55
maintainers: ["Cabbalett"]
openGraphImageUrl: "https://opengraph.githubassets.com/b510b66fba491a0b0f72139899c109d29974185f6276ef22dd6e9b2790d3cfc3/kaist-dmlab/TimePEFT"
---

# Time-PEFT: Temporal and Multichannel Complexity-Based Fine-Tuning for Time-Series Foundation Models

## 📖 Overview

Recent studies have attempted to fine-tune time-series foundation models to enhance a target dataset's forecasting performance. However, these approaches proceed without a clear criterion for identifying complex datasets that require fine-tuning due to performance degradation in zero-shot forecasting. To distinguish datasets that are more challenging than standard benchmarks, we introduce data-driven temporal complexity and multichannel complexity. Temporal complexity captures the difficulty of identifying distinct patterns by quantifying spectral entropy in the frequency domain, while multichannel complexity captures cross-channel information flow that can impact predictive uncertainty. These metrics serve as effective proxies for performance gains achievable through fine-tuning. Based on the two metrics, we develop Time-PEFT, a parameter-efficient fine-tuning framework that incorporates a frequency adapter for top- filtering and a channel adapter for multichannel modeling. With the base variant of MOMENT as a backbone, Time-PEFT improves performance by up to 38%…

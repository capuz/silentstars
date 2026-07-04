---
repo: "rndhouse/mixmod"
name: "mixmod"
description: "Reduce GPT-5.5 token usage 75.5% by supervising a 27B local model"
readmeQualityOk: true
url: "https://github.com/rndhouse/mixmod"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 35
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-01T23:36:53Z"
lastCommitAt: "2026-07-04T22:50:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["rndhouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/a23eb7dbe2133d9bd6b306560165be7cb3ee3d6d49a14d59f561d36606eb1d7c/rndhouse/mixmod"
---

<h1 align="center">mixmod</h1>

It tests whether a strong supervisor model can supervise a cheaper local model while preserving result quality. The current benchmarked pairing is GPT-5.5 supervising Qwen3.6-27B on a single RTX 3090.

Follow [x.com/rndhouse](https://x.com/rndhouse) for project updates.

Early benchmark results show a **75.5% aggregate reduction in GPT-5.5 token usage** on the latest 10-instance SWE-bench Lite pool:

* Output tokens fell by 51.4%.
* Input tokens fell by 76.1%.
* Per-instance total token reductions ranged from 56.0% to 91.4%.

```mermaid
flowchart TD
    B["GPT-5.5 instructs Qwen3.6-27B"]
    C["Qwen3.6-27B modifies code"]
    D["GPT-5.5 reviews"]
    E{Approve?}
    F["Task complete"]
    G["GPT-5.5 prepares feedback"]

    B --> C --> D --> E
    E -->|yes| F
    E -->|no| G --> B
```

For the concrete supervisor/worker loop, see [Supervision](docs/supervision.md).

## Latest Benchmark Highlights

Latest report: [SWE-bench current default 10-instance snapshot](docs/latest-benchmark.md).
This is a selected SWE-bench Lite pool where GPT-5.5 could solve every task. Mixmod is testing token reduction, not capability improvement.

This table shows the…

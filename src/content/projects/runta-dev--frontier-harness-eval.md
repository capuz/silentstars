---
repo: "runta-dev/frontier-harness-eval"
name: "frontier-harness-eval"
description: "Public results and task definitions for FrontierHarness Eval"
readmeQualityOk: true
url: "https://github.com/runta-dev/frontier-harness-eval"
homepage: "https://harness.runta.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code", "codex", "deepseek-harness", "harness", "opencode", "pi-agent", "exo-harness", "frontier-harness", "frontierharness", "harness-benchmark"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-31T11:49:53Z"
lastCommitAt: "2026-09-02T08:07:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 32
maintainers: ["shiqimei"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a1464587867c5c461b065d834381237f922e6b1c200095233be63e7d8b88495/runta-dev/frontier-harness-eval"
---

<h1 align="center">FrontierHarness Eval</h1>

</p>

  &nbsp;·&nbsp;
</p>

  </a>
</div>

## Similar pass rate. 17.5x cost differences.

We ran the same **Kimi K3** model through nine coding-agent harnesses—12 configurations in total—on the same 30 software-engineering tasks. With the model, tasks, and runtime held constant, changing the harness changed pass rate, cost, cache behavior, and speed.

  </a>
</div>

### Full results

| Harness configuration | Tasks passed | Median cost per successful task | Median time per successful task |
|---|---:|---:|---:|
| **Codex** | **20 / 30** | $0.1243 | 6m 43s |
| DSH Creator | 19 / 30 | $0.1194 | 6m 44s |
| Claude Code | 19 / 30 | $0.2880 | 9m 38s |
| Pi | 18 / 30 | $0.0709 | 7m 33s |
| DSH Standard | 18 / 30 | $0.1201 | 6m 17s |
| DSH PTC | 18 / 30 | $0.1370 | 7m 44s |
| Kimi Code | 17 / 30 | $0.1818 | 7m 56s |
| DSH Minimal | 17 / 30 | $0.1214 | **5m 41s** |
| Oh My Pi | 17 / 30 | $0.1354 | 6m 46s |
| Exo Harness | 16 / 30 | $0.0748 | 6m 17s |
| Hermes | 15 / 30 | $0.1746 | 6m 58s |
| OpenCode | 15 / 30 | **$0.0615** | 6m 27s |

The [interactive report](https://harness.runta.com) includes failed runs, total cost per task, cache behavior,…

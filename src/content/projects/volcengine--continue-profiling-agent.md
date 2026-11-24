---
repo: "volcengine/continue-profiling-agent"
name: "continue-profiling-agent"
description: "Non-intrusive Linux whole-machine continuous profiling agent that records second-level CPU profiling history with ultra-low, often unnoticeable overhead, powered by libgunwinder. Deployed at scale inside ByteDance to significantly accelerate performance issue diagnosis."
readmeQualityOk: true
url: "https://github.com/volcengine/continue-profiling-agent"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-06-01T11:22:57Z"
lastCommitAt: "2026-11-24T00:15:54Z"
lastReleaseAt: "2026-09-22T09:06:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 35
maintainers: ["XinShuichen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f49369a8131dc7a45dc61616a23ffba480411ad5c71ec77431b96395a6a53459/volcengine/continue-profiling-agent"
---

# continue-profiling-agent

[中文文档](https://github.com/volcengine/continue-profiling-agent/blob/HEAD/README.zh-CN.md)

`continue-profiling-agent` (`cpa`) is a Linux continuous profiling agent built
to keep performance evidence available after an incident has already happened.
It continuously records ultra-low-overhead profiling history on production
hosts, so engineers can inspect the exact time window later instead of waiting
for the issue to reproduce.

## Why CPA

- Ultra-low overhead: with the highly optimized libgunwinder, CPA can
  continuously record whole-machine, per-second flamegraphs for all processes
  at very low and often unnoticeable cost.
- Always-on evidence: CPA keeps recent second-level profiling history on the
  host and rotates it by policy.
- No application intrusion: CPA does not modify, inject into, or restart user
  processes, so profiling can stay resident without changing application
  behavior.
- Practical incident workflow: `cpa show` can export flamegraph data or open an
  interactive TUI to jump to the affected wall-clock time.

## Commands

CPA has these commands:

---
repo: "yushui2022/EdgeHome-Harness"
name: "EdgeHome-Harness"
description: "面向 1B 端侧小模型的 Rust Agent Harness：在 2GB RAM 约束下实现稳定 JSON/intent 输出、内存预算、安全策略、执行控制与失败回放。"
url: "https://github.com/yushui2022/EdgeHome-Harness"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-09T07:27:16Z"
lastCommitAt: "2026-07-04T06:11:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 43
maintainers: ["yushui2022"]
openGraphImageUrl: "https://opengraph.githubassets.com/02ff5bbd81e32461f5262b011e927085978cbf3b4eeb3520936f0c1452ceb412/yushui2022/EdgeHome-Harness"
---

# EdgeHome Harness

**EdgeHome Harness** is a Rust agent harness built specifically for **MiniCPM-class
1B edge models**, with the current default profile tuned for
`openbmb/minicpm5:1b`.

The project focuses on a constrained smart-home control scenario: Chinese IoT
commands, local inference, structured JSON candidates, deterministic validation,
safe execution boundaries, trace replay, and release-gated evaluation.

It is not a generic chatbot framework. It is also not a replacement for Home
Assistant, Mi Home, Matter, or a commercial smart speaker. The goal is narrower
and more engineering-oriented:

```text
Turn a small local MiniCPM model that may repeat, drift, or produce unstable JSON
into a bounded command-candidate generator.

Then let Rust decide what is valid, safe, executable, traceable, and releasable.
```

## Core Idea

```text
ModelOutput != Command
```

MiniCPM proposes a candidate JSON object. The harness decides whether that
candidate can become an `ExecutionPlan`.

The model never gets direct authority over devices, backend entity IDs, tokens,
policy, memory writes, or execution. Those responsibilities stay in deterministic
Rust components:

```text
MiniCPM /…

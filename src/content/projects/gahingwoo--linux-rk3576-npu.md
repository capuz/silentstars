---
repo: "gahingwoo/linux-rk3576-npu"
name: "linux-rk3576-npu"
description: "RK3576 NPU mainlining and bring-up "
readmeQualityOk: true
url: "https://github.com/gahingwoo/linux-rk3576-npu"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [49, 39]
stars: 14
forks: 1
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-06-03T06:36:53Z"
lastCommitAt: "2026-08-17T04:18:02Z"
lastReleaseAt: "2026-06-07T10:24:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["gahingwoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/bde9aee0556b39d2a738eec7fa2449dc6d5ce559409f8adc02fdf07cbc879156/gahingwoo/linux-rk3576-npu"
---

# linux-rk3576-npu

Mainline kernel bring-up for the RK3576 NPU on Radxa ROCK 4D.

MobileNet V1 runs end to end on the NPU: **1000 of its 1001 outputs are within
one count of the CPU reference**, and an open LLM runtime computes a signed int8
matmul through this driver **byte exact**, at 11.9 GB/s of weight bandwidth.
Details below.

## Companion projects

Three repositories, one board. The third name is a joke about the second: char siu
is Cantonese barbecue pork, eaten across Guangdong, Hong Kong and Malaysia, and a kiln is the
oven it is roasted in.

| repo | what it is |
|---|---|
| **linux-rk3576-npu** | this one: the open RK3576 NPU driver and Mesa work. `rocket` on the list, Teflon in Mesa, and the register knowledge the other two are built on |
| [kiln](https://github.com/gahingwoo/kiln) | the **vendor** RKLLM/RKNN stack on a mainline kernel. LLM and vision on the board today, through a closed runtime, and the yardstick the open stack is measured against |
| [charsiu](https://github.com/gahingwoo/charsiu) | an open **LLM** runtime for this NPU on the open driver. It reaches the NPU through `rocket` on its own and computes a signed int8 matmul byte exact, with no Mesa and…

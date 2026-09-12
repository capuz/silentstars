---
repo: "gahingwoo/linux-rk3576-npu"
name: "linux-rk3576-npu"
description: "RK3576 NPU mainlining and bring-up "
readmeQualityOk: true
url: "https://github.com/gahingwoo/linux-rk3576-npu"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [56, 32]
stars: 16
forks: 1
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 9
createdAt: "2026-06-03T06:36:53Z"
lastCommitAt: "2026-09-12T08:04:56Z"
lastReleaseAt: "2026-09-04T23:08:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 38
maintainers: ["gahingwoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ff6ad7dfed13805df1073767157946f6cc35ba1d9105957b4ef9c68cc591f18/gahingwoo/linux-rk3576-npu"
---

# linux-rk3576-npu

Mainline kernel bring-up for the RK3576 NPU on Radxa ROCK 4D.

MobileNet V1 runs end to end on the NPU and **returns the right label**: on the
test image it picks class 754, the class the CPU reference picks, with the CPU's
top five in the same order. Every one of its layers, run on its own, is **99.93
to 99.99 percent of pixels identical to exact integer arithmetic**, which is
closer than the tflite interpreter most of the numbers here are scored against.

An open LLM runtime runs **Llama-3.2-1B entirely on this NPU at four bits**, through this
driver and nothing else, at **14.70 tokens a second** on a 64 token generation -- 2.3x
what the same runtime gets at eight bits, with the sentence identical to the one the
exact arithmetic writes. 54 ms of a 67.7 ms token is the weight fetch at 10.3 GB/s, which
is this board's own measured bandwidth: **the hardware is the floor now, not the
software**. Details below.

## Companion projects

Three repositories, one board. The third name is a joke about the second: char siu
is Cantonese barbecue pork, eaten across Guangdong, Hong Kong and Malaysia, and a kiln is the
oven it is roasted in.

| repo | what it is |
|---|---|…

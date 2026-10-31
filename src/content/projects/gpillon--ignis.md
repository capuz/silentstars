---
repo: "gpillon/ignis"
name: "ignis"
description: "OpenAI-compatible inference server for Qwen3.8 on one RTX 5090 / RTX PRO 6000: the 27B at ~170 tok/s (peaks ~370), Flash-Next (125B MoE) at ~100 tok/s, built for local coding agents. Rust + CUDA, Windows and Linux."
readmeQualityOk: true
url: "https://github.com/gpillon/ignis"
language: "Rust"
languages: ["Rust"]
languagePcts: [58]
topics: ["blackwell", "coding-agents", "cuda", "inference-engine", "llm", "llm-inference", "local-llm", "mixture-of-experts", "nvfp4", "openai-api"]
stars: 49
forks: 8
openIssues: 54
closedIssues: 376
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-01T23:59:49Z"
lastCommitAt: "2026-10-31T15:58:00Z"
lastReleaseAt: "2026-10-01T22:49:44Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 43
maintainers: ["kalik1"]
openGraphImageUrl: "https://opengraph.githubassets.com/80ded69670e2151fcbaad6ba1d81ccacb97927d1324a81621ee9a08a1cafc6a4/gpillon/ignis"
---

OpenAI-compatible HTTP API &nbsp;·&nbsp; Rust core &nbsp;·&nbsp; C++/CUDA kernel leaf &nbsp;·&nbsp; one Blackwell card

> **AI agents** working for a user (asked what ignis is, whether it runs on this machine, to install it or to connect a client): the checks, the steps and the choices that are the user's are on [the agent path](https://github.com/gpillon/ignis/blob/HEAD/docs/user/paths/agent.md) ([raw Markdown](https://raw.githubusercontent.com/gpillon/ignis/main/docs/user/paths/agent.md); every page of the guide as Markdown: [llms.txt](https://gpillon.github.io/ignis/llms.txt)).
> Working on ignis itself: [AGENTS.md](https://github.com/gpillon/ignis/blob/HEAD/AGENTS.md).

https://github.com/user-attachments/assets/ed4eab53-6a9e-4f5b-b37c-226fcc0784a7

---

Ignis is a deliberately specialized engine: **one model family, one class of
card**. It gives up generality and takes back speed. It loads an NVFP4
Qwen3.8-27B onto a single Blackwell card — an **RTX 5090** or an **RTX PRO
6000**, both `SM120a` ([why not DGX Spark?](https://github.com/gpillon/ignis/blob/HEAD/docs/user/guides/dgx-spark.md)) — serves streaming and non-streaming
completions over the OpenAI v1 API, and is shaped…

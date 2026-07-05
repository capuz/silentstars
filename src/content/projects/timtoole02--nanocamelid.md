---
repo: "timtoole02/NanoCamelid"
name: "NanoCamelid"
description: "High-performance, Rust-native LLM inference engine for Raspberry Pi and ARM64."
readmeQualityOk: true
url: "https://github.com/timtoole02/NanoCamelid"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 37
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-22T17:02:59Z"
lastCommitAt: "2026-07-05T20:59:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["timtoole02"]
openGraphImageUrl: "https://opengraph.githubassets.com/34322265e944419dfeeee4134a3eae1b5ac33eb683cdf5c27c253cbc6eb93746/timtoole02/NanoCamelid"
---

# 🦙 NanoCamelid

**A compact Rust inference engine for Raspberry Pi — one Pi chats with 1B–8B models; three Pis run Llama 3 70B.**

</div>

NanoCamelid loads GGUF models directly and runs them on Pi-class ARM64
hardware: one static binary, local model files, terminal chat, a web UI, an
OpenAI-style API, and a cluster mode that spreads one model across several
Pis. The GGUF loader, tokenizers, chat templates, and NEON SDOT kernels are
all implemented in this repository — no Python, no wrapper around another
runtime. Every supported model row and every performance number is backed by
committed Pi-side evidence.

---

## The cluster scoreboard

Three Raspberry Pi 5s (16GB) on ordinary gigabit Ethernet. Two cluster
lanes, both gated on token parity with the single-node engine:

| model | one Pi 5 | three Pi 5s | lane |
|---|---|---|---|
| Llama 3.2 1B Q4_0 | 13.4 tok/s | **20.4 tok/s** | tensor parallel |
| Llama 3.2 3B Q4_0 | 5.3 tok/s | **10.2 tok/s** | tensor parallel |
| Mixtral 8x7B Q4_0 | *does not fit* | **0.8 tok/s** | pipeline |
| **Llama 3 70B Q4_0** | *does not fit* | **0.7 tok/s** | tensor parallel |

- **Pipeline** (`cluster_tcp_smoke`) splits contiguous layer ranges…

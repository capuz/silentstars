---
repo: "timtoole02/Camelid"
name: "Camelid"
description: "Camelid: a Rust-native local inference backend with evidence-gated model compatibility."
readmeQualityOk: true
url: "https://github.com/timtoole02/Camelid"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [73, 21]
topics: ["apple-silicon", "gguf", "inference", "llama", "llm", "local-first", "metal", "openai-compatible", "quantization", "rust"]
stars: 107
forks: 14
openIssues: 7
closedIssues: 4
watchers: 5
contributors: 7
recentReleases: 10
createdAt: "2026-05-01T14:24:43Z"
lastCommitAt: "2026-07-05T21:00:03Z"
lastReleaseAt: "2026-07-04T21:02:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 87
undervaluedScore: 31
maintainers: ["timtoole02", "karan68", "karanyadavmicrosoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/092623850f785221464d938b818c81b17628d108f20f59210f92d704b05e543f/timtoole02/Camelid"
discussionCount: 2
---

# 🐪 Camelid

**A Rust-native local LLM inference engine — GGUF in, OpenAI-style API out, every claim backed by reproducible evidence.**

</div>

Camelid loads GGUF models directly, serves them over a local OpenAI-style API, and gates every optimized path on token-for-token parity with a reference implementation. It is **not** a wrapper around Ollama or llama.cpp — the tokenizer, GGUF loader, CPU kernels, and the Metal (Apple Silicon) and CUDA (NVIDIA) GPU paths are all implemented in this repository, shipping as a single static Rust binary with no Python.

---

## Install

**Two ways to run Camelid — both use the same engine and the same models. Pick what fits:**

| | 🪟 Camelid Desktop | ⚙️ Camelid engine |
|---|---|---|
| **What it is** | A native Windows app | The prebuilt `camelid` binary |
| **Best for** | Just chatting on your own PC — the easy button | Sharing on a network, the API, scripting |
| **How you chat** | A native window (no browser, no terminal) | In your **browser**, or a **server** others connect to |
| **Install** | Double-click the signed installer | Unzip and run `camelid.exe` |
| **Runs on** | Windows | Windows · macOS · Linux |

The desktop app simply…

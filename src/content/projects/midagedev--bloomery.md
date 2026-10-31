---
repo: "midagedev/bloomery"
name: "bloomery"
description: "Hybrid GPU + CPU inference for mixture-of-experts models, written in Rust down to the CUDA kernels. A drop-in llama-server."
readmeQualityOk: true
url: "https://github.com/midagedev/bloomery"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["cuda", "deepseek", "gguf", "glm", "inference", "llama-cpp", "llm", "moe", "qwen", "rust"]
stars: 54
forks: 5
openIssues: 45
closedIssues: 168
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-19T12:45:54Z"
lastCommitAt: "2026-10-31T07:45:47Z"
lastReleaseAt: "2026-10-09T09:08:41Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["juliankang4", "midagedev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377146773/b8f76f4e-44bf-41ac-a749-86d8513f1bee"
discussionCount: 1
---

It runs on NVIDIA cards, the DGX Spark included, and on Apple Silicon through Metal.<br>
  A drop-in <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/server">llama-server</a>, in Rust from the HTTP server down to the CUDA kernels.

```sh
curl -fsSL https://raw.githubusercontent.com/midagedev/bloomery/main/tools/release/install.sh | sh
~/.local/bin/bloomery-serve --hf unsloth/Qwen3-30B-A3B-Instruct-2507-GGUF:Q4_K_M
```

These two commands install the latest release on Linux x86-64 with an NVIDIA GPU (or on Windows inside WSL2) and
serve Qwen3-30B-A3B on port 8080; [Use](#use) sends it a first request. A DGX Spark or another GB10 installs its own
archive or Docker image once a release carries them ([DGX Spark](#dgx-spark-and-other-gb10-machines)), and an Apple
Silicon Mac runs `bloomery-serve-metal` ([Apple Silicon](#apple-silicon)). Homebrew, Docker and the plain tarball are
under [Install](#install).

**From an agent.** Hand Claude Code, Codex or a script [`docs/agents.md`](https://github.com/midagedev/bloomery/blob/HEAD/docs/agents.md). The agent asks the machine
what fits, then starts the model by its name. stdout carries JSON, and every refusal ends with a named…

---
repo: "nace-ai/kapitsa"
name: "kapitsa"
description: "Blazing fast Apple Silicon optimized inference engine built for Qwen and Nemotron. OpenAI + Anthropic API compatible. Built by folks from nace.ai"
readmeQualityOk: true
url: "https://github.com/nace-ai/kapitsa"
language: "C++"
languages: ["C++", "Metal"]
languagePcts: [55, 22]
stars: 116
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-10-16T00:41:59Z"
lastCommitAt: "2026-10-19T09:14:58Z"
lastReleaseAt: "2026-10-19T05:44:16Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 31
maintainers: ["fearampgreed", "itomatik"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ca806f2db634933f9ceea432c22d4f67cda3d63b9abf81ebed6b6b25cb41095/nace-ai/kapitsa"
---

[Install](#install) · [Benchmarks](#benchmarks) · [Models](#models) · [Docs](https://github.com/nace-ai/kapitsa/blob/HEAD/docs/usage.md)

## Install

**Requirements:** a Mac with Apple silicon (M1 or newer) and macOS 14 Sonoma or later.

```bash
brew install nace-ai/tap/kapitsa
# or: curl -fsSL https://raw.githubusercontent.com/nace-ai/kapitsa/main/install.sh | bash
```

```bash
kapitsa opencode --model 35b    # also: kapitsa claude, kapitsa codex, kapitsa pi
```

OpenAI and Anthropic APIs at http://127.0.0.1:8000. Kapitsa updates itself. [Usage guide](https://github.com/nace-ai/kapitsa/blob/HEAD/docs/usage.md)</sub>

## Benchmarks

[details](https://github.com/nace-ai/kapitsa/blob/HEAD/docs/benchmarks.md#the-readmes-tables)</sub>

### MacBook Pro (16-inch, 2024) · M4 Pro · 48 GB

#### Qwen

| Model | <mark>**Kapitsa**</mark> | <sub>oMLX</sub> | <sub>mlx‑serve</sub> | <sub>Ollama</sub> | <sub>MTPLX</sub> | <sub>LM&nbsp;Studio</sub> | <sub>llama.cpp</sub> | <sub>MLX</sub> | <sub>Rapid‑MLX</sub> |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Qwen3.5<br>4B<br><sub>4-bit</sub> | 🟩&nbsp;<mark>**179&nbsp;tok/s**</mark> | 102 | 137 | 109 | 104 | 81 | 70 | 88…

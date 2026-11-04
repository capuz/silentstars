---
repo: "nekko-labs/nekko-agent"
name: "nekko-agent"
description: "Local-first AI coding & cowork desktop app with first-class local model support (Ollama/LM Studio/vLLM)."
readmeQualityOk: true
url: "https://github.com/nekko-labs/nekko-agent"
homepage: "https://nekkoagent.com"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [32, 31]
stars: 5
forks: 0
openIssues: 74
closedIssues: 317
watchers: 0
contributors: 9
recentReleases: 2
createdAt: "2026-06-18T17:38:17Z"
lastCommitAt: "2026-11-04T11:24:13Z"
lastReleaseAt: "2026-08-28T07:40:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["ermish", "Ghezz9", "TravisJPN"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1273612741/a827e6d3-0326-46f5-8463-589d055d84a8"
---

# Nekko Agent

**Local code edits. 5× faster than Ollama.**

Run local models and get real work done in one app. Bring in ChatGPT or Claude
when you want them, with visible context and changes you can review.

**2.5 seconds vs 13.9 seconds** in our whole-file rename benchmark.
M5 Max · Qwen3-8B · Ollama 0.40.11 · October 2026.
One task, not every coding workflow. [Results, limitations and raw runs](https://github.com/nekko-labs/nekko-agent/blob/HEAD/docs/benchmarks.md).

[Download Nekko Agent](https://nekkoagent.com/#download) · [See the benchmark](https://github.com/nekko-labs/nekko-agent/blob/HEAD/docs/benchmarks.md)

Free and open source · MIT licensed · A fast local model server and AI agent in one app

---

## Overview

Nekko Agent is a seriously fast local model server and an AI agent, together
in one app. Run models on your own computer, bring in ChatGPT or Claude when you
want them, and decide exactly what Nekko gets to touch. A **model** is the AI
that does the thinking; **local** means it runs on your computer instead of
someone else's.

1. **Less waiting for local code edits.** In our M5 Max/Qwen3-8B benchmark,
   Nekko returned a 156-line file with a function renamed…

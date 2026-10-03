---
repo: "aosama/astronomical"
name: "astronomical"
description: "Set one RAM ceiling. Run bigger sparse language and vision models on Apple Silicon — experts stream from SSD when they don't fit, without hidden quantization. https://aosama.github.io/astronomical/  Join Discord Server https://discord.gg/dc4E6r4WD"
readmeQualityOk: true
url: "https://github.com/aosama/astronomical"
homepage: "https://aosama.github.io/astronomical/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["apple-silicon", "local-llm", "macos", "mlx", "rust", "vision-language-model", "moe"]
stars: 22
forks: 4
openIssues: 65
closedIssues: 360
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-03T03:32:29Z"
lastCommitAt: "2026-10-03T22:04:35Z"
lastReleaseAt: "2026-08-22T15:37:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 53
maintainers: ["aosama"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1321164726/ce215cb2-d510-4ee7-ac69-73aa5000301b"
discussionCount: 4
---

# Astronomical

**Run bigger local language and vision models on Apple Silicon without requiring every sparse expert to live in RAM.**

You set the model RAM your laptop can spare. Astronomical is a local model runner for Mac users who want serious models, private inference, and direct control over memory: it automatically balances hot expert weights, live context, runtime work, and solid-state-drive streaming under that ceiling.

Read the product story and public engineering reports at [aosama.github.io/astronomical](https://aosama.github.io/astronomical/).

*A captured development run of Qwen3.6-35B-A3B-oQ4e-mtp: 21.61 GB on disk, an 11 GB model-memory ceiling, automatic RAM plus SSD expert streaming, and live prompt-processing telemetry. This demonstrates the operating mode, not a universal throughput guarantee; results vary by model, context, storage, and Mac. Click the image for the [25-second silent demo](https://aosama.github.io/astronomical/assets/astronomical-ram-ssd-streaming.mp4): a 23.55 GB mixture-of-experts model generating fully resident under a 30 GB ceiling, then switching to RAM plus SSD streaming after the ceiling is lowered. Captured run, not a throughput…

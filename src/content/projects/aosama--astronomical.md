---
repo: "aosama/astronomical"
name: "astronomical"
description: "Set one RAM ceiling. Run bigger sparse language and vision models on Apple Silicon — experts stream from SSD when they don't fit, without hidden quantization. https://aosama.github.io/astronomical/  Join Discord Server https://discord.gg/dc4E6r4WD"
readmeQualityOk: true
url: "https://github.com/aosama/astronomical"
homepage: "https://aosama.github.io/astronomical/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["apple-silicon", "local-llm", "macos", "mlx", "rust", "vision-language-model", "moe"]
stars: 25
forks: 6
openIssues: 45
closedIssues: 826
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-03T03:32:29Z"
lastCommitAt: "2026-11-12T05:40:48Z"
lastReleaseAt: "2026-08-22T15:37:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["aosama", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1321164726/ce215cb2-d510-4ee7-ac69-73aa5000301b"
discussionCount: 4
---

# Astronomical

**Astronomical is a local model runner for Apple silicon. You set one RAM ceiling; when a mixture-of-experts model does not fit, selected experts stream from SSD, and declared precision is preserved.**

## Quick start

1. **Download for Mac.** Install the signed, notarized disk image from the [latest release](https://github.com/aosama/astronomical/releases/latest). Astronomical runs on any Apple silicon M-series Mac with macOS 14 (Sonoma) or later.
2. **Set your RAM ceiling and pick a model.** In Observatory, set **Maximum model RAM** on the Settings page, then install a model from Models. The ceiling is the model memory this Mac can spare. On a 32 GB Mac, for example, a lower ceiling such as 16 GB can leave room for macOS and everyday applications.
3. **Chat, or point a tool at the local API.** Talk in Thin Talk, the chat window, or send a chat from Observatory. The menu-bar companion stays up while you work. Stable serves OpenAI-compatible and Anthropic-compatible APIs at [http://127.0.0.1:6732/](http://127.0.0.1:6732/). `astronomical launch claude`, `astronomical launch codex`, or `astronomical launch opencode` starts that agent pointed at this Mac for one…

---
repo: "Henley04/SXSEditor"
name: "SXSEditor"
description: "Create&Synthesis&Modify your AI-powered Virtual Singer. Powered by SoulX-Singer"
readmeQualityOk: true
url: "https://github.com/Henley04/SXSEditor"
homepage: "https://henley04.github.io/SXSEditor/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [73]
topics: ["directml", "soulx-singer", "svs", "virtual-singer", "vocaloid", "zeroshot-voice", "npu", "openvino", "voice-ai", "voice-cloning"]
stars: 18
forks: 2
openIssues: 4
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2026-05-10T06:00:12Z"
lastCommitAt: "2026-11-09T11:59:40Z"
lastReleaseAt: "2026-10-18T13:50:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 50
maintainers: ["Henley04"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1234395528/770dd301-173c-4ceb-a9c6-d4aee7169c5e"
discussionCount: 2
---

# SXSEditor

  AI Singing Voice Synthesis Workstation

  **[Website](https://henley04.github.io/SXSEditor/) · [User Docs](https://henley04.github.io/SXSEditor/user/quick-start.html) · [Developer Docs](https://henley04.github.io/SXSEditor/dev/build.html)**

  **[English](#english) · [中文](#中文) · [日本語](#日本語)**

---

## English

SXSEditor is an open-source desktop application for singing voice synthesis. It uses the SoulX-Singer neural model running on ONNX Runtime with DirectML GPU, WebNN NPU/GPU, and CPU support. On Windows 11 24H2+, an experimental **Windows ML acceleration** option (Settings → ORT advanced) can additionally accelerate the main models (diff_step / vocoder / preflow) via plugin execution providers — NVIDIA RTX → TensorRT-RTX, Intel/AMD → OpenVINO/MIGraphX, Snapdragon NPU → QNN — with automatic fallback to DirectML/CPU.

Supported singing languages: **English**, **Chinese (Mandarin)**, and **Japanese**.

**Platform support**: Windows is the primary platform (installer + DirectML/WebNN acceleration). macOS/Linux are **source-build only** — CPU inference, no DirectML/Windows ML, and **not covered by CI or released binaries**. See the [Developer…

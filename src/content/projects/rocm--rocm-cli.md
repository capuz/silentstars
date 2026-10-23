---
repo: "ROCm/rocm-cli"
name: "rocm-cli"
description: "ROCm CLI is a command-line tool for setting up and running local AI on AMD GPUs, with a full-screen TUI dashboard for GPU telemetry, model serving, and chat."
readmeQualityOk: true
url: "https://github.com/ROCm/rocm-cli"
homepage: "https://rocm.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 48
forks: 13
openIssues: 86
closedIssues: 68
watchers: 0
contributors: 34
recentReleases: 6
createdAt: "2026-06-10T20:33:07Z"
lastCommitAt: "2026-10-23T11:35:55Z"
lastReleaseAt: "2026-10-07T16:49:03Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 86
undervaluedScore: 42
maintainers: ["jussielo-amd", "rominf", "r0x0r"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e554126173607cfe302233b2de761d7d94211654c6fe042467e1cdac5c71c72/ROCm/rocm-cli"
discussionCount: 0
---

# ROCm CLI

```
 ██████╗  ██████╗  ██████╗███╗   ███╗     ██████╗██╗     ██╗
 ██╔══██╗██╔═══██╗██╔════╝████╗ ████║    ██╔════╝██║     ██║
 ██████╔╝██║   ██║██║     ██╔████╔██║    ██║     ██║     ██║
 ██╔══██╗██║   ██║██║     ██║╚██╔╝██║    ██║     ██║     ██║
 ██║  ██║╚██████╔╝╚██████╗██║ ╚═╝ ██║    ╚██████╗███████╗██║
 ╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝     ╚═╝     ╚═════╝╚══════╝╚═╝

        Local AI on AMD GPUs — one binary, zero setup
```

ROCm CLI is a command-line tool for setting up and running local AI on AMD GPUs, with a
full-screen terminal user interface (TUI) dashboard for GPU telemetry, model serving, and chat.

It ships as a single prebuilt binary for Linux and Windows (x86_64), needs no
Python, Rust, or existing ROCm install, and includes inference engine adapters
for Lemonade and vLLM.

| Platform | Prebuilt binary | Notes |
|---|---|---|
| Linux (x86_64) | Yes | Ubuntu 24.04 or newer; full support, including the live dashboard and both inference engines |
| Windows (x86_64) | Yes | CLI and Lemonade serving; no live dashboard or vLLM |
| WSL2 (x86_64) | Yes (Linux binary) | Ubuntu 24.04 or newer; full support, including the live dashboard |
| macOS | No | No official…

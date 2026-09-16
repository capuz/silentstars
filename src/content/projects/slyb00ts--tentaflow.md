---
repo: "Slyb00ts/TentaFlow"
name: "TentaFlow"
description: "Local AI deployment made trivial. Run vLLM, SGLang, Ollama, llama.cpp, MLX, STT & TTS — containerized or native — from a single dashboard. Drag-and-drop flow builder for AI automation. App marketplace for instant integrations and tooling. Security-first architecture with full audit logging. "
readmeQualityOk: true
url: "https://github.com/Slyb00ts/TentaFlow"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
stars: 8
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-03-24T14:24:13Z"
lastCommitAt: "2026-09-16T08:48:14Z"
lastReleaseAt: "2026-09-03T11:26:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["Slyb00ts"]
openGraphImageUrl: "https://opengraph.githubassets.com/38675687648580adbe8a345d6c9129b61c7929240ba622585d793a2c1749342e/Slyb00ts/TentaFlow"
---

# TentaFlow

**An operating system for your AI.**

Turn every device you own - a GPU server, your laptop, your phone - into one private AI mesh.
Deploy models anywhere, wire them into flows, train your own models, and let TentaFlow pick the
right model automatically: the big one on the server when you're connected, the local one on your
phone when you're not.

**[Join us on Discord](https://discord.gg/tRzRxS432)** — questions, help with your setup, and what we are building next.

</div>

---

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/Slyb00ts/TentaFlow/main/scripts/install/install.sh | sh
```

Linux on x86_64 and arm64 (glibc ≥ 2.35 — Ubuntu 22.04+, Debian 12+, Fedora, Arch, RHEL 10+) and
macOS on Apple Silicon. The installer detects the GPU and picks the build to match — CUDA, Vulkan or
Metal, or the slim edition with no local inference — pulls the dependencies your system needs,
registers the service (systemd or launchd) and starts it. Then:

```bash
tentaflow status          # service state, autostart, /health
tentaflow start | stop | restart
tentaflow update          # newest release, checksum-verified, atomic swap
```

The dashboard is at…

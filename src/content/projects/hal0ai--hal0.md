---
repo: "Hal0ai/hal0"
name: "hal0"
description: "Open-source self-hosted home AI inference platform for AMD Strix Halo — multi-backend slots, OpenAI-compatible gateway, Vue 3 + FastAPI + systemd."
readmeQualityOk: true
url: "https://github.com/Hal0ai/hal0"
homepage: "https://hal0.dev"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["ai", "amd-ryzen-ai", "fastapi", "homelab", "igpu", "inference", "llama-cpp", "llm", "npu", "openai-compatible"]
stars: 22
forks: 3
openIssues: 32
closedIssues: 312
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-15T15:27:59Z"
lastCommitAt: "2026-07-04T23:15:04Z"
lastReleaseAt: "2026-06-22T01:38:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 53
maintainers: ["thinmintdev", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b34c177c9e11458ba084a0b61f94ff4f916b81b140a1633993fc7e9c155738/Hal0ai/hal0"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./ui/public/brand/logo-halo-dark.svg">
</picture>

### Open-source home AI inference platform

[hal0.dev](https://hal0.dev) · [Install](https://hal0.dev/docs/install/) · [Docs](https://hal0.dev/docs/) · [Roadmap](https://hal0.dev/roadmap) · [Discord](https://discord.gg/7M4y6dcUyq)

</div>

---

hal0 turns a Linux box — ideally a Ryzen AI Max+ 395 with 128 GB of
unified memory — into a polished, OpenAI-compatible inference appliance.
Hardware-aware slots, prewired chat UI, signed self-update. One command
installs the lot.

Every inference workload runs as its own **podman container** under a
`hal0-slot@<name>.service` unit. `hal0-api` on `:8080` is the sole
control plane — it owns slot state machines, dispatches OpenAI-compatible
`/v1/*` requests to the right slot port, and serves the dashboard. No
shared inference daemon; no extra process to babysit.

```sh
curl -fsSL https://hal0.dev/install.sh | bash
```

> **Status:** **v0.8.4b1** — container-runtime era, declarative
> config. Each slot (`agent`, `utility`, `embed`, `rerank`, `stt`, `tts`,
> `img`, `vision`, NPU trio) runs as a dedicated podman container
>…

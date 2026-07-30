---
repo: "VibePod/vibepod-cli"
name: "vibepod-cli"
description: "Unified CLI for running AI coding agents in isolated containers. Includes built-in local metrics collection, HTTP traffic tracking, and an analytics dashboard to track agent actions."
readmeQualityOk: true
url: "https://github.com/VibePod/vibepod-cli"
homepage: "https://vibepod.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["claude-code", "codex", "opencode", "agentic-ai", "ai-agents", "ai-coding-assistant", "auggie-cli", "cli", "coding-agent", "container-security"]
stars: 104
forks: 6
openIssues: 12
closedIssues: 33
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T21:55:22Z"
lastCommitAt: "2026-07-30T06:06:34Z"
lastReleaseAt: "2026-03-17T14:45:53Z"
status: "thriving"
tags: ["solo_builder", "funded", "under_pressure"]
healthScore: 91
undervaluedScore: 32
maintainers: ["nezhar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1154878315/82f3b37a-426d-4dcb-84a4-3275628313c9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061208Z&X-Amz-Expires=300&X-Amz-Signature=7b8fbf39021ab3ade1d803ac90ac4e8ea3211c4e68518c9a0e4a517ea96f9ce8&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjIyOCwibmJmIjoxNzg1MzkxOTI4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.M0MZA8wmzd1MenUaQHxUFrxMMqoJh48Ur4O0SEJ-ErM"
fundingLinks: ["GITHUB:https://github.com/nezhar", "KO_FI:https://ko-fi.com/nezhar", "BUY_ME_A_COFFEE:https://buymeacoffee.com/nezhar", "CUSTOM:https://www.paypal.com/donate?business=sponsor@nezhar.com&currency_code=EUR"]
---

</p>

<h1 align="center">VibePod</h1>

</p>

VibePod is a unified CLI (`vp`) for running AI coding agents in isolated
Docker or Podman containers — no required configuration, no setup. Just
`vp run <agent>`. Includes built-in local metrics collection, HTTP traffic
tracking, and an analytics dashboard to monitor and compare agents side-by-side.

## Features

- ⚡ **Zero config** — no setup required; `vp run <agent>` just works. Optional YAML for custom configuration
- 🐳 **Isolated agents** — each agent runs in its own Docker or Podman container
- 🔀 **Unified interface** — one CLI for Claude, Gemini, Codex, Devstral/Vibe, Copilot, Auggie, Pi, Agy, Tau, Jcode & more
- 🧩 **Skills** — install reusable prompt recipes per-project or per-user with `vp skills add`
- 🧱 **Project overlays** — commit a `FROM`-less Dockerfile fragment in `.vibepod/overlay/` and VibePod auto-builds a cached, content-addressed image layer on top of the agent's base image ([docs](https://vibepod.dev/docs/overlays/))
- 📊 **Local analytics dashboard** — track usage and HTTP traffic per agent, plus token metrics
- ⚖️ **Agent comparison** — benchmark multiple agents against each other in the dashboard
- 🔒…

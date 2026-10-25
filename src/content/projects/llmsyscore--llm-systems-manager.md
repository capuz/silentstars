---
repo: "llmsyscore/llm-systems-manager"
name: "llm-systems-manager"
description: "LLM Systems Manager — real-time observability and control for LLM systems"
readmeQualityOk: true
url: "https://github.com/llmsyscore/llm-systems-manager"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 27]
topics: ["ai", "ai-tools", "llm", "llmops", "linux", "ai-assistant", "ai-model", "claude-code", "gpt", "inference-engine"]
stars: 11
forks: 3
openIssues: 10
closedIssues: 834
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T00:01:02Z"
lastCommitAt: "2026-10-25T22:10:54Z"
lastReleaseAt: "2026-07-21T23:36:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 52
maintainers: ["syscore-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee57e4c24af30a512ea5b1ddc4352ff8be3f4331d4ee64b53d0c911243ac0cec/llmsyscore/llm-systems-manager"
fundingLinks: ["PATREON:https://patreon.com/llmsystems", "BUY_ME_A_COFFEE:https://buymeacoffee.com/llmsystems", "THANKS_DEV:https://thanks.dev/llmsystems"]
discussionCount: 2
---

# LLM Systems Manager

One self-hosted dashboard to monitor, control, benchmark and tune every machine that runs your local LLMs.

**Works with** llama.cpp, vLLM, LM Studio and stable-diffusion.cpp · **GPUs:** NVIDIA, AMD (ROCm and Vulkan) and Apple Silicon · **Hosts:** Linux and macOS

Try the demo: https://demo.llmsyscore.com

## Install

Run this on the Linux machine that will host the dashboard. One interactive command sets up everything: prerequisites, InfluxDB, config, TLS and the first agent.

```bash
bash <(curl -fsSL https://get.llmsyscore.com/install.sh)
```

Prefer containers? Bring up the dashboard with Docker Compose instead (fill in `.env` before the last command):

```bash
curl -fsSLO https://raw.githubusercontent.com/llmsyscore/llm-systems-manager/main/docker-compose.yml
curl -fsSL https://raw.githubusercontent.com/llmsyscore/llm-systems-manager/main/.env.example -o .env
docker compose up -d
```

[What the install script does](https://github.com/llmsyscore/llm-systems-manager/blob/HEAD/docs/INSTALL_SCRIPT.md) · [All install options](https://github.com/llmsyscore/llm-systems-manager/blob/HEAD/docs/DEPLOYMENT.md) · The dashboard runs on Linux, or on macOS through…

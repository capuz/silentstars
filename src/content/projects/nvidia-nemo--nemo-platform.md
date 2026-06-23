---
repo: "NVIDIA-NeMo/nemo-platform"
name: "nemo-platform"
description: "Make the agents you ship faster, more accurate, and safer."
url: "https://github.com/NVIDIA-NeMo/nemo-platform"
homepage: "http://docs.nvidia.com/nemo-platform"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 24]
stars: 44
forks: 6
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 104
recentReleases: 1
createdAt: "2026-05-14T19:08:25Z"
lastCommitAt: "2026-06-23T23:06:13Z"
lastReleaseAt: "2026-06-16T21:38:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 32
maintainers: ["mckornfield", "crookedstorm", "marcusds"]
openGraphImageUrl: "https://opengraph.githubassets.com/18b68fe6198023ba16097a6f772d5b9a0bbf08972bd0a8914d3f120b83285d71/NVIDIA-NeMo/nemo-platform"
---

# NeMo Platform

<!-- Once the repo is public, swap the CI badge back to the dynamic GitHub Actions one:

Make the agents you ship faster, more accurate, and safer.

NeMo Platform brings NVIDIA NeMo libraries together under one CLI, Python SDK, and web UI. Hardening, evaluation, and tuning for the agents you put in production.

## Get started

**Prerequisites:** Python 3.11-3.14, uv, and an API key for an inference provider (NVIDIA Build, OpenAI, Anthropic, Google Gemini, or a local Ollama instance). Node.js 22.18.x with `pnpm` only if you want the web UI.

```bash
git clone https://github.com/NVIDIA-NeMo/nemo-platform.git
cd nemo-platform

make bootstrap
source .venv/bin/activate

nemo setup
```

`nemo setup` starts local services, registers your LLM provider, discovers available models, installs agent skills, and deploys a sample agent (see more below).

See **[SETUP.md](SETUP.md)** for the full setup playbook (local data dir, DB reset, manual service start, troubleshooting).

Verify:

```bash
nemo services status
```

To permanently reset the database state: `rm -rf ~/.local/share/nemo`.

<details>
<summary>Useful CLI commands once setup completes</summary>

```bash
nemo --help…

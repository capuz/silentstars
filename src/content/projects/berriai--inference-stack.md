---
repo: "BerriAI/inference-stack"
name: "inference-stack"
description: "One-command open source inference stack: LiteLLM + llm-d + vLLM with a launcher and Grafana"
readmeQualityOk: true
url: "https://github.com/BerriAI/inference-stack"
homepage: "https://inferencestack.io"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 24]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-11-21T21:46:33Z"
lastCommitAt: "2026-11-22T11:47:11Z"
lastReleaseAt: "2026-11-22T11:52:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["moe-berri"]
openGraphImageUrl: "https://opengraph.githubassets.com/14117fe18aaace25fa36a19c5d0146f911716cda7348e0cf3a5e162f830a9af9/BerriAI/inference-stack"
---

# Inference Stack

### Everything you need to own your inference. Deploy with one command.

**[Set up with Docker](#docker-compose)** &nbsp; · &nbsp; **[Set up with Kubernetes](#kubernetes)** &nbsp; · &nbsp; **[Launch on AWS](#aws)**

## Quickstart

Use [AWS](https://github.com/BerriAI/inference-stack/blob/HEAD/docs/setup.md#aws) to rent GPUs in your own account, [Docker Compose](https://github.com/BerriAI/inference-stack/blob/HEAD/docs/setup.md#docker-compose) on one machine, or [Kubernetes with Helm](https://github.com/BerriAI/inference-stack/blob/HEAD/docs/setup.md#kubernetes) on an existing cluster. Real models need NVIDIA GPUs; simulation works without one.

### Docker Compose

```bash
curl -fsSL https://github.com/BerriAI/inference-stack/releases/download/v0.3.0/install.sh | bash -s -- docker
```

### Kubernetes

```bash
curl -fsSL https://github.com/BerriAI/inference-stack/releases/download/v0.3.0/install.sh | bash -s -- kubernetes
```

Open [localhost:8080](http://localhost:8080) and sign in as `admin`. The installer tells you where to find the generated password.

---
repo: "open-edge-platform/physical-ai-studio"
name: "physical-ai-studio"
description: "Physical AI Studio is an end-to-end framework for training robots to perform tasks through imitation learning from human demonstrations."
readmeQualityOk: true
url: "https://github.com/open-edge-platform/physical-ai-studio"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 57
forks: 23
openIssues: 45
closedIssues: 81
watchers: 0
contributors: 51
recentReleases: 1
createdAt: "2025-08-28T21:17:43Z"
lastCommitAt: "2026-07-16T05:59:18Z"
lastReleaseAt: "2026-06-04T13:01:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 49
maintainers: ["MarkRedeman", "oep-renovate[bot]", "AlexanderBarabanov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1046551153/2c693420-2265-48fe-8d94-e4dae5d81902"
discussionCount: 10
---

</p>

**Train and deploy Vision-Language-Action (VLA) models for robotic imitation learning**

[Key Features](#key-features) •
[Quick Start](#quick-start) •
[Documentation](#documentation) •
[Contributing](#contributing)

</p>

[Application Documentation →](https://github.com/open-edge-platform/physical-ai-studio/blob/HEAD/application/README.md)

#### Docker

Run the full application (backend + UI) in a single container (using [Docker](https://docs.docker.com/engine/install/ubuntu/)):

```bash
# Clone the repository
git clone https://github.com/open-edge-platform/physical-ai-studio.git
cd physical-ai-studio

# Setup and run docker services
cd application/docker
./setup-devices.sh --xpu # or use --cuda, --cpu
docker compose up -d
```

Application runs at <http://localhost:7860>. See the [Docker README](https://github.com/open-edge-platform/physical-ai-studio/blob/HEAD/application/docker/README.md) for
hardware configuration (Intel XPU, NVIDIA CUDA) and device setup.

If you plan to train Hugging Face Hub-backed policies (for example, SmolVLA, Pi0,
and others), configure `HF_TOKEN` to avoid unauthenticated Hub access warnings. See
[Hugging Face…

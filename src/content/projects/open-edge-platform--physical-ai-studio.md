---
repo: "open-edge-platform/physical-ai-studio"
name: "physical-ai-studio"
description: "Physical AI Studio is an end-to-end framework for training robots to perform tasks through imitation learning from human demonstrations."
readmeQualityOk: true
url: "https://github.com/open-edge-platform/physical-ai-studio"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 137
forks: 53
openIssues: 93
closedIssues: 131
watchers: 1
contributors: 28
recentReleases: 3
createdAt: "2025-08-28T21:17:43Z"
lastCommitAt: "2026-10-13T10:58:06Z"
lastReleaseAt: "2026-10-08T13:50:59Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 48
maintainers: ["AlbertvanHouten", "alfieroddan", "AlexanderBarabanov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1046551153/2c693420-2265-48fe-8d94-e4dae5d81902"
discussionCount: 12
---

**Train and deploy Vision-Language-Action (VLA) models for robotic imitation learning**

[Key Features](#key-features) •
[Quick Start](#quick-start) •
[Documentation](#documentation) •
[Contributing](#contributing)

[Download the full demo video →](https://github.com/open-edge-platform/physical-ai-studio/blob/HEAD/docs/assets/physical_ai_studio_full_overview.mp4)

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

If you plan to train Hugging Face Hub-backed policies (for example, SmolVLA,…

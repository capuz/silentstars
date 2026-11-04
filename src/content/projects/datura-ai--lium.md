---
repo: "Datura-ai/lium"
name: "lium"
description: "Rent ready-to-use cloud GPUs in seconds. Lium CLI makes it easy to launch, manage, and scale GPU compute directly from your terminal. Fast, cost-optimized, and built for AI & ML developers."
readmeQualityOk: true
url: "https://github.com/Datura-ai/lium"
homepage: "https://lium.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-infrastructure", "cli", "cloud-compute", "deep-learning", "devtools", "gpu", "machine-learning", "cloud-gpu", "cloud-gpus", "gpu-cloud"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2025-05-05T16:16:08Z"
lastCommitAt: "2026-11-04T08:04:09Z"
lastReleaseAt: "2026-05-15T18:21:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 79
maintainers: ["surcyf123", "lium-loop[bot]", "arhangel66"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/978203159/0888bacf-fc2b-4615-ab9c-c8b0da098f18"
---

# Lium — Python SDK & CLI

`lium.io` is a Python package that provides both a **command-line interface** and a **Python SDK** for managing GPU pods on the [Lium](https://lium.io) platform. Install it once — use whichever interface fits the job.

## Installation

### Python package

```bash
pip install lium.io
```

### Binary install (macOS amd64/arm64 / Linux amd64/arm64)

```bash
curl -fsSL https://lium.io/install.sh | bash
```

Fresh binary installs place a managed symlink at `~/.lium/bin/lium` that points to a
versioned binary under `~/.lium/versions/<version>/lium`.

## Quick Start

### CLI

```bash
# First-time setup: create an account (mints and stores an API key) …
lium signup --email you@example.com
# … or link an existing account (opens a browser). Headless (agents, CI, containers): pass the key
# instead — lium init --api-key sk_...   (keys: https://lium.io/api-keys), or export LIUM_API_KEY and skip init.
lium init
lium balance

# List available nodes (GPU machines)
lium ls

# Price a job on node #1 before renting it (no API key needed)
lium quote 1 --hours 2

# Create a pod using node index
lium up 1  # Use node #1 from previous ls

# Or create a pod using filters
lium…

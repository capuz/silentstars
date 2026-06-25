---
repo: "fuzzingbrain/afc-crs-all-you-need-is-a-fuzzing-brain"
name: "afc-crs-all-you-need-is-a-fuzzing-brain"
description: "LLM-powered system that discovered 62 zero-day vulnerabilities across 26 open source projects. 4th place, DARPA AIxCC."
url: "https://github.com/fuzzingbrain/afc-crs-all-you-need-is-a-fuzzing-brain"
homepage: "https://fuzzingbrain.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 121
forks: 33
openIssues: 2
closedIssues: 42
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-07-21T13:42:47Z"
lastCommitAt: "2026-06-25T06:40:47Z"
lastReleaseAt: "2026-02-06T17:36:37Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 38
maintainers: ["OwenSanzas"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcefc60abb97ad0960f9bff4237bb3512614f4ba9cc420fe983e783e94b70d3a/fuzzingbrain/afc-crs-all-you-need-is-a-fuzzing-brain"
---

# All You Need Is a Fuzzing Brain

**Autonomous Cyber Reasoning System for Vulnerability Discovery and Patching**

[Paper](https://arxiv.org/abs/2509.07225) | [C Dataset](https://huggingface.co/datasets/Kitxuuu/AIXCC-C-Challenge) | [Java Dataset](https://huggingface.co/datasets/Kitxuuu/AIXCC-Java-Challenge)

</div>

> 🚧 **v2 is in active development under [`v2/`](v2/)** — a self-contained
> rewrite unifying breadth fuzzer engineering with depth SP reasoning over a
> shared seed pool. The stable v1 system documented below is unaffected and
> remains the supported entry point. See [`v2/ARCHITECTURE.md`](v2/ARCHITECTURE.md).

---

## Quick Start (Docker)

The easiest way to run FuzzingBrain:

```bash
# Pull the image
docker pull ghcr.io/o2lab/fuzzingbrain:latest

# Create workspace directory (paths must match for Docker-in-Docker)
sudo mkdir -p /app/workspace

# Run full scan
docker run --rm -it \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /app/workspace:/app/workspace \
  ghcr.io/o2lab/fuzzingbrain:latest https://github.com/OwenSanzas/libpng.git
```

Results (patches, POVs, logs) will be saved to `/app/workspace/<project>/`.

---

## Quick Start (From Source)

### 1.…

---
repo: "AEON-7/Aeon-Bench-Pod"
name: "Aeon-Bench-Pod"
description: "Run the AEON Bench suite on your own hardware: verified HuggingFace pull → serve → benchmark (text · agentic ×3 harnesses · vision · audio · arena · perf) → ed25519-signed attested submit."
readmeQualityOk: true
url: "https://github.com/AEON-7/Aeon-Bench-Pod"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["benchmark", "dgx-spark", "evaluation", "llm", "nvfp4", "speculative-decoding", "vllm"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-04T17:51:30Z"
lastCommitAt: "2026-07-06T07:03:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["AEON-7"]
openGraphImageUrl: "https://opengraph.githubassets.com/b037a20a9aa61e53ea3b8cfab4336eeaa6ca43d8198c1203c27a5eaeb5e8b2b1/AEON-7/Aeon-Bench-Pod"
---

</p>

# AEON Bench Pod

The **open benchmark pod** for [AEON Bench](https://aeon-bench.com): run the
full AEON suite against a model **on your own hardware**, with a controlled, verifiable pipeline —

```
pull (HuggingFace) → verify weights (LFS sha256 + manifest) → serve (recorded recipe)
→ benchmark (text · agentic ×3 harnesses · vision · audio · arena · perf)
→ sign (ed25519 device key) → submit (attested)
```

Results submitted through the controlled flow are **attested** and eligible for the global
leaderboard. Direct-endpoint runs are stored as *self-reported* — useful locally, never globally ranked.

## Quickstart — one command, prebuilt container

Pull the maintained multi-platform image (x86 / ARM / DGX Spark / Apple-silicon Docker Desktop)
and open the dashboard — everything happens from the GUI:

```bash
docker run -d --name aeon-pod --network host \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v aeon-pod-state:/root/.aeon \
  -v "$HOME/aeon-models:/models" -e AEON_MODELS_HOST_DIR="$HOME/aeon-models" \
  ghcr.io/aeon-7/aeon-pod:latest
# open http://localhost:8091 → Run tab
```

macOS (Docker Desktop has no host networking; Apple MLX serves bare-metal on the…

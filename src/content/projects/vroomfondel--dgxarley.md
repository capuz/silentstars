---
repo: "vroomfondel/dgxarley"
name: "dgxarley"
description: "Ansible playbooks for a 4-node K3s cluster with NVIDIA DGX Spark nodes for distributed LLM inference"
readmeQualityOk: true
url: "https://github.com/vroomfondel/dgxarley"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [53, 34]
topics: ["ansible", "arm64", "dgx-spark", "homelab", "k3s", "kubernetes", "llm-inference", "nvidia", "ollama", "sglang"]
stars: 10
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-16T11:20:20Z"
lastCommitAt: "2026-09-22T08:45:40Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 60
maintainers: ["vroomfondel"]
openGraphImageUrl: "https://opengraph.githubassets.com/a46a075bdbec12040188023c9b9efa460b0f103d74b15620da934b2fadcbbcf5/vroomfondel/dgxarley"
---

# DGX Spark Cluster — Ansible Repository

Ansible-Repository for deploying a heterogeneous K3s cluster for distributed LLM inference,
built around four NVIDIA DGX Spark (ARM64) GPU nodes managed by an x86 control-plane node.

## Cluster Nodes

| Node          | Hardware                     | Arch   | Role                                                             |
|---------------|------------------------------|--------|------------------------------------------------------------------|
| **k3smaster** | HP EliteDesk 800 G4          | x86_64 | K3s Master, Control-Plane, Frontend Services, NUT UPS monitoring |
| **spark1**    | DGX Spark / ASUS Ascent GX10 | ARM64  | SGLang Head, Ollama Embedding                                    |
| **spark2**    | DGX Spark / ASUS Ascent GX10 | ARM64  | SGLang Worker, docling-serve                                     |
| **spark3**    | DGX Spark / ASUS Ascent GX10 | ARM64  | SGLang Worker                                                    |
| **spark4**    | DGX Spark / ASUS Ascent GX10 | ARM64  | SGLang Worker                                                    |

### Cluster Overview (K9s — all namespaces)

## Network Architecture

###…

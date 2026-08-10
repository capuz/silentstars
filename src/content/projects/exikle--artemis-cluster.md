---
repo: "Exikle/Artemis-Cluster"
name: "Artemis-Cluster"
description: "Deployment files for my Kubernetes cluster \"Artemis-Cluster\". Mirror of: https://git.dcunha.io/Exikle/Artemis-Cluster/"
readmeQualityOk: true
url: "https://github.com/Exikle/Artemis-Cluster"
homepage: "https://exikle.github.io/Artemis-Cluster/"
language: "YAML"
languages: ["YAML", "Markdown"]
languagePcts: [67, 24]
topics: ["flux", "gitops", "kubernetes", "kubesearch", "mise", "renovate", "selfhosted", "talos", "k8s-at-home"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-10-20T06:36:32Z"
lastCommitAt: "2026-08-10T05:05:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 82
maintainers: ["dusk-bot[bot]", "Exikle"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5172832e10e00009ace462e1359e32b1d6713e1be51a81e812c080ac776c92d/Exikle/Artemis-Cluster"
---

### The Artemis Cluster

_... where YAML is law, Renovate never sleeps, and 2am <br>is just debugging hours._

</div>

</div>

</div>

</div>

---

## 📖 Overview

Artemis is my homelab Kubernetes cluster, built on [Talos Linux](https://www.talos.dev/) and managed entirely through Git. Three bare-metal control planes, three VM workers (one with a GPU), all reconciled automatically by [Flux CD](https://fluxcd.io/) — push to main, it shows up in the cluster.

---

## ⛵ Kubernetes

### Directories

```sh
📁 kubernetes
├── 📁 apps
│   ├── 📁 actions-runner-system  # Self-hosted GitHub Actions runners for CI workflows
│   ├── 📁 cert-manager           # Automated TLS certificates via Let's Encrypt
│   ├── 📁 cortex                 # AI stack — Open WebUI, SearXNG, text-embeddings-inference, ToolHive (9 MCP servers)
│   ├── 📁 default                # Personal apps — Immich (photos), Komga (comics), Bookboss (books)
│   ├── 📁 external-endpoints     # ExternalName services bridging off-cluster resources into the mesh
│   ├── 📁 external-secrets       # 1Password-backed ExternalSecret operator for all cluster secrets
│   ├── 📁 flux-system            # Flux Operator, FluxInstance, and…

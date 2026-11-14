---
repo: "Exikle/home-infra"
name: "home-infra"
description: "Deployment files for my Kubernetes cluster \"Artemis-Cluster\". Mirror of: https://git.dcunha.io/Exikle/Artemis-Cluster/"
readmeQualityOk: true
url: "https://github.com/Exikle/home-infra"
homepage: "https://exikle.github.io/home-infra/"
language: "YAML"
languages: ["YAML", "Markdown"]
languagePcts: [46, 41]
topics: ["flux", "gitops", "kubernetes", "kubesearch", "mise", "renovate", "selfhosted", "talos", "k8s-at-home"]
stars: 6
forks: 0
openIssues: 33
closedIssues: 115
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-10-20T06:36:32Z"
lastCommitAt: "2026-11-14T10:48:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 95
undervaluedScore: 78
maintainers: ["dusk-bot[bot]", "Exikle"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab4343320ac18b1a63fe2d3f19b1c1495237025d6771ad96256328f4b57fdacb/Exikle/home-infra"
---

### home-infra

_... where YAML is law, Renovate never sleeps, and 2am <br>is just debugging hours._

---

## 📖 Overview

This repo holds my whole home infrastructure, managed through Git. Each Kubernetes cluster has
its own folder under `clusters/`. The host configuration (Ansible) and the OpenTofu stacks sit
beside them.

Artemis is the homelab cluster. It runs [Talos Linux](https://www.talos.dev/) on three
bare-metal control planes and four workers (one with a GPU). [Flux CD](https://fluxcd.io/)
reconciles it. When you push to main, the change appears in the cluster.

---

## 🗂️ Layout

```sh
📁 clusters
└── 📁 artemis
    ├── 📁 kubernetes      # What Flux reconciles
    │   ├── 📁 apps        # Flux-managed applications, one directory per namespace
    │   └── 📁 components  # Reusable Kustomize components (kopiur, zeroscaler, postgres, tinyauth)
    ├── 📁 talos
    │   ├── 📁 nodes       # Per-node machine config as Jinja2 templates
    │   └── 📁 schematics  # Image schematics: extensions and kernel args per node type
    └── 📁 bootstrap       # Rebuild the cluster from nothing (helmfile and seed resources)

📁 ansible                 # Host config for what is not in…

---
repo: "Exikle/Artemis-Cluster"
name: "Artemis-Cluster"
description: "Deployment files for my Kubernetes cluster \"Artemis-Cluster\". Mirror of: https://git.dcunha.io/Exikle/Artemis-Cluster/"
readmeQualityOk: true
url: "https://github.com/Exikle/Artemis-Cluster"
homepage: "https://exikle.github.io/Artemis-Cluster/"
language: "YAML"
languages: ["YAML", "Markdown"]
languagePcts: [54, 39]
topics: ["flux", "gitops", "kubernetes", "kubesearch", "mise", "renovate", "selfhosted", "talos", "k8s-at-home"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-10-20T06:36:32Z"
lastCommitAt: "2026-08-22T04:06:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 80
maintainers: ["dusk-bot[bot]", "Exikle"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2fa5feef42e28580bab433a35ad30a1ac0e86db667fcc24fdb3757d6f72c009/Exikle/Artemis-Cluster"
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
│   ├── 📁 arcade                        # Arcade games — eco, Minecraft
│   ├── 📁 cert-manager                  # Automated TLS certificates via Let's Encrypt
│   ├── 📁 cnpg-system                   # CloudNativePG operator
│   ├── 📁 cortex                        # AI stack — litellm proxy/MCP, memini, SearXNG
│   ├── 📁 database                      # Dragonfly operator + PostgreSQL
│   ├── 📁 default                       # Personal apps — Immich (photos), Komga (comics), xBrowserSync
│   ├── 📁 dragonfly-system              # Dragonfly operator
│   ├── 📁 external-endpoints            # ExternalName services bridging off-cluster resources into the…

---
repo: "mortennordbye/homelab"
name: "homelab"
description: "GitOps-managed homelab using Kubernetes (Talos), ArgoCD, and Terraform for infrastructure as code."
readmeQualityOk: true
url: "https://github.com/mortennordbye/homelab"
homepage: "https://blog.nordbye.it"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["argocd", "automation", "homelab", "kubernetes", "cert-manager", "cilium", "hugo", "self-hosted", "terraform"]
stars: 322
forks: 15
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-06T19:29:47Z"
lastCommitAt: "2026-10-31T19:02:30Z"
lastReleaseAt: "2026-05-22T15:56:30Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 36
maintainers: ["mortennordbye", "mortennordbye-homelab-deployer[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/944098278/d4f7be8e-7d11-42c3-899c-f29194de41ef"
discussionCount: 0
---

# Eden

### Homelab Infrastructure

My personal lab environment for experimenting with infrastructure and hosting self-hosted services. Professionally, I work with these technologies daily, but the homelab gives me freedom to explore ideas and patterns that don't always fit production constraints. This is where curiosity meets practicality, testing new tools, solving real problems at home, and yes, occasionally breaking things in the pursuit of learning.

The repository is public by design. Transparency keeps me honest about following best practices, even when it's just for fun.

> Drawn every 15 minutes from [nordbye.it/api/v1/infra](https://nordbye.it/api/v1/infra), which a [CronJob](https://github.com/mortennordbye/homelab/blob/HEAD/k8s/talos/apps/portfolio/status-publisher.yaml) fills from the Kubernetes API and Prometheus. When the cluster is unreachable the card says so.

---

## Documentation

Everything in this repo is documented at [docs.nordbye.it](https://docs.nordbye.it): how the parts fit together, and how to operate or rebuild each one.

- [Architecture](https://docs.nordbye.it/architecture/): what runs where and how the parts depend on each other
- Platform:…

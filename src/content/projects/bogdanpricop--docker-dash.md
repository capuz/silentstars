---
repo: "bogdanpricop/docker-dash"
name: "docker-dash"
description: "Self-hosted Docker management dashboard — runs standalone (zero deps) or in HA mode (Redis). In-app observability wizard (Prometheus+Grafana). Multi-host SSH/TCP, Trivy+Grype+Scout vuln scan, GitOps+Webhooks, RBAC+MFA+LDAP, Docker Swarm, CIS Benchmark, audit log, 11 languages. ~50MB RAM."
url: "https://github.com/bogdanpricop/docker-dash"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["container-management", "dashboard", "devops", "docker", "docker-management", "gitops", "nodejs", "portainer-alternative", "self-hosted", "sqlite"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-27T06:15:44Z"
lastCommitAt: "2026-07-03T12:24:37Z"
lastReleaseAt: "2026-03-31T10:26:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["bogdanpricop"]
openGraphImageUrl: "https://opengraph.githubassets.com/1789096ada229c5090ea689835242b21b9c3b5011c4fa397554d3f1fe408a34f/bogdanpricop/docker-dash"
discussionCount: 1
---

<h1 align="center">🐳 Docker Dash</h1>
    A full-featured Docker management dashboard that runs in two modes:<br>
    <strong>Standalone</strong> for homelab and small teams · <strong>HA</strong> for corporate always-on deploys.<br>
    Same codebase, same binary, zero vendor lock-in.
  </p>
  </p>
  </p>
  </p>
</p>

## Deployment modes

Docker Dash runs in two modes from a single codebase. Pick based on your needs:

|  | **Standalone** (default) | **HA** (opt-in, v7.0.0+) · **Observability** (opt-in, v7.1.0+) |
|---|---|---|
| **Dependencies** | Just Docker | Docker + Redis + sticky-session load balancer |
| **Replicas** | 1 | 2–5 (production-validated) |
| **Failover** | Restart on crash (Docker restart policy) | Automatic — leader lock in Redis, ~30s worst case, milliseconds on graceful restart |
| **Cross-replica events** | N/A | Redis pub/sub (loop-safe, sub-ms delivery) |
| **Rate limiter** | In-process sliding window | Redis `INCR` fixed window, shared across replicas |
| **Sessions** | SQLite (works in both modes) | SQLite (single-writer on leader) |
| **Best for** | Homelab · dev/staging · SMB · single-office | Corporate dashboards · on-prem K8s · always-on…

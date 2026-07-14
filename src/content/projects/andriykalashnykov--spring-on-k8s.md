---
repo: "AndriyKalashnykov/spring-on-k8s"
name: "spring-on-k8s"
description: "Spring Boot 4 on Kubernetes — Actuator probes, Prometheus, ConfigMap configtree, Carvel ytt+kapp deploy, KinD local e2e, Trivy + ZAP + cosign keyless"
readmeQualityOk: true
url: "https://github.com/AndriyKalashnykov/spring-on-k8s"
language: "Java"
languages: ["Java", "Makefile", "Shell"]
languagePcts: [40, 34, 21]
topics: ["spring-boot", "kubernetes", "buildpacks", "docker", "cve-scanning", "custom-buildpack", "docker-image", "kapp", "ytt", "pack"]
stars: 9
forks: 7
openIssues: 1
closedIssues: 4
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-01-04T20:46:37Z"
lastCommitAt: "2026-07-14T05:54:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 79
maintainers: ["renovate[bot]", "AndriyKalashnykov"]
openGraphImageUrl: "https://opengraph.githubassets.com/989f3e8d3e31078b4285fbae583de3e89e4301f0284504631251cf6af6459fcf/AndriyKalashnykov/spring-on-k8s"
---

# Spring Boot 4 on Kubernetes — Reference Service

Reference implementation of a production-pattern Spring Boot 4 service on Kubernetes — the full path from source to signed image. The **runtime surface** exposes REST controllers (`/v1/hello`, `/v1/bye`) with OpenAPI via [springdoc-openapi](https://springdoc.org/), Micrometer + Prometheus instrumentation, Actuator-backed liveness/readiness probes, and ConfigMap-driven configuration through Spring's `configtree:` property source; the **delivery surface** covers Carvel (`ytt` + `kapp`) production deploy, a KinD + cloud-provider-kind local e2e harness, and a supply-chain–hardened GitHub Actions pipeline (Trivy CVE scan, OWASP ZAP baseline DAST, cosign keyless OIDC signing) on an `mise`-pinned toolchain with Renovate-managed dependencies.

> Rendered from [`docs/diagrams/c4-context.puml`](https://github.com/AndriyKalashnykov/spring-on-k8s/blob/HEAD/docs/diagrams/c4-context.puml) (C4-PlantUML, modern-flat theme) via `make diagrams`.

- **End User** — calls the REST API directly over HTTPS / JSON; no fronting gateway in this reference setup
- **spring-on-k8s** — single Spring Boot process exposing application + Actuator endpoints
-…

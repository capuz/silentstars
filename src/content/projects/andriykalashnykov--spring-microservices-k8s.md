---
repo: "AndriyKalashnykov/spring-microservices-k8s"
name: "spring-microservices-k8s"
description: "Runnable Spring Boot 4 microservices on Kind — gateway, MongoDB, Jaeger, Spring Cloud Kubernetes cross-namespace discovery, one make kind-up"
url: "https://github.com/AndriyKalashnykov/spring-microservices-k8s"
homepage: "https://tanzu.vmware.com/developer/guides/kubernetes/app-enhancements-spring-k8s/"
language: "Java"
languages: ["Java", "Makefile"]
languagePcts: [60, 23]
topics: ["java", "spring-boot", "microservice", "kubernetes", "k8s", "spring-cloud-kubernetes", "swagger", "swagger-ui", "netflix-ribbon", "service-discovery"]
stars: 142
forks: 79
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-03-23T15:54:56Z"
lastCommitAt: "2026-06-26T23:40:31Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 48
maintainers: ["renovate[bot]", "AndriyKalashnykov"]
openGraphImageUrl: "https://opengraph.githubassets.com/844326ab24cae65e8fe91a5c83171d73cfce5a111099bf177335c9d6a4e22ee9/AndriyKalashnykov/spring-microservices-k8s"
---

# Runnable Spring Boot 4 Microservices on Kind

Reference implementation of four Spring Boot 4 microservices — gateway, organization, department, employee — deployed to a local Kind cluster in one command, with Spring Cloud Kubernetes cross-namespace service discovery.

The **runtime surface** is a Spring Cloud Gateway fronting REST services that call each other through declarative `@HttpExchange` clients, persist to MongoDB, and emit W3C-`traceparent` spans via Micrometer → OpenTelemetry OTLP → Jaeger, with Actuator health probes and a unified Swagger UI. The **delivery surface** is a Maven multi-module build, a `make static-check` composite quality gate, a three-layer test pyramid (Surefire unit → Testcontainers integration → full Kind e2e), and a hardened GHCR image pipeline (Trivy image scan + Spring Boot smoke test + container-structure-test + cosign keyless OIDC signing) — all from a mise-pinned toolchain with Renovate-managed dependencies, driven by `make kind-up` / `make ci` / `make kind-down`.

Source: [`docs/diagrams/c4-container.puml`](docs/diagrams/c4-container.puml) — PlantUML + [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) with a modern flat skinparam…

---
repo: "YeamimHossainSajid/uber-doma-architecture"
name: "uber-doma-architecture"
description: "An enterprise blueprint for Uber's DOMA in Spring Boot. Eliminates microservice sprawl and internal network latency using tiered API gateways, gRPC, and isolated databases"
readmeQualityOk: true
url: "https://github.com/YeamimHossainSajid/uber-doma-architecture"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["architecture", "domain-driven-design", "grpc", "microservices", "spring-boot", "spring-cloud-gateway", "system-design", "uber-clone"]
stars: 13
forks: 6
openIssues: 836
closedIssues: 43
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-30T10:12:57Z"
lastCommitAt: "2026-10-04T10:03:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 41
maintainers: ["YeamimHossainSajid", "pacman-cli", "arpondark"]
openGraphImageUrl: "https://opengraph.githubassets.com/82316eba29712a2e299c91f92b91aeec823e9a1b2d8361b6e9f4eb94adbcc9b1/YeamimHossainSajid/uber-doma-architecture"
---

# Uber Domain-Oriented Microservice Architecture (DOMA)

> **The definitive enterprise reference implementation of Uber's Domain-Oriented Microservice Architecture (DOMA) for Global Ride Sharing.**  
> Partitions **40 production-grade ride-sharing microservices** into **6 bounded domains**, orchestrated through a **Two-Tier API Gateway** pattern, gRPC HTTP/2 multiplexing, and isolated persistence.

---

## 💡 Why DOMA? Architecture Evolution: Flat Mesh vs. DOMA

### The Evolution: From Monolith to Microservices to DOMA

As Uber scaled from a city-by-city ride-hailing app into a planetary mobility platform handling tens of millions of concurrent trips, its software architecture underwent three massive evolutionary phases:

1. **The Monolith Era (2010–2014):** A single monolithic Python/Ruby codebase (`dispatch-monolith`). While simple initially, it caused massive deployment lock contention, tight relational database coupling, and single-point-of-failure outages.
2. **The Microservice Boom (2014–2018):** Uber decomposed the monolith into thousands of microservices across hundreds of engineering teams. However, without strict domain boundaries, it created an unconstrained…

---
repo: "GoPlasmatic/Orion"
name: "Orion"
description: "The declarative runtime for AI agents, workflows, microservices, and event processing."
readmeQualityOk: true
url: "https://github.com/GoPlasmatic/Orion"
homepage: "https://goplasmatic.github.io/Orion/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["business-logic", "business-rules", "data-pipeline", "event-processing", "jsonlogic", "rules-engine", "rust", "workflow-engine"]
stars: 7
forks: 0
openIssues: 3
closedIssues: 234
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-02-22T03:51:51Z"
lastCommitAt: "2026-08-15T04:03:20Z"
lastReleaseAt: "2026-08-14T10:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["shankar-gpio"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163732401/f8802dac-82ef-40bf-94be-a5da892e6a01"
discussionCount: 0
---

# Orion

  **The declarative runtime for AI agents, workflows, microservices, and event processing.**

  *Safe enough to let an AI write your services. Fast enough to run them in production.*

</div>

Orion is a declarative services runtime. A service is one JSON document holding the logic, the connectors it reaches, and the endpoint it answers on. Post it to a running server and it is live a second later. No rebuild, no restart, no downtime.

Everything around that logic is the runtime's job, and it works the same way for every service you put on it: route and protocol matching, ingress guards, rate limiting, circuit breaking, fault tolerance, connection pooling, zero-downtime hot reload, and end-to-end observability. That is the glue you would otherwise write again for every microservice, agent backend, stream processor, and data pipeline.

It ships as a single Rust binary on Tokio and Axum, storing your service definitions in an embedded database. There is nothing to containerize and nothing to provision.

**Jump to:** [Quickstart](#your-first-service-in-2-minutes) · [What you get](#what-you-get) · [What you can build](#what-you-can-build) · [Is Orion right for…

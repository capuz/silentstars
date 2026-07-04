---
repo: "mannercode/nest-seed"
name: "nest-seed"
description: "NestJS monorepo seed: MSA-ready monolith with Temporal sagas, NATS, distributed locks, and real-infra tests (100% coverage, multi-replica race verification)."
originalDescription: "NestJS monorepo seed: MSA-ready monolith with Temporal sagas, NATS, distributed locks, and real-infra tests (100% coverage, multi-replica race verification)."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/mannercode/nest-seed"
homepage: "https://www.mannercode.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["nestjs", "distributed-systems", "mongodb", "monorepo", "nats", "redis", "saga", "seed", "temporal"]
stars: 21
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-08-29T21:34:28Z"
lastCommitAt: "2026-07-04T22:51:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["hunjuly", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3178aa96893519f548627f7c340b040306413459fbcb2067aba7488b74fccf3/mannercode/nest-seed"
---

# nest-seed

This seed is designed with learning in mind, but it also serves as a base for actual production — the author is using it for a real project. The NestJS backend (`apps/api`) is the core, designed as a monolith, but with module boundaries drawn in advance to easily extract specific functionalities as independent services when needed.

When extracting services, there are no cross-DB relationships like foreign keys or joins, so the service manages relationships by ID, allowing the DB to be released without needing to untangle it first. Since the core value of relational DBs will not be utilized, MongoDB is used, and the consistency between domains is the responsibility of the service, not DB constraints.

The admin console and user app are a minimal demo that adds a frontend to the monorepo.

The example domain is movie ticket booking. It is a well-known domain with a competitive resource, seats, and while the code is a monolith, the deployment consists of a basic 4 containers, naturally leading to distributed issues like double selling, partial failures, and progress notifications. Use cases like showtime registration, booking, and purchasing are built on models like…
